// Set the launch date (1 month from now)
const launchDate = new Date();
launchDate.setMonth(launchDate.getMonth() + 1);

// Update countdown every second
function updateCountdown() {
    const currentDate = new Date();
    const difference = launchDate - currentDate;
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Add leading zeros
    document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
    document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
    
    // Add pulse animation to changing seconds
    const secondsElement = document.getElementById('seconds');
    secondsElement.classList.add('pulse');
    setTimeout(() => {
        secondsElement.classList.remove('pulse');
    }, 500);
}

// Initial call and set interval
updateCountdown();
setInterval(updateCountdown, 1000);

// Create animated particles in the background
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${duration}s infinite ease-in-out;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add keyframe animation for particles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 0.5s ease-in-out;
    }
`;
document.head.appendChild(styleSheet);

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Form submission
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to a server
        console.log(`Subscription request for: ${email}`);
        
        // Show success message
        const button = e.target.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Thanks!';
        button.style.background = 'linear-gradient(to right, #4ecdc4, #2cb5a0)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            e.target.reset();
        }, 3000);
    });
    
    // Add hover effect to countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.countdown-value').style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.countdown-value').style.transform = 'scale(1)';
        });
    });
});