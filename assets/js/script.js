
//===this code helps to loop through the sections  
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.menu li'); // Select all <li> elements
    const sections = document.querySelectorAll('.main_container section'); // Ensure sections are correctly targeted

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove 'active' class from all <li> elements
            navLinks.forEach(li => li.classList.remove('active'));

            // Remove 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to the clicked <li>
            this.classList.add('active');

            // Get the target section ID from the href attribute of the child <a> tag
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


// to switch theme of the page
let pagecolor = document.body;
function dark_mode() {
    pagecolor.classList.toggle('dark')

    // this conditional statement changes the icon of the theme base on the page color
    if (pagecolor.classList.contains('dark')) {
        let themeIcon = document.querySelector('.theme i');
        if (themeIcon) {
            themeIcon.className = "fa-regular fa-sun";
        }
    } else {
        let themeIcon = document.querySelector('.theme i');
        if (themeIcon) { // Check if themeIcon exists
            themeIcon.className = "fa-regular fa-moon";
        }
    }

}

// This function is there to make the menu appear when tapped
let menu_bar = document.getElementsByClassName("menu_bar");
