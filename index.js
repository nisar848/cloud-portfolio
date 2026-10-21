'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menu && navigation) {
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); };
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!navigation.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
}
const descriptions = {
  app: 'App Service reduces server maintenance. Choose it when managed hosting fits the application’s runtime and operational needs.',
  identity: 'Managed identity lets a workload request Microsoft Entra tokens without storing credentials. Resource permissions still need explicit, scoped access.',
  data: 'Azure SQL provides managed relational storage. Evaluate access controls, connectivity, backup requirements, and cost before choosing a deployment tier.'
};
document.querySelectorAll('[data-node]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-node]').forEach(node => { const selected = node === button; node.classList.toggle('selected', selected); node.setAttribute('aria-pressed', String(selected)); });
  document.querySelector('#node-description').textContent = descriptions[button.dataset.node];
}));
const cards = [...document.querySelectorAll('[data-categories]')];
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  const category = button.dataset.filter;
  cards.forEach(card => { card.hidden = category !== 'all' && !card.dataset.categories.split(' ').includes(category); });
  const count = cards.filter(card => !card.hidden).length;
  document.querySelector('#filter-summary').textContent = `Showing ${count} ${category === 'all' ? '' : category === 'aws' ? 'AWS ' : category === 'azure' ? 'Azure ' : 'strategy '}project${count === 1 ? '' : 's'}`;
}));
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
const dialog = document.querySelector('.image-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.project-images img').forEach(image => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'image-expand'; button.style.cssText = 'border:0;background:transparent;padding:0;width:100%;cursor:zoom-in';
    button.setAttribute('aria-label', `Enlarge ${image.alt}`);
    image.replaceWith(button); button.append(image);
    button.addEventListener('click', () => { dialog.querySelector('img').src = image.src; dialog.querySelector('img').alt = image.alt; dialog.querySelector('p').textContent = image.alt; dialog.showModal(); });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
}
