export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');

  rows.forEach((row) => {
    const [labelCell, valueCell] = [...row.children];
    const label = labelCell?.textContent?.trim();
    const value = valueCell?.innerHTML?.trim();
    if (!label || !value) return;

    const li = document.createElement('li');
    const strong = document.createElement('strong');
    strong.textContent = label;
    const valueEl = document.createElement('p');
    valueEl.innerHTML = value;
    valueEl.style.margin = '0';
    li.append(strong, valueEl);
    list.append(li);
  });

  block.textContent = '';
  block.classList.add('event-details');
  block.append(list);
}

