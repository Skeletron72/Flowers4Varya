window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Parallax effect for stars
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  const stars1 = document.querySelector('.stars-layer--1');
  const stars2 = document.querySelector('.stars-layer--2');
  
  if (stars1) {
    stars1.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`;
  }
  if (stars2) {
    stars2.style.transform = `translate(${mouseX * -50}px, ${mouseY * -50}px)`;
  }
});

// Sparkle effect on click
document.addEventListener('click', (e) => {
  createSparkles(e.clientX, e.clientY);
});

// For touch devices
document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  createSparkles(touch.clientX, touch.clientY);
});

function createSparkles(x, y) {
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const size = Math.random() * 4 + 2;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    // Spread them slightly
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    
    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }
}
