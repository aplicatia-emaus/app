/* Tutorialul Emaus: diapozitive cu captură, evidențieri numerotate și note.
 * Datele vin din TUT (date.js / admin-date.js) și din MARKS (img/marks.json, generat odată cu capturile).
 * Adrese: #capitol sau #capitol/2. Deschis din aplicație (?din=app, într-un iframe), „Închide” anunță aplicația.
 * Textul se pune doar ca text (textContent); singurul HTML e cel al acestui fișier. */
(function () {
  'use strict';
  var T = window.TUT, MARKS = {};
  var flat = [];
  T.capitole.forEach(function (c, ci) { c.slides.forEach(function (s, si) { flat.push({ c: c, ci: ci, si: si, s: s }); }); });
  var cur = 0, inApp = window.parent !== window || /[?&]din=app/.test(location.search);
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'text') e.textContent = attrs[k]; else if (k === 'cls') e.className = attrs[k]; else e.setAttribute(k, attrs[k]); });
    (function add(k) { if (k == null) return; if (Array.isArray(k)) k.forEach(add); else e.append(k); })(kids);
    return e;
  }
  var ICON = {
    close: 'M6 6l12 12M18 6L6 18', prev: 'M15 18l-6-6 6-6', next: 'M9 18l6-6-6-6', menu: 'M4 7h16M4 12h16M4 17h16', app: 'M4 11L12 4l8 7M6 9.5V20h12V9.5'
  };
  function ic(n) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', '2'); s.setAttribute('stroke-linecap', 'round'); s.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', ICON[n]); s.append(p); return s;
  }
  var main = document.getElementById('main'), tocIn = document.getElementById('toc-in'), toc = document.getElementById('toc');
  var dots = document.getElementById('dots'), pos = document.getElementById('pos'), sub = document.getElementById('sub');
  var bPrev = document.getElementById('prev'), bNext = document.getElementById('next');

  function closeTut() {
    if (window.parent !== window) window.parent.postMessage({ emaus: 'tutorial-inchide' }, '*');
    else if (history.length > 1) history.back(); else location.href = T.aplicatie;
  }
  function buildToc() {
    var ol = el('ol');
    T.capitole.forEach(function (c, ci) {
      var a = el('a', { href: '#' + c.id }, [el('span', { text: String(ci + 1) }), document.createTextNode(c.titlu)]);
      a.addEventListener('click', function (e) { e.preventDefault(); goChap(c.id); toc.classList.remove('open'); });
      ol.append(el('li', null, a));
    });
    tocIn.replaceChildren(el('h2', { text: 'Cuprins' }), ol, T.alt ? el('p', { cls: 'alt' }, [el('a', { href: T.alt.url, text: T.alt.text })]) : null);
  }
  function goChap(id) { for (var i = 0; i < flat.length; i++) if (flat[i].c.id === id) { show(i); return; } show(0); }
  function show(i) {
    cur = Math.max(0, Math.min(flat.length - 1, i));
    var x = flat[cur], s = x.s, c = x.c;
    var notes = el('ol', { cls: 'notes' });
    var m = s.img ? (MARKS[s.img] && MARKS[s.img].marks) || [] : [];
    (s.note || []).forEach(function (t, k) {
      if (!t) return;
      var has = m.some(function (r) { return r.n === k + 1; });
      notes.append(el('li', has ? null : { cls: 'tip' }, [el('b', { text: has ? String(k + 1) : '•', 'aria-hidden': 'true' }), el('span', { text: t })]));
    });
    (s.sfaturi || []).forEach(function (t) { notes.append(el('li', { cls: 'tip' }, [el('b', { text: '✓', 'aria-hidden': 'true' }), el('span', { text: t })])); });
    var txt = el('section', { cls: 'txt', 'aria-live': 'polite' }, [
      el('p', { cls: 'k', text: (x.ci + 1) + '. ' + c.titlu + (c.slides.length > 1 ? ' · ' + (x.si + 1) + ' din ' + c.slides.length : '') }),
      el('h2', { text: s.titlu }),
      (s.text || []).map(function (p) { return el('p', { text: p }); }),
      notes.childNodes.length ? notes : null]);
    var kids = [];
    if (s.img) {
      var shot = el('figure', { cls: 'shot', style: 'margin:0' }, [el('img', { src: 'img/' + s.img + '.webp', alt: s.alt || s.titlu, width: '585', height: '1266', decoding: 'async' })]);
      m.forEach(function (r) {
        if (!s.note || !s.note[r.n - 1]) return;
        shot.append(el('span', { cls: 'mk', 'aria-hidden': 'true', style: 'left:' + r.x + '%;top:' + r.y + '%;width:' + r.w + '%;height:' + r.h + '%' }, [el('b', { text: String(r.n) })]));
      });
      kids.push(shot);
    } else if (s.carduri) {
      kids.push(el('div', { cls: 'cards' }, s.carduri.map(function (k) { return el('div', { cls: 'card' }, [el('h3', { text: k.titlu }), el('ol', null, k.pasi.map(function (p) { return el('li', { text: p }); }))]); })));
    }
    var sl = el('article', { cls: 'slide' + (s.img ? '' : ' solo') }, kids.concat(txt));
    main.replaceChildren(sl, cur === flat.length - 1 ? el('p', { cls: 'foot', text: T.final || '' }) : null);
    sub.textContent = c.titlu;
    pos.textContent = (cur + 1) + ' / ' + flat.length;
    dots.replaceChildren.apply(dots, c.slides.map(function (_, k) { return el('i', { cls: k === x.si ? 'on' : '' }); }));
    bPrev.disabled = cur === 0; bNext.disabled = cur === flat.length - 1;
    tocIn.querySelectorAll('a').forEach(function (a, k) { a.setAttribute('aria-current', String(k === x.ci)); });
    var h = '#' + c.id + (x.si ? '/' + (x.si + 1) : '');
    if (location.hash !== h) history.replaceState(null, '', h);
    window.scrollTo(0, 0);
    // preîncarcă următoarea imagine
    var nx = flat[cur + 1]; if (nx && nx.s.img) { var pre = new Image(); pre.src = 'img/' + nx.s.img + '.webp'; }
  }
  function fromHash() {
    var m = /^#([a-z0-9-]+)(?:\/(\d+))?/.exec(location.hash || '');
    if (!m) return show(0);
    for (var i = 0; i < flat.length; i++) if (flat[i].c.id === m[1]) return show(i + Math.max(0, Math.min(flat[i].c.slides.length, Number(m[2] || 1)) - 1));
    show(0);
  }
  bPrev.append(ic('prev')); bNext.append(ic('next'));
  bPrev.addEventListener('click', function () { show(cur - 1); });
  bNext.addEventListener('click', function () { show(cur + 1); });
  document.getElementById('toc-btn').append(ic('menu'));
  document.getElementById('toc-btn').addEventListener('click', function () { toc.classList.toggle('open'); });
  toc.addEventListener('click', function (e) { if (e.target === toc) toc.classList.remove('open'); });
  var cl = document.getElementById('close');
  if (inApp) { cl.append(ic('close'), el('span', { text: 'Închide' })); cl.addEventListener('click', closeTut); }
  else { cl.replaceWith(el('a', { cls: 'ibtn primary', href: T.aplicatie }, [ic('app'), el('span', { text: 'Aplicația' })])); }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') show(cur + 1);
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') show(cur - 1);
    else if (e.key === 'Escape') { if (toc.classList.contains('open')) toc.classList.remove('open'); else if (inApp) closeTut(); }
  });
  // glisare stânga / dreapta (nu pe verticală, ca derularea să rămână liberă)
  var sx = null, sy = 0;
  main.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  main.addEventListener('touchend', function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) show(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });
  window.addEventListener('hashchange', fromHash);
  // mesaj de la aplicație: { emaus: 'tutorial-capitol', capitol } (aceeași fereastră, alt capitol)
  window.addEventListener('message', function (e) { if (e.data && e.data.emaus === 'tutorial-capitol') goChap(e.data.capitol); });
  buildToc();
  fetch('img/marks.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; })
    .then(function (j) { MARKS = j || {}; fromHash(); });
})();
