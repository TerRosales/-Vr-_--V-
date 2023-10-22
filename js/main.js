const container = document.querySelector(".skills-section-div");
const containerLearning = document.getElementById('learning-section');

const mainTitle = document.querySelector('#main-title');


let isDragging = false;
let isDown = false;
let startX;
let scrollLeft;

const letters = mainTitle.textContent.split('');

mainTitle.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

const spans = mainTitle.querySelectorAll('span');

spans.forEach(span => {
span.addEventListener("mouseenter", () => {
    span.style.color = "rgba(73,241,171, 0.95)"
    span.style.fontSize = "2.1rem";
    span.style.paddingRight = "1rem"
    span.classList.add("style-tag"); // Add the class
});

span.addEventListener("mouseleave", () => {
    span.style.color = '';
    span.style.fontSize = '';
    span.style.paddingRight = '';
    span.classList.remove("style-tag"); // Remove the class
});
});
//------------------------------------------------------------------------------
// mainTitle.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

// const spans = mainTitle.querySelectorAll('span');

// spans.forEach(span => {
//   span.addEventListener("mouseenter", () => {
//     span.style.transform = `translateY(-0.1rem) scale(2)`;
//     span.style.color = "red";
//   });

//   span.addEventListener("mouseleave", () => {
//     span.style.transform = '';
//     span.style.color = '';
//   });
// });
//------------------------------------------------------------------------------
//   const letters = mainTitle.textContent.split('');

//   mainTitle.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

//   const spans = mainTitle.querySelectorAll('span');

//   spans.forEach(span => {
//     span.addEventListener("mouseenter", () => {
//       span.style.transform = `translateY(-0.1rem) scale(1.1)`;
//       span.style.color = "red";
//     });

//     span.addEventListener("mouseleave", () => {
//       span.style.transform = '';
//       span.style.color = '';
//     });
//   });

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
