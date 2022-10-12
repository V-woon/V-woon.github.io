// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById('navbar');
let main = document.getElementById('main');


// Get the offset position of the navbar
let sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  const lockPaddingValue = navbar.clientHeight;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
    main.style.marginTop = lockPaddingValue + 'px';
  } else {
    navbar.classList.remove('sticky');
    main.style.marginTop = "0px";
  }
}