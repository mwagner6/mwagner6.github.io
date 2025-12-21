// Set particles container height to match document height first
function setParticlesHeight() {
    const particlesContainer = document.getElementById('particles-js');
    const fullpage = document.getElementById('fullpage');
    if (particlesContainer && fullpage) {
        const totalHeight = Math.max(
            fullpage.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        particlesContainer.style.height = totalHeight + 'px';
    }
}

// Set height before loading particles
setParticlesHeight();

// Load particles after height is set
particlesJS.load('particles-js', 'particles/particles.json', function() {
    console.log('callback - particles.js config loaded');
    // Reinitialize on resize
    window.addEventListener('resize', function() {
        setParticlesHeight();
        // Reinitialize particles with new height
        particlesJS.load('particles-js', 'particles/particles.json');
    });
});
