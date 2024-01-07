document.addEventListener('DOMContentLoaded', function () {
    // Show welcome screen on page load
    document.getElementById('welcome-screen').style.display = 'block';
});

function closeWelcome() {
    // Slide upwards and hide the welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.transform = 'translate(-50%, -500%)'; // Adjust the translation

    // Add transitionend event listener to wait for the sliding animation to finish
    welcomeScreen.addEventListener('transitionend', function () {
        // Set display to 'none' after the animation is complete
        welcomeScreen.style.display = 'none';
    }, { once: true }); // Remove the event listener after it's executed once
}

// Add smooth scrolling to section links in the sidebar
document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        // Adjust the offset to position the section slightly higher
        const offset = section.offsetTop - document.getElementById('topbar').offsetHeight - 20;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}


