export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');

  rows.forEach((row) => {
    const [imageCell, nameCell, roleCell, bioCell] = [...row.children];
    const li = document.createElement('li');

    if (imageCell?.innerHTML?.trim()) {
      const imageWrap = document.createElement('div');
      imageWrap.innerHTML = imageCell.innerHTML;
      li.append(imageWrap);
    }

    const name = nameCell?.textContent?.trim();
    if (name) {
      const h3 = document.createElement('h3');
      h3.textContent = name;
      li.append(h3);
    }

    const role = roleCell?.textContent?.trim();
    if (role) {
      const roleEl = document.createElement('p');
      roleEl.innerHTML = `<strong>${role}</strong>`;
      li.append(roleEl);
    }

    const bio = bioCell?.innerHTML?.trim();
    if (bio) {
      const bioEl = document.createElement('p');
      bioEl.innerHTML = bio;
      li.append(bioEl);
    }

    if (li.childElementCount) list.append(li);
  });

  block.textContent = '';
  block.classList.add('event-speakers');
  block.append(list);
}

