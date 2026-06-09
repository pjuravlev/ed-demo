import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('products-card');

    const cells = [...row.children];

    // Cell 0 — Title
    if (cells[0]) {
      const titleWrapper = document.createElement('div');
      titleWrapper.className = 'products-card-title';
      titleWrapper.innerHTML = cells[0].innerHTML;
      li.append(titleWrapper);
    }

    // Cell 1 — Image
    if (cells[1]) {
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'products-card-image';
      imageWrapper.innerHTML = cells[1].innerHTML;
      li.append(imageWrapper);
    }

    // Cell 2 + Cell 3 — Description + CTA (shown on hover)
    const hasBody = cells[2] || cells[3];
    if (hasBody) {
      const body = document.createElement('div');
      body.className = 'products-card-body';

      if (cells[2]) {
        const desc = document.createElement('div');
        desc.className = 'products-card-description';
        desc.innerHTML = cells[2].innerHTML;
        body.append(desc);
      }

      if (cells[3]) {
        const anchor = cells[3].querySelector('a');
        if (anchor) {
          anchor.classList.add('products-card-cta', 'button');
          body.append(anchor);
        }
      }

      li.append(body);
    }

    ul.append(li);
  });

  // Replace plain <img> with optimised <picture>
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
    ),
  );

  block.replaceChildren(ul);
}
