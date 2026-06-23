export default function decorate(block) {
  const rows = [...block.children];
  const headingCell = rows[0]?.children?.[0];
  const heading = headingCell?.textContent?.trim() || '';
  const paragraphs = rows.slice(1)
    .map((row) => row.children?.[0]?.innerHTML?.trim() || '')
    .filter(Boolean);

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
