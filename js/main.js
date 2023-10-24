const container = document.querySelector(".skills-section-div");
const containerLearning = document.getElementById('learning-section');

const mainTitle = document.querySelector('#main-title');


let isDragging = false;
let isDown = false;
let startX;
let scrollLeft;
// handles events for moving the scrollable elements
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
// scrollable elements handles ends here

const containers = document.querySelectorAll('.observable');

function handleIntersection(entries, observer) {
entries.forEach(entry => {

        console.log(entries);
    
        if (entry.isIntersecting) {
            entry.target.classList.remove('move-to-left');
            entry.target.classList.add('animate');
        } else if (entry.target.classList.contains('project-card')) {
            entry.target.classList.remove('animate');
            entry.target.classList.add('move-to-left');
        } else if (entry.target.classList.contains('project-intro')) {
            entry.target.classList.remove('animate');
        }

});
};

observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "1px",
    threshold: 0.1
})

containers.forEach(containers => {
    observer.observe(containers)
})


// Vanilla tilt Uses
const tiltElement = document.querySelectorAll('.project-card--details');

VanillaTilt.init(tiltElement);


VanillaTilt.init(tiltElement, {
    max: 25,  // Maximum tilt rotation (in degrees)
    speed: 500, // Tilt speed
    glare: true, // Enable glare effect
    "max-glare": 0.3, // Max glare opacity
});




