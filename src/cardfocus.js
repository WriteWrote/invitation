const items = document.querySelectorAll('.masonry-card');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(other => {
      if (other !== item) {
        const distance = other.offsetLeft - item.offsetLeft;
        other.style.transform = `translateX(${distance > 0 ? 10 : -10}px) scale(0.98)`;
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    items.forEach(other => other.style.transform = 'scale(1) translateX(0)');
  });
});