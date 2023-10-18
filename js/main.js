const container = document.querySelector(".skills-section-div");
const containerLearning = document.getElementById('learning-section');

const mainTitle = document.getElementById('main-title');


let isDragging = false;
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
    isDown = false;
});

container.addEventListener("mouseup", () => {
    isDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
});

containerLearning.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - containerLearning.offsetLeft;
    scrollLeft = containerLearning.scrollLeft;
});

containerLearning.addEventListener('mouseleave', () => {
    isDragging = false;
});

containerLearning.addEventListener('mouseup', () => {
    isDragging = false;
});

containerLearning.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerLearning.offsetLeft;
    const walk = (x - startX) * 0.8; // Adjust the factor to control scrolling speed
    containerLearning.scrollLeft = scrollLeft - walk;
});

