export default function decorate(block) {
  const rows = [...block.children];
  const getCell = (index) => rows[index]?.children?.[0];
  const heading = getCell(0)?.textContent?.trim() || '';
  const body = getCell(1)?.innerHTML?.trim() || '';
  const cta = getCell(2)?.innerHTML?.trim() || '';

  block.textContent = '';
  block.classList.add('event-promo');

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
