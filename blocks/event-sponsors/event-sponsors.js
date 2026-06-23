export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');

  rows.forEach((row) => {
    const [tierCell, logosCell] = [...row.children];
    const tier = tierCell?.textContent?.trim();
    const logos = logosCell?.innerHTML?.trim();
    if (!tier || !logos) return;

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = tier;
    const logosWrap = document.createElement('div');
    logosWrap.innerHTML = logos;
    li.append(h3, logosWrap);
    list.append(li);
  });

  block.textContent = '';
  block.classList.add('event-sponsors');
  block.append(list);
}

