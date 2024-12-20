//Get the button:
mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Functional Sticky Navbar
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#features");
var sticky = services.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Navbar Open Function on Mobile Menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  document.getElementById("myNav").style.width = "0";
}
