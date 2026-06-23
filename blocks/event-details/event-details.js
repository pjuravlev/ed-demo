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

  const previous = block.previousElementSibling;
  if (
    previous
    && previous.classList.contains('event-overview')
    && !(previous.parentElement && previous.parentElement.classList.contains('event-overview-layout'))
  ) {
    const layout = document.createElement('div');
    layout.className = 'event-overview-layout';
    previous.parentElement.insertBefore(layout, previous);
    layout.append(previous, block);
  }
}
