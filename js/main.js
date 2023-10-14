const container = document.querySelector('.skills-list');
const list = container.querySelector('ul');

let isDragging = false;
let startY;
let scrollTop;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY - container.getBoundingClientRect().top;
  scrollTop = container.scrollTop;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const y = e.clientY - container.getBoundingClientRect().top;
  const deltaY = y - startY;
  container.scrollTop = scrollTop + deltaY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
});
