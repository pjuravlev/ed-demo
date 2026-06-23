export default function decorate(block) {
  const rows = [...block.children];
  const values = rows.map((row) => row.firstElementChild?.innerHTML?.trim() || '').filter(Boolean);
  const [heading, body, cta] = values;

  block.textContent = '';
  block.classList.add('event-contact');

  if (heading) {
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    block.append(h2);
  }

  if (body) {
    const p = document.createElement('p');
    p.innerHTML = body;
    block.append(p);
  }

  if (cta) {
    const ctaWrap = document.createElement('p');
    ctaWrap.className = 'button-container';
    ctaWrap.innerHTML = cta;
    block.append(ctaWrap);
  }
}

