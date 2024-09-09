document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select all the links
    
    // Close the navbar when the close button is clicked
    document.querySelector('.close-btn').addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).toggle(); // Toggle the collapse
        }
    });

    // Hide burger button when the navbar is expanded
    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        burgerButton.style.display = 'none';
    });

    // Show burger button when the navbar is collapsed
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        burgerButton.style.display = 'block';
    });

    // Collapse the navbar when a link inside it is clicked
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide(); // Collapse the menu
            }
        });
    });
});
