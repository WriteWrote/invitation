import { masonryLayout } from './masonry.js';

document.querySelectorAll('.masonry-card').forEach((card) => {
  const img = card.querySelector('.card-front img');
  const cardInner = card.querySelector('.card-inner');

  // ждём пока картинка загрузится
  img.addEventListener('load', () => {
    cardInner.style.height = img.clientHeight + 'px';
  });

  // генерируем QR
  const text = card.dataset.qr; // текст для QR берём из data-атрибута
  const canvas = card.querySelector('.qr-code');

  if (text && canvas) {
    const qrSize = card.clientWidth;

    QRCode.toCanvas(
      canvas,
      text,
      {
        width: qrSize, // размер
        margin: 2, // отступ
        color: {
          dark: '#C48C1A', // цвет пикселей
          light: '#000000', // фон
        },
      },
      function (error) {
        if (error) console.error(error);
      },
    );
  }

  // клик для переворота
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    masonryLayout.layout();
  });
});
