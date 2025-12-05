const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// открытие модального окна
document.querySelectorAll('.photo').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

// закрытие по кнопке
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// закрытие по пустому месту
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});
