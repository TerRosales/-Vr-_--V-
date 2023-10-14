const container = document.querySelector(".skills-section-div");
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.style.cursor = "grabbing"; // Change cursor style when dragging
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
    const walk = (x - startX) * 2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
});
