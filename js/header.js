document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select all the links

    var section = document.getElementById("service-col");
    var button = document.getElementById("expander-button");
    var gradient = document.getElementById("serviceback");
    button.innerHTML = '<i class="bi bi-chevron-down"></i>';
    gradient.style.display = "inline-block";
    section.style.maxHeight = "85vh";

    // Close the navbar when the close button is clicked
    document.querySelector('.close-btn').addEventListener('click', function () {
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
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide(); // Collapse the menu
            }
        });
    });
});


function toggleSection() {
    var section = document.getElementById("service-col");
    var button = document.getElementById("expander-button");
    var gradient = document.getElementById("serviceback");

    // Toggle expanded class
    section.classList.toggle("expanded");

    // Change button text
    if (section.classList.contains("expanded")) {
        button.innerHTML = '<i class="bi bi-chevron-up"></i>';
        section.style.maxHeight = section.scrollHeight + "px";
        gradient.style.opacity = "0%";
    } else {
        button.innerHTML = '<i class="bi bi-chevron-down"></i>';
        gradient.style.opacity = "100%";
        section.style.maxHeight = "85vh";
    }
}