function createInput(type, name, required) {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.id = name;
  if (required) input.required = true;
  return input;
}

export default function decorate(block) {
  const rows = [...block.children];
  const form = document.createElement('form');
  form.setAttribute('aria-label', 'Event registration');

  let submitLabel = 'Submit';

  rows.forEach((row) => {
    const [labelCell, typeCell] = [...row.children];
    const label = labelCell?.textContent?.trim();
    const type = typeCell?.textContent?.trim().toLowerCase();
    if (!label || !type) return;

    if (label.toLowerCase() === 'submit label') {
      submitLabel = typeCell.textContent.trim();
      return;
    }

    const name = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const required = /\*/.test(label);
    const cleanLabel = label.replace(/\*/g, '').trim();

    const fieldLabel = document.createElement('label');
    fieldLabel.setAttribute('for', name);
    fieldLabel.textContent = cleanLabel;

    if (type === 'checkbox') {
      fieldLabel.className = 'event-registration-consent';
      const input = createInput('checkbox', name, false);
      fieldLabel.textContent = '';
      fieldLabel.append(input, cleanLabel);
      form.append(fieldLabel);
      return;
    }

    fieldLabel.append(createInput(type, name, required));
    form.append(fieldLabel);
  });

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = submitLabel;
  form.append(button);

  block.textContent = '';
  block.classList.add('event-registration');
  block.append(form);
}

