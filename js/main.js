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


const tiltElements = document.querySelectorAll('.project-card--details');

tiltElements.forEach((element) => {
VanillaTilt.init(element, {
    max: 25,
    speed: 100,
    glare: true,
    "max-glare": 0.3,
    onTilt: function (tilt) {
    const shadowIntensity = Math.abs(tilt.tiltX / 20);
    
    // Add an inner shadow
    const innerBoxShadow = `inset 10px 10px 10px rgba(127, 255, 212, 1)`;
    
    // Add an outer shadow
    const outerBoxShadow = `10px 10px 10px 10px rgba(250, 250, 250, 1)`;
    
    element.style.boxShadow = `${innerBoxShadow}, ${outerBoxShadow}`;
    },
});
});

// const knowMoreButton = document.querySelector(".project-card--button-1");
// const projectCardDetails = document.querySelector(".project-card--details");

// // Add a click event listener to the button
// knowMoreButton.addEventListener("click", () => {
//     // Change background, h4 text, and p text
//     projectCardDetails.style.backgroundImage = "url('your-new-image-url.jpg')";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.querySelector("h4").textContent = "Project 11";
//     projectCardDetails.querySelector("p").textContent = "GitPages";
// });

const projectCardDetails = document.querySelector(".project-card--details");

const knowMoreButton = document.querySelector(".project-card--button-1");
const knowMoreButton2 = document.querySelector(".project-card--button-1");
const knowMoreButton3 = document.querySelector(".project-card--button-1");


// Add a click event listener to the "Know More" button
knowMoreButton.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "url('your-new-image-url.jpg')";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.querySelector("h4").textContent = "New Title";
    projectCardDetails.querySelector("p").textContent = "New text goes here.";
    
    // Check if the link button already exists
    let linkButton = projectCardDetails.querySelector("#link-button");
    
    if (!linkButton) {
        // If it doesn't exist, create and append the link button
        linkButton = document.createElement("button");
        linkButton.textContent = "Visit Page";
        linkButton.id = "link-button"; // Set an ID for the button
        projectCardDetails.appendChild(linkButton);
        
        // Add a click event listener to the link button
        linkButton.addEventListener("click", () => {
            // Redirect to the desired page when the link button is clicked
            window.location.href = "your-target-page.html";
        });
    }
});

knowMoreButton2.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "url('your-new-image-url.jpg')";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.querySelector("h4").textContent = "New Title";
    projectCardDetails.querySelector("p").textContent = "New text goes here.";
    
    // Check if the link button already exists
    let linkButton = projectCardDetails.querySelector("#link-button");
    
    if (!linkButton) {
        // If it doesn't exist, create and append the link button
        linkButton = document.createElement("button");
        linkButton.textContent = "2";
        linkButton.id = "link-button"; // Set an ID for the button
        projectCardDetails.appendChild(linkButton);
        
        // Add a click event listener to the link button
        linkButton.addEventListener("click", () => {
            // Redirect to the desired page when the link button is clicked
            window.location.href = "your-target-page.html";
        });
    }
});

knowMoreButton3.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "url('your-new-image-url.jpg')";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.querySelector("h4").textContent = "New Title";
    projectCardDetails.querySelector("p").textContent = "New text goes here.";
    
    // Check if the link button already exists
    let linkButton = projectCardDetails.querySelector("#link-button");
    
    if (!linkButton) {
        // If it doesn't exist, create and append the link button
        linkButton = document.createElement("button");
        linkButton.textContent = "3";
        linkButton.id = "link-button"; // Set an ID for the button
        projectCardDetails.appendChild(linkButton);
        
        // Add a click event listener to the link button
        linkButton.addEventListener("click", () => {
            // Redirect to the desired page when the link button is clicked
            window.open("https://terrosales.github.io/project-twelve/", "_blank");
        });
    }
});

