// === Dark Mode Toggle ===
document.getElementById('toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // === Scroll to Top Button ===
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // === Smooth Scroll ===
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // === Email Link Alert ===
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', () => {
      alert("Opening your email app to contact Bintang Cahaya Wijaya!");
    });
  }
  
  // === Typing Animation for Hero Title ===
  const title = document.querySelector('.hero h1');
  const text = "Hello, I'm Bintang Cahaya Wijaya";
  let i = 0;
  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  title.textContent = '';
  type();
  
  // === Initialize AOS (if you load it) ===
  document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) AOS.init();
  });
  