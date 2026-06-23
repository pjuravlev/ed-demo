export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');

  rows.forEach((row) => {
    const [timeCell, titleCell, detailsCell] = [...row.children];
    const time = timeCell?.textContent?.trim();
    const title = titleCell?.textContent?.trim();
    const details = detailsCell?.innerHTML?.trim();
    if (!time && !title && !details) return;

    const li = document.createElement('li');
    if (time) {
      const t = document.createElement('p');
      t.className = 'event-agenda-time';
      t.textContent = time;
      li.append(t);
    }
    if (title) {
      const h3 = document.createElement('h3');
      h3.className = 'event-agenda-title';
      h3.textContent = title;
      li.append(h3);
    }
    if (details) {
      const p = document.createElement('p');
      p.className = 'event-agenda-details';
      p.innerHTML = details;
      li.append(p);
    }
    list.append(li);
  });

  block.textContent = '';
  block.classList.add('event-agenda');
  const heading = document.createElement('h2');
  heading.textContent = 'Agenda';
  block.append(heading, list);
}
