// Scroll reveal
const io = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add('on');
      io.unobserve(x.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Kontaktní formulář
document.getElementById('fsub').addEventListener('click', function () {
  const ins = document.querySelectorAll('.form-box input, .form-box textarea');
  const ok = [...ins].slice(0, 2).every(i => i.value.trim());
  if (ok) {
    this.textContent = '✓ Odesláno!';
    this.style.background = '#1a6b3a';
    setTimeout(() => {
      this.textContent = 'Odeslat zprávu →';
      this.style.background = '';
      ins.forEach(i => i.value = '');
    }, 3000);
  } else {
    this.textContent = 'Vyplňte jméno a telefon';
    this.style.background = '#8b1a1a';
    setTimeout(() => {
      this.textContent = 'Odeslat zprávu →';
      this.style.background = '';
    }, 2500);
  }
});
