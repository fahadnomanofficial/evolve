(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress');
  let ticking = false;
  function updateScroll() {
    header?.classList.toggle('scrolled', scrollY > 20);
    const height = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${height > 0 ? Math.min(100, scrollY / height * 100) : 0}%`;
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateScroll); ticking = true; } }, { passive: true });
  updateScroll();
  const loader = document.querySelector('.preloader');
  if (loader) {
    try { if (sessionStorage.getItem('evolve-visited')) loader.remove(); else sessionStorage.setItem('evolve-visited', '1'); } catch {}
    setTimeout(() => loader.remove(), reduced ? 0 : 2100);
  }
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    reveal.forEach(el => observer.observe(el));
  } else reveal.forEach(el => el.classList.add('in-view'));
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  function closeMenu() { toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Open menu'); if (mobileNav) mobileNav.hidden = true; document.body.classList.remove('menu-open'); }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open; document.body.classList.toggle('menu-open', open);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav?.hidden) { closeMenu(); toggle.focus(); } });
  matchMedia('(min-width: 821px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.querySelectorAll('.comparison input').forEach(input => input.addEventListener('input', () => input.closest('.comparison').style.setProperty('--position', input.value + '%')));
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0;
    document.querySelectorAll('.project-index .project-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) { card.classList.add('in-view'); count++; }
    });
    const counter = document.querySelector('#project-count');
    if (counter) { counter.textContent = `${count} PROJECT COLLECTION${count === 1 ? '' : 'S'}`; counter.setAttribute('aria-live', 'polite'); }
  }));
  const search = document.querySelector('#product-search');
  search?.addEventListener('input', () => {
    const value = search.value.toLowerCase().trim(); let count = 0;
    document.querySelectorAll('.product-grid .product-card').forEach(card => { card.hidden = !card.textContent.toLowerCase().includes(value); if (!card.hidden) { count++; card.classList.add('in-view'); } });
    document.querySelector('#search-empty').hidden = count > 0;
  });
  const gallery = [...document.querySelectorAll('[data-lightbox]')];
  const dialog = document.querySelector('.lightbox');
  let current = 0;
  function showImage(index) { current = (index + gallery.length) % gallery.length; const item = gallery[current]; dialog.querySelector('figure img').src = item.dataset.lightbox; dialog.querySelector('figure img').alt = item.querySelector('img').alt; dialog.querySelector('figcaption').textContent = item.dataset.caption; }
  gallery.forEach((item, index) => item.addEventListener('click', () => { showImage(index); dialog.showModal(); document.body.style.overflow = 'hidden'; }));
  dialog?.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog?.querySelector('.lightbox-prev').addEventListener('click', () => { if (gallery.length) showImage(current - 1); });
  dialog?.querySelector('.lightbox-next').addEventListener('click', () => { if (gallery.length) showImage(current + 1); });
  dialog?.addEventListener('close', () => { document.body.style.overflow = ''; });
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog?.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); showImage(current + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); showImage(current - 1); } });
  const form = document.querySelector('#enquiry-form');
  if (form) {
    const interest = new URLSearchParams(location.search).get('interest');
    const select = form.elements.interest;
    if (interest) {
      const aliases = { 'Turnkey project management': 'Turnkey project', 'Skilled installation': 'Installation', 'Interior design solutions': 'Interior solutions' };
      const chosen = aliases[interest] || interest;
      if ([...select.options].some(o => o.value === chosen)) select.value = chosen;
    }
    form.addEventListener('submit', e => {
      e.preventDefault(); if (!form.reportValidity()) return;
      const data = new FormData(form);
      const body = `Hello Evolve team,\n\nI would like to discuss ${data.get('interest')}.\n\n${data.get('message').trim()}\n\nName: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\nPhone: ${data.get('phone').trim() || 'Not provided'}\n\nThank you.`;
      const subject = `Project enquiry — ${data.get('interest')}`;
      document.querySelector('#prepared-message').value = `To: sales@rsgroup.com.mt\nSubject: ${subject}\n\n${body}`;
      document.querySelector('#send-email').href = `mailto:sales@rsgroup.com.mt?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const result = document.querySelector('#enquiry-result'); result.hidden = false;
      result.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'center' });
      document.querySelector('#send-email').focus({ preventScroll: true });
    });
    document.querySelector('#copy-enquiry').addEventListener('click', async () => {
      const textarea = document.querySelector('#prepared-message');
      try { await navigator.clipboard.writeText(textarea.value); document.querySelector('#copy-status').textContent = 'Enquiry copied. Paste it into your email and send it to our team.'; }
      catch { textarea.focus(); textarea.select(); document.querySelector('#copy-status').textContent = 'Your enquiry is selected. Copy it and paste it into your email.'; }
    });
  }
})();
