export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');

  rows.forEach((row) => {
    const [imageCell, nameCell, roleCell, bioCell] = [...row.children];
    const li = document.createElement('li');
    const media = document.createElement('div');
    media.className = 'event-speakers-media';
    const content = document.createElement('div');
    content.className = 'event-speakers-content';

    if (imageCell?.innerHTML?.trim()) {
      const imageWrap = document.createElement('div');
      imageWrap.innerHTML = imageCell.innerHTML;
      media.append(imageWrap);
    }

    const name = nameCell?.textContent?.trim();
    if (name) {
      const h3 = document.createElement('h3');
      h3.textContent = name;
      content.append(h3);
    }

    const role = roleCell?.textContent?.trim();
    if (role) {
      const roleEl = document.createElement('p');
      roleEl.innerHTML = `<strong>${role}</strong>`;
      content.append(roleEl);
    }

    const bio = bioCell?.innerHTML?.trim();
    if (bio) {
      const bioEl = document.createElement('p');
      bioEl.innerHTML = bio;
      content.append(bioEl);
    }

    if (media.childElementCount) li.append(media);
    if (content.childElementCount) li.append(content);
    if (li.childElementCount) list.append(li);
  });

  block.textContent = '';
  block.classList.add('event-speakers');
  const heading = document.createElement('h2');
  heading.textContent = 'Speakers';
  block.append(heading, list);
}
