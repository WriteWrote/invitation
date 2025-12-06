import Masonry from 'https://cdn.jsdelivr.net/npm/masonry-layout@4/+esm';

async function waitForImages(selector) {
  const imgs = document.querySelectorAll(selector);
  await Promise.all(Array.from(imgs).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => img.addEventListener('load', resolve));
  }));
}

document.addEventListener('DOMContentLoaded', async () => {
  await waitForImages('.masonry-card img');

  initMasonry();
});

let masonryLayout = undefined;

function initMasonry() {
  masonryLayout = new Masonry('.masonry', {
    itemSelector: '.masonry-card',
    columnWidth: 400,
    // columnWidth: '.masonry-card',
    // percentPosition: true,
    gutter: 30,
  });
}

// const allImgs = document.querySelectorAll('.masonry .masonry-card img');
// let loadedCount = 0;
//
// allImgs.forEach((img) => {
//   if (img.complete) {
//     loadedCount++;
//   } else {
//     img.addEventListener('load', () => {
//       loadedCount++;
//     });
//   }
// });

// const checkAndInit = setInterval(() => {
//   if (loadedCount === allImgs.length) {
//     clearInterval(checkAndInit);
//     initMasonry()
//   }
// }, 50);

export { masonryLayout };
