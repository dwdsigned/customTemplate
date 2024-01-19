/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Global variables

// Grabs the Ul element for the desktop menu
const navMenu = document.querySelector('#navbar__list');
// Grabs the UL element for mobile menu
// const hamburgerMenuElement = document.querySelector('#hamburger__menu');
// Grabs all sections elements
const sectionElements = document.querySelectorAll('section');
// Grab all h1 elements
const headerElements = document.querySelectorAll('h1');
// 

// Dynamically builds a navigation menu for desktop
function buildMenu() {
    // For loop to iterate through all the section elements
    for (i = 0; i < sectionElements.length; i++) {
        // Assigns section based on its position in the nodelist
        const section = sectionElements[i];
        // Assigns the id of the corresponding section
        const sectionId = section.id;
        // Assigns dataset attribute to a variable
        const dataNavigate = section.dataset.nav;
        // Generates Headers Dynamically
        headerElements[i].textContent = dataNavigate;
        // Create li element
        const navListElement = document.createElement('li');
        // Create anchor element
        const navAnchorElement = document.createElement('a');
        // Sets the visible text of anchor tags to the value of the dataset value(s)
        navAnchorElement.textContent = dataNavigate;
        // Sets the href of anchor elements
        navAnchorElement.href = `#${sectionId}`;
        // Adds the 'menu__link' class to every anchor element
        navAnchorElement.classList.add('menu__link');
        // Click Event listener for the anchor element allowing smooth scrolling when clicking on the anchor element
        navAnchorElement.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth'});
        });
        // Adds the anchor element that was created to the li element that was created
        navListElement.appendChild(navAnchorElement);
        // Adds the li element with anchor element to the ul element
        navMenu.appendChild(navListElement);
    };
  }

  // Calls the buildMenu function inorder to dynamically build a navigation bar
  buildMenu();

// Adds and removes 'active' class from section and anchor elements
function changeActive() {
    window.addEventListener('scroll', function () {
        sectionElements.forEach(function(section, index) {
            const secPosition = section.getBoundingClientRect();
            section.classList.remove('active');
            // checks if a section is visible
            if (secPosition.top >= 0 && secPosition.bottom <= window.innerHeight) {
                // set its CSS class to 'active'
                section.classList.add('active');
                // console.log(section);
                 // Adds and removes active class on the anchor elements based on the position of the section elements based on the section index
                const anchorElements2 = document.querySelectorAll('.menu__link');
                anchorElements2.forEach( function (anchor) {
                    anchor.classList.remove('active')
                });
                const anchorHL = anchorElements2[index];
                if (anchorHL) {
                    anchorHL.classList.add('active');
                }
                }
            });
        });
    };

// Call the changeActive() inorder add/remove the 'active' class from section and anchor elements
  changeActive();



// Below is the beginning of the Hamburger menu. It involves multiple functions. Some functions are nested.
// *********************************************************************************************
    // Right below is test code for dynamically building the hamburger menu
//*********************************************************************************************** */
// Dynamically builds a navigation menu for mobile Hamburger Menu

// Grabs the UL element for mobile menu
const hamburgerMenuElement = document.querySelector('#hamburger__list');
function buildHamburgerMenuLinks() {
    // For loop to iterate through all the section elements
    for (i = 0; i < sectionElements.length; i++) {
        // Assigns section based on its position in the nodelist
        const section = sectionElements[i];
        // Assigns the id of the corresponding section
        const sectionId = section.id;
        // Assigns dataset attribute to a variable
        const dataNavigate = section.dataset.nav;
        // Generates Headers Dynamically
        // headerElements[i].textContent = dataNavigate;
        // Create li element
        const navListElement = document.createElement('li');
        // Create anchor element
        const navAnchorElement = document.createElement('a');
        // Sets the visible text of anchor tags to the value of the dataset value(s)
        navAnchorElement.textContent = dataNavigate;
        // Sets the href of anchor elements
        navAnchorElement.href = `#${sectionId}`;
        // Adds the 'menu__link' class to every anchor element
        // navAnchorElement.classList.add('menu__link');
        // Click Event listener for the anchor element allowing smooth scrolling when clicking on the anchor element
        navAnchorElement.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth'});
        });
        // Adds the anchor element that was created to the li element that was created
        navListElement.appendChild(navAnchorElement);
        // Adds the li element with anchor element to the ul element
        hamburgerMenuElement.appendChild(navListElement);
    };
  }

//  Calls hamburger menu
buildHamburgerMenuLinks();



// *********************************************************************************************************
































// Rotates the <hr> tags for the hamburger menu when it is clicked to open
function openHamburgerMenu() {
    // Grabs Body element
    const bodyElement = document.querySelector("body");
    // bodyElement.style.overflow = "hidden";
    // Grabs first hr tag in hamburger menu and transforms
    const hr1 = document.getElementById("hr1");
    hr1.style.transition = "transform .5s linear .5s";
    hr1.style.transform ="translate(10px, 40px) rotate(-45deg)";
    // console.log(hr1);
    // Grabs second hr tag in hamburger menu and transforms
    const hr2 = document.getElementById("hr2");
    hr2.style.transition = "transform .5s linear .5s";
    hr2.style.transform = "translate(10px, 10px) rotate(45deg)";
    // console.log(hr2);
    // Move hamburger menu into place
    const hamburgerId = document.getElementById("hamburger__menu");
    hamburgerId.removeAttribute("hidden");
    const reflow = hamburgerId.offsetHeight;
    console.log(reflow);
    // reflow;
    console.log("grab id open", hamburgerId);
    console.log("the menu should be in place");
    hamburgerId.style.transition = "transform .5s linear .5s";
    hamburgerId.style.transform = "translate(-100%)";
    // hamburgerId.style.position = "fixed";
}

// Closes the hamburger menu
function  closeHamburgerMenu() {
    // Grabs actual menu itself
    const hamburgerId = document.getElementById("hamburger__menu");
    console.log("grab id close", hamburgerId);
    // Grabs first hr tag in hamburger menu and transforms
    const hr1 = document.getElementById("hr1");
    hr1.style.transition = "transform .5s linear .5s"; 
    hr1.style.transform ="translate(0px, 0px) rotate(0deg)";
    // console.log(hr1);
    // Grabs second hr tag in hamburger menu and transforms
    const hr2 = document.getElementById("hr2");
    hr2.style.transition = "transform .5s linear .5s";
    hr2.style.transform = "translate(0px, 0px) rotate(0deg)";
    // console.log(hr2);
    // Hides the menu for the hamburger menu
    hamburgerId.style.transition = "transform .5s linear .5s";
    hamburgerId.style.transform = "translate(100%)";
    console.log("the menu should be hidden");
    hamburgerId.setAttribute("hidden", "");
}






// Get hamburger div by id
const hamburgerDiv = document.getElementById("hamburger");
hamburgerDiv.addEventListener("click", hamburgerMenu);

// Global Variable for hamburgerMenu() for the conditionals statement. Set to false by default.
    // This seems necessary since I'm not using something with an alterable state, like a checkbox
let hamburgerMenuIsOpen = false;

// Full function for hamburger menu
function hamburgerMenu() {
    if (!hamburgerMenuIsOpen) {
        // Calls the openHamburgerMenu(). This opens the hamburger menu.
        openHamburgerMenu();
        hamburgerMenuIsOpen = true;
    } else {
        // Calls the closeHamburgerMenu(). This closes the hamburger menu.
        closeHamburgerMenu();
        hamburgerMenuIsOpen = false;
    };
    // console.log("end of conditionals", hamburgerBoolean);
}

















// // Dark Mode
//   const toggleSwitch = document.querySelector(`input[type="checkbox"]`);
//   const nav = document.getElementById(`nav`);
//   const toggleIcon = document.getElementById(`toggle-icon`);
//   const textBox = document.getElementById(`text-box`);


// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = `rgb(35 35 35 /50%)`;
//     textBox.style.backgroundColor = `rgb(235 235 235 / 50%)`;
//     toggleIcon.children[0].textContent = `Dark Mode`;
//     toggleIcon.children[1].classList.replace(`fa-sun`, `fa-moon`);
// }

// // Light Mode Style
// function lightMode() {
//     nav.style.backgroundColor = `rgb(235 235 235 / 50%)`;
//     textBox.style.backgroundColor = `rgb(35 35 35 /50%)`;
//     toggleIcon.children[0].textContent = `Light Mode`;
//     toggleIcon.children[1].classList.replace(`fa-moon`, `fa-sun`);
// }



//   // Switch the theme Dynamically
//   function switchTheme(event) {
//     if (event.target.checked) {
//         document.documentElement.setAttribute(`data-theme`, `dark`);
//         localStorage.setItem(`theme`, `dark`);
//         darkMode();
//     } else {
//         document.documentElement.setAttribute(`data-theme`, `light`);
//         localStorage.setItem(`theme`, `light`);
//         lightMode();
//     }
//   }
//   // Light/Dark Mode Event Listener
//   toggleSwitch.addEventListener("change",switchTheme);

//   // Check Local Storage for Theme
//   const currentTheme = localStorage.getItem(`theme`);
//   if (currentTheme) {
//     document.documentElement.setAttribute(`data-theme`, currentTheme);
//   }

// // Checks Local Store state. If dark mode was enabled, switch the theme of the website to dark
//   if (currentTheme === `dark`) {
//     toggleSwitch.checked = true;
//     darkMode();
//   }

