(function () {
  const KEY = 'cs_auth';
  const PASSWORD = 'wearahelmet';

  if (sessionStorage.getItem(KEY) === '1') return;

  // Inject modal HTML
  const overlay = document.createElement('div');
  overlay.id = 'cs-gate';
  overlay.innerHTML = `
    <div class="cs-gate__box">
      <p class="cs-gate__label">Password required</p>
      <h2 class="cs-gate__title">This work is protected</h2>
      <form class="cs-gate__form" id="cs-gate-form" autocomplete="off">
        <input
          class="cs-gate__input"
          id="cs-gate-input"
          type="password"
          placeholder="Enter password"
          autofocus
        />
        <button class="btn btn--primary cs-gate__btn" type="submit">
          Enter <span class="btn__arrow" aria-hidden="true">→</span>
        </button>
      </form>
      <p class="cs-gate__error" id="cs-gate-error" hidden>Incorrect password. Try again.</p>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.getElementById('cs-gate-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const val = document.getElementById('cs-gate-input').value;
    if (val === PASSWORD) {
      sessionStorage.setItem(KEY, '1');
      overlay.remove();
      document.body.style.overflow = '';
    } else {
      const err = document.getElementById('cs-gate-error');
      err.hidden = false;
      document.getElementById('cs-gate-input').value = '';
      document.getElementById('cs-gate-input').focus();
    }
  });
})();
