export default function decorate(block) {
  const rows = [...block.children];
  const values = rows.map((row) => row.firstElementChild?.innerHTML?.trim() || '').filter(Boolean);
  const [heading, ...paragraphs] = values;

  block.textContent = '';
  block.classList.add('event-overview');

  if (heading) {
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    block.append(h2);
  }

  paragraphs.forEach((content) => {
    const p = document.createElement('p');
    p.innerHTML = content;
    block.append(p);
  });
}

