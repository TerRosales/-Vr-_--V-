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


// const projectCardDetails = document.querySelector(".project-card--details");

// const knowMoreButton1 = document.querySelector(".project-card--button-1");
// const knowMoreButton2 = document.querySelector(".project-card--button-2");
// const knowMoreButton3 = document.querySelector(".project-card--button-3");


// let linkButton = null; // Initialize the link button variable
// let videoElement = null; // Initialize a variable to store the video element

// function createLinkButton(buttonNumber, url) {
//     linkButton = document.createElement("button");
//     linkButton.textContent = buttonNumber;
//     linkButton.id = `link-button-${buttonNumber}`;
    
//     linkButton.addEventListener("click", () => {
//         window.open(url, "_blank");
//     });
    
//     projectCardDetails.appendChild(linkButton);
// }
// function createLinkButton2(buttonNumber, url) {
//     linkButton = document.createElement("button");
//     linkButton.textContent = buttonNumber;
//     linkButton.id = `link-button-${buttonNumber}`;
    
//     linkButton.addEventListener("click", () => {
//         window.open(url, "_blank");
//     });
    
//     projectCardDetails.appendChild(linkButton);
// }

// knowMoreButton1.addEventListener("click", () => {
//     // Change background, h4 text, and p text
//     projectCardDetails.style.backgroundImage = "url('/assets/math-me-up.png')";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.style.backgroundPosition = "center";
//     projectCardDetails.querySelector("h4").textContent = "New Title 1";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 1.";
    
//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }

//     if (videoElement) {
//         projectCardDetails.removeChild(videoElement);
//     }

    
//     createLinkButton(1, "https://terrosales.github.io/project-XI/");
// });

// knowMoreButton2.addEventListener("click", () => {
//     // Change background, h4 text, and p text
//     projectCardDetails.style.backgroundImage = "url('/assets/project-0-zero.png')";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.querySelector("h4").textContent = "New Title 2";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 2.";
    
//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }
    
//     if (videoElement) {
//         projectCardDetails.removeChild(videoElement);
//     }


//     createLinkButton(2, "https://terrosales.github.io/project-0-Zero/");
// });

// knowMoreButton3.addEventListener("click", () => {
//     // Change background, h4 text, and p text
    
//     projectCardDetails.style.backgroundImage = "linear-gradient(120deg, rgba(127, 255, 120, 1), rgba(0, 20, 0, 0.6)";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.querySelector("h4").textContent = "New Title 3";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 3.";
    
//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }

//     createLinkButton2(3, "https://terrosales.github.io/project-twelve/");
//     const videoElement = document.createElement('video');
//     videoElement.id = 'hoverVideo'; // Set an ID for the video element
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.width = 540;
//     videoElement.height = 400;
//     const sourceElement = document.createElement('source');
//     sourceElement.src = '/assets/quiz-time-vid.mp4'; // Replace with your video URL
//     sourceElement.type = 'video/mp4';
//     videoElement.appendChild(sourceElement);
//     projectCardDetails.appendChild(videoElement);
// });




// const projectCardDetails = document.querySelector(".project-card--details");
// const knowMoreButton1 = document.querySelector(".project-card--button-1");
// const knowMoreButton2 = document.querySelector(".project-card--button-2");
// const knowMoreButton3 = document.querySelector(".project-card--button-3");

// let linkButton = null; // Initialize the link button variable
// let videoElement = null; // Initialize the video element variable

// function createLinkButton(buttonNumber, url) {
//     linkButton = document.createElement("button");
//     linkButton.textContent = buttonNumber;
//     linkButton.id = `link-button-${buttonNumber}`;

//     linkButton.addEventListener("click", () => {
//         window.open(url, "_blank");
//     });

//     projectCardDetails.appendChild(linkButton);
// }

// knowMoreButton1.addEventListener("click", () => {
//     // Change background, h4 text, and p text
//     projectCardDetails.style.backgroundImage = "url('/assets/math-me-up.png')";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.style.backgroundPosition = "center";
//     projectCardDetails.querySelector("h4").textContent = "New Title 1";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 1.";

//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }

//     // Check if the video element is a child of projectCardDetails before removing it
//     if (videoElement && videoElement.parentElement === projectCardDetails) {
//         projectCardDetails.removeChild(videoElement);
//     }

//     createLinkButton(1, "https://terrosales.github.io/project-XI/");
// });

// knowMoreButton2.addEventListener("click", () => {
//     // Change background, h4 text, and p text
//     projectCardDetails.style.backgroundImage = "url('/assets/project-0-zero.png')";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.querySelector("h4").textContent = "New Title 2";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 2.";

//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }

//     // Check if the video element is a child of projectCardDetails before removing it
//     if (videoElement && videoElement.parentElement === projectCardDetails) {
//         projectCardDetails.removeChild(videoElement);
//     }

//     createLinkButton(2, "https://terrosales.github.io/project-0-Zero/");
// });

// knowMoreButton3.addEventListener("click", () => {
//     // Change background, h4 text, and p text

//     projectCardDetails.style.backgroundImage = "linear-gradient(120deg, rgba(127, 255, 120, 1), rgba(0, 20, 0, 0.6)";
//     projectCardDetails.style.backgroundSize = "cover";
//     projectCardDetails.querySelector("h4").textContent = "New Title 3";
//     projectCardDetails.querySelector("p").textContent = "New text goes here 3.";

//     // Remove the previous link button if it exists
//     if (linkButton) {
//         projectCardDetails.removeChild(linkButton);
//     }

//     // Check if the video element is a child of projectCardDetails before removing it
//     if (videoElement && videoElement.parentElement === projectCardDetails) {
//         projectCardDetails.removeChild(videoElement);
//     }

//     // Create and add the video element
//     videoElement = document.createElement('video');
//     videoElement.id = 'hoverVideo'; // Set an ID for the video element
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.width = 540;
//     videoElement.height = 400;
//     const sourceElement = document.createElement('source');
//     sourceElement.src = '/assets/quiz-time-vid.mp4'; // Replace with your video URL
//     sourceElement.type = 'video/mp4';
//     videoElement.appendChild(sourceElement);
//     projectCardDetails.appendChild(videoElement);
// });


// ///////////////////////////////////////////////////////////////////////////



const projectCardDetails = document.querySelector(".project-card--details");
const knowMoreButton1 = document.querySelector(".project-card--button-1");
const knowMoreButton2 = document.querySelector(".project-card--button-2");
const knowMoreButton3 = document.querySelector(".project-card--button-3");

let linkButton = null; // Initialize the link button variable
let videoElement = null; // Initialize the video element variable

function createLinkButton(buttonLink, url) {
    linkButton = document.createElement("button");
    linkButton.textContent = buttonLink;
    linkButton.id = `link-button`;

    linkButton.addEventListener("click", () => {
        window.open(url, "_blank");
    });

    projectCardDetails.appendChild(linkButton);
}

knowMoreButton1.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "url('/assets/math-me-up.png')";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.style.backgroundPosition = "top center";
    projectCardDetails.querySelector("h4").textContent = "New Title 1";
    projectCardDetails.querySelector("p").textContent = "New text goes here 1.";

    // Remove the previous link button if it exists
    if (linkButton) {
        projectCardDetails.removeChild(linkButton);
    }

    // Check if the video element is a child of projectCardDetails before removing it
    if (videoElement && videoElement.parentElement === projectCardDetails) {
        projectCardDetails.removeChild(videoElement);
    }

    createLinkButton("Visit", "https://terrosales.github.io/project-XI/");
});

knowMoreButton2.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "url('/assets/project-0-zero.png')";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.querySelector("h4").textContent = "New Title 2";
    projectCardDetails.querySelector("p").textContent = "New text goes here 2.";

    // Remove the previous link button if it exists
    if (linkButton) {
        projectCardDetails.removeChild(linkButton);
    }

    // Check if the video element is a child of projectCardDetails before removing it
    if (videoElement && videoElement.parentElement === projectCardDetails) {
        projectCardDetails.removeChild(videoElement);
    }

    createLinkButton("Visit", "https://terrosales.github.io/Project-0-Zero/");
});

knowMoreButton3.addEventListener("click", () => {
    // Change background, h4 text, and p text
    projectCardDetails.style.backgroundImage = "linear-gradient(120deg, rgba(127, 255, 120, 1), rgba(0, 20, 0, 0.6)";
    projectCardDetails.style.backgroundSize = "cover";
    projectCardDetails.querySelector("h4").textContent = "New Title 3";
    projectCardDetails.querySelector("p").textContent = "New text goes here 3.";

    // Remove the previous link button if it exists
    if (linkButton) {
        projectCardDetails.removeChild(linkButton);
    }

    // Check if the video element is a child of projectCardDetails before removing it
    if (videoElement && videoElement.parentElement === projectCardDetails) {
        projectCardDetails.removeChild(videoElement);
    }

    // Create and add the video element
    videoElement = document.createElement('video');
    videoElement.id = 'hoverVideo'; // Set an ID for the video element
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.width = 540;
    videoElement.height = 400;
    videoElement.style.borderRadius = "17%"; // Apply rounded corners
    const sourceElement = document.createElement('source');
    sourceElement.src = '/assets/quiz-time-vid.mp4'; // Replace with your video URL
    sourceElement.type = 'video/mp4';
    videoElement.appendChild(sourceElement);
    projectCardDetails.appendChild(videoElement);

    // Create the link button for knowMoreButton3
    createLinkButton("Visit", "https://terrosales.github.io/project-twelve/");
});

