/*
 * Vechea adresă a aplicației (fosta „Caiet de ucenicie”, acum Emaus: https://aplicatia-emaus-code.github.io/).
 * Acest Service Worker înlocuiește pe cel vechi și se autodistruge: oprește abonamentul la notificări al vechii adrese
 * (serverul îl șterge la următoarea trimitere), apoi se dezînregistrează. Dacă mai apucă un push, anunță adresa nouă.
 */
'use strict';
var NOU = 'https://aplicatia-emaus-code.github.io/';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.registration.pushManager.getSubscription()
    .then(function (s) { return s && s.unsubscribe(); })
    .catch(function () {})
    .then(function () { return self.registration.unregister(); }));
});
self.addEventListener('push', function (e) {
  e.waitUntil(self.registration.showNotification('Emaus are o adresă nouă', {
    body: 'Caietul de ucenicie se numește acum Emaus. Atinge ca să-l deschizi și pornește din nou notificările acolo.',
    tag: 'caiet', data: { url: NOU }
  }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.openWindow(NOU));
});
