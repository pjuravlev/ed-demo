export default function decorate(block) {
  const rows = [...block.children];
  const first = rows[0] ? [...rows[0].children] : [];
  const second = rows[1] ? [...rows[1].children] : [];

  block.textContent = '';
  block.classList.add('event-venue');

  const info = document.createElement('div');
  info.className = 'event-venue-info';
  info.innerHTML = `<h2>${first[0]?.textContent?.trim() || 'Venue'}</h2><p>${first[1]?.innerHTML?.trim() || ''}</p>${second[0]?.innerHTML?.trim() || ''}`;

  const media = document.createElement('div');
  media.className = 'event-venue-media';
  media.innerHTML = second[1]?.innerHTML?.trim() || '';

  block.append(info, media);
}

