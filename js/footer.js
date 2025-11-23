(function() {
  var target = document.getElementById('site-footer');
  if (!target) return;

  target.innerHTML = [
    '<div class="container footer-inner">',
      '<p>&copy; <span id="year"></span> Time Chunks. <a href="privacy.html" class="footer-link">Privacy</a></p>',
    '</div>'
  ].join('');

  var yearEl = target.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
