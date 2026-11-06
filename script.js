// Navegación móvil
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulario de contacto
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !msg) {
    status.textContent = 'Por favor completa todos los campos.';
    status.style.color = '#ff5555';
    return;
  }
  status.textContent = `¡Gracias ${name}! Te responderemos a ${email} pronto. 📼`;
  status.style.color = '#00f0ff';
  e.target.reset();
}

// Efecto de aparición suave al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.movie-card, .service-card, .genre-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.reveal { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
