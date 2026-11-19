/*
 * Service Worker-ul ramei „Emaus” (GitHub Pages: aplicatia-emaus.github.io/app/).
 *
 * 1. Notificările push. Push-ul nu are conținut: cerem starea de la aplicație (doGet ?push=<hash-ul abonamentului>),
 *    afișăm notificarea și punem cifra pe iconiță.
 *      - iPhone / iPad (aplicația pe ecranul principal) și Windows / macOS: cifră pe iconiță (setAppBadge);
 *      - Android: sistemul pune bulina pe iconiță cât timp notificarea nu e citită.
 *    Fiecare push TREBUIE să afișeze o notificare (cerința Safari și Chrome), chiar dacă starea nu a putut fi citită.
 * 2. Instalarea: handlerul de fetch (cerut de Chrome și Edge pentru butonul „Instalează”). Doar deschiderea paginii trece
 *    prin el: întâi rețeaua, iar fără conexiune o pagină scurtă „Fără conexiune”. Restul cererilor (aplicația Google din
 *    cadru, imaginile, iconițele) merg direct la rețea, neatinse. Nimic nu se păstrează în cache, deci o versiune nouă
 *    a paginii-ramă ajunge imediat la toți.
 * Adresa aplicației vine din parametrul ?app= al înregistrării (index.html), ca să o scrieți într-un singur loc.
 *
 * VERSIUNE: se schimbă la fiecare modificare a acestui fișier. Orice octet schimbat aici face telefoanele să instaleze
 * versiunea nouă la următoarea deschidere a aplicației (skipWaiting + clients.claim o activează imediat).
 */
'use strict';
var VERSIUNE = '2026-11-20';
var APP_URL = new URL(self.location.href).searchParams.get('app') || '';
var TAG = 'caiet';

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  // cache-urile vechi (de la orice versiune anterioară) nu mai sunt folosite
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.map(function (n) { return caches.delete(n); })); })
    .catch(function () {}).then(function () { return self.clients.claim(); }));
});

/* ───────────── fetch: doar deschiderea paginii; fără conexiune, un mesaj clar ───────────── */
var FARA_CONEXIUNE = '<!DOCTYPE html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
  '<meta name="theme-color" content="#1D2B4F"><title>Emaus</title></head>' +
  '<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#1D2B4F;color:#fff;font:16px/1.5 system-ui,-apple-system,\'Segoe UI\',Roboto,sans-serif;text-align:center">' +
  '<div style="padding:24px;max-width:32ch"><p style="font-size:1.25rem;font-weight:700;margin:0 0 8px">Fără conexiune la internet</p>' +
  '<p style="margin:0 0 20px;opacity:.85">Emaus are nevoie de internet. Verifică conexiunea și încearcă din nou.</p>' +
  '<button onclick="location.reload()" style="min-height:44px;padding:0 20px;border:0;border-radius:999px;background:#8DBB6E;color:#10200A;font:inherit;font-weight:700">Încearcă din nou</button></div></body></html>';

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.mode !== 'navigate' || req.method !== 'GET') return;          // restul cererilor: direct la rețea
  e.respondWith(fetch(req).catch(function () {
    return new Response(FARA_CONEXIUNE, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
  }));
});

/* ───────────── notificările push ───────────── */
function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }

/** Cheia dispozitivului = SHA-256 al adresei de abonare (aceeași regulă ca pe server). */
function deviceKey() {
  return self.registration.pushManager.getSubscription().then(function (sub) {
    if (!sub) return '';
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(sub.endpoint)).then(hex);
  });
}

function fetchState() {
  return deviceKey().then(function (k) {
    if (!k || !APP_URL) return null;
    var ctrl = new AbortController();
    var t = setTimeout(function () { ctrl.abort(); }, 9000);
    return fetch(APP_URL + '?push=' + k, { cache: 'no-store', credentials: 'omit', redirect: 'follow', signal: ctrl.signal })
      .then(function (r) { clearTimeout(t); return r.ok ? r.json() : null; })
      .catch(function () { clearTimeout(t); return null; });
  });
}

function setBadge(n) {
  if (!('setAppBadge' in self.navigator)) return Promise.resolve();
  var p = n > 0 ? self.navigator.setAppBadge(n) : n === 0 ? self.navigator.clearAppBadge() : self.navigator.setAppBadge();
  return p.catch(function () { /* fără cifră pe acest sistem */ });
}

self.addEventListener('push', function (e) {
  e.waitUntil(fetchState().then(function (st) {
    var ok = !!(st && st.ok);
    var n = ok ? Math.max(0, Math.min(99999, Number(st.n) || 0)) : null;
    var title = ok && st.titlu ? String(st.titlu).slice(0, 80) : 'Emaus';
    var body = ok && st.text ? String(st.text).slice(0, 240) : 'Ai noutăți. Deschide aplicația ca să le vezi.';
    // dispozitivul nu mai e legat de un cont (ieșire din cont): nu mai punem cifră
    var badge = st && st.sters ? setBadge(0) : setBadge(n);
    return badge.then(function () {
      return self.registration.showNotification(title, {
        body: body, tag: TAG, renotify: true,
        icon: 'icon-192.png', badge: 'badge-96.png',
        requireInteraction: !!(ok && st.urgent),
        data: { url: self.registration.scope }
      });
    });
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf(self.registration.scope) === 0 && 'focus' in list[i]) return list[i].focus();
    }
    return self.clients.openWindow ? self.clients.openWindow(url) : null;
  }));
});

/* Abonamentul a fost reînnoit de browser: pagina îl trimite serverului la următoarea deschidere a aplicației. */
self.addEventListener('pushsubscriptionchange', function (e) {
  var opts = e.oldSubscription && e.oldSubscription.options;
  if (!opts) return;
  e.waitUntil(self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: opts.applicationServerKey }).catch(function () {}));
});
