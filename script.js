// Function to simulate real-time 'vibe' fluctuations
function updateVibe() {
    const percentageElement = document.getElementById('vibe-percentage');
    const barElement = document.getElementById('vibe-bar');
    
    // Random fluctuation between 96% and 99.9%
    const newVibe = (Math.random() * (99.9 - 96) + 96).toFixed(1);
    
    percentageElement.innerText = `${newVibe}%`;
    barElement.style.width = `${newVibe}%`;
}

// Update every 3 seconds
setInterval(updateVibe, 3000);

// Simple Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
});

document.querySelectorAll('.glass').forEach((el) => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});