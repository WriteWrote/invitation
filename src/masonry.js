import Masonry from 'https://cdn.jsdelivr.net/npm/masonry-layout@4/+esm';

new Masonry('.masonry', {
  itemSelector: '.item',
  columnWidth: 50,
  percentPosition: true,
  gutter: 20,
});
