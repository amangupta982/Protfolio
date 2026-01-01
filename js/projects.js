// Reserved for future hover / animation effects
// Simple fade-in animation
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  setTimeout(() => {
    card.style.transition = 'all 0.6s ease';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, i * 150);
});