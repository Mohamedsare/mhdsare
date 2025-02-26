const bubbleContainer = document.createElement("div");
bubbleContainer.style.position = "fixed";
bubbleContainer.style.top = "0";
bubbleContainer.style.left = "0";
bubbleContainer.style.width = "100vw";
bubbleContainer.style.height = "100vh";
bubbleContainer.style.overflow = "hidden";
bubbleContainer.style.pointerEvents = "none";
bubbleContainer.style.zIndex = "9999";
document.body.appendChild(bubbleContainer);

function createBubble() {
    const bubble = document.createElement("div");
    const size = Math.random() * 80 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.position = "absolute";
    bubble.style.bottom = "-10px";
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.background = `radial-gradient(circle, rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.9), rgba(255, 255, 255, 0))`;
    bubble.style.borderRadius = "50%";
    bubble.style.opacity = "0.9";
    bubble.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.7)";
    bubble.style.transition = "transform 8s ease-in-out, opacity 8s ease-in-out";
    bubbleContainer.appendChild(bubble);

    const horizontalMovement = (Math.random() - 0.5) * 100;
    const rotation = Math.random() * 360;
    setTimeout(() => {
        bubble.style.transform = `translate(${horizontalMovement}px, -100vh) rotate(${rotation}deg) scale(${Math.random() * 1.8 + 0.5})`;
        bubble.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createBubble, 200);


const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);
    
    if (isClickOnButton) {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
        overlay.classList.toggle("active");
    } else if (!isClickInsideMenu) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        overlay.classList.remove("active");
    }
});

