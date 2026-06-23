export default function decorate(block) {
  const rows = [...block.children];
  const values = rows.map((row) => row.firstElementChild?.innerHTML?.trim() || '');
  const [eyebrow, title, subtitle, date, time, location, cta] = values;

  block.textContent = '';
  block.classList.add('event-hero');

  if (eyebrow) {
    const eyebrowEl = document.createElement('p');
    eyebrowEl.className = 'event-hero-eyebrow';
    eyebrowEl.textContent = eyebrow;
    block.append(eyebrowEl);
  }

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    block.append(h1);
  }

  if (subtitle) {
    const subtitleEl = document.createElement('p');
    subtitleEl.innerHTML = subtitle;
    block.append(subtitleEl);
  }

  const meta = document.createElement('div');
  meta.className = 'event-hero-meta';
  [date, time, location].filter(Boolean).forEach((value) => {
    const p = document.createElement('p');
    p.innerHTML = value;
    meta.append(p);
  });
  if (meta.childElementCount) block.append(meta);

  if (cta) {
    const ctaContainer = document.createElement('p');
    ctaContainer.className = 'button-container';
    ctaContainer.innerHTML = cta;
    block.append(ctaContainer);
  }
}

