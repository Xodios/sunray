/* SunRay — petits comportements du site (menu, barre d'appel, formulaire). */
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  /* Menu mobile */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    root.classList.toggle('nav-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1080) setMenu(false);
    });
  }

  /* Filet sous l'en-tête quand on fait défiler */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Barre « Appeler / Écrire » sur mobile : visible une fois les boutons de l'accueil dépassés */
  var heroButtons = document.querySelector('.hero .btn-row');
  if (heroButtons && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      var passed = !e.isIntersecting && e.boundingClientRect.top < 0;
      root.classList.toggle('show-callbar', passed);
    }).observe(heroButtons);
  } else {
    root.classList.add('show-callbar');
  }

  /* Formulaire : prépare un e-mail dans la messagerie de la personne */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var message = f.message.value.trim();
      if (!message) { f.message.focus(); return; }
      var prenom = f.prenom.value.trim();
      var tel = f.telephone.value.trim();
      var profil = f.profil.value;

      var subject = 'Prise de contact depuis le site' + (profil ? ' – ' + profil : '');
      var lines = ['Bonjour,', '', message, ''];
      if (prenom) lines.push(prenom);
      if (tel) lines.push('Téléphone : ' + tel);

      var href = 'mailto:sunraynice@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(lines.join('\r\n'));
      window.location.href = href;

      var status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Votre messagerie devrait s’ouvrir. Si rien ne se passe, écrivez-nous directement à sunraynice@gmail.com ou appelez le 06 56 85 83 34.';
      }
    });
  }

  /* Année du pied de page */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
