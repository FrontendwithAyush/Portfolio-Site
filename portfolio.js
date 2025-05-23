// open slide nav bar
function slide() {
  document.querySelector(".nav").style.display = "flex";
  const elements = document.querySelectorAll(".card-title");
  elements.forEach((el) => {
    el.style.display = "none";
  });
  // document.querySelector("#close-slide").style.display = "flex";

  // this for show paragraph if close the nav bar
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".about-s-para").style.display = "none";
      document.querySelector("#body-para").style.fontSize = ".8rem";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// direct dark mode on
function switch_on() {
  const dark = document.querySelector("body");
  dark.style.background = "#151515";
  dark.style.color = "white";
  document.querySelector(".nav").style.background = "#222222";
  document.querySelector(".phone-nav i").style.background = "#222222";
  document.querySelector(".switch i").style.background = "#222222";
  document.querySelector(".switch").style.display = "none";
  document.querySelector(".switch-off").style.display = "flex";
}
// direct light mode on
function switch_off() {
  const light = document.querySelector("body");
  light.style.background = "#f2f2fc";
  light.style.color = "black";
  document.querySelector(".phone-nav i").style.background = "white";
  document.querySelector(".switch i").style.background = "white";
  document.querySelector(".nav").style.background = "white";
  document.querySelector(".switch").style.display = "flex";
  document.querySelector(".switch-off").style.display = "none";
}
// turn off navigation center
function close_navbar() {
  document.querySelector(".nav").style.display = "none";
  const elements = document.querySelectorAll(".card-title");
  elements.forEach((el) => {
    el.style.display = "flex";
  });
  // this for show paragraph if close the nav bar
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".about-s-para").style.display = "flex";
      document.querySelector("#body-para").style.fontSize = "1.5rem";
      const elements = document.querySelectorAll(".card-title");
      elements.forEach((el) => {
        el.style.display = "none";
      });
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is the main home or front page
function open_home() {
  document.querySelector(".right-home").style.display = "flex";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".skills").style.display = "none";
  document.querySelector(".project").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".nav").style.display = "none";
  // this for phones nav bar size
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".nav").style.height = "120vh";
      document.querySelector("#body-para").style.fontSize = "1.5rem";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is end phones nav bar size
// this is for open about page
function open_about() {
  const about = document.querySelector(".about");
  about.style.display = "flex";
  document.querySelector(".right-home").style.display = "none";
  document.querySelector(".skills").style.display = "none";
  document.querySelector(".project").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".nav").style.display = "none";
  // this for phones nav bar size
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".about-s-para").style.display = "flex";
      document.querySelector(".nav").style.height = "150vh";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is end phones nav bar size
// this is for open skill page
function open_services() {
  const services = document.querySelector(".skills");
  services.style.display = "flex";
  document.querySelector(".right-home").style.display = "none";
  document.querySelector(".project").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".nav").style.display = "none";
  // this for phones nav bar size
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".nav").style.height = "120vh";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is end phones nav bar size
// this is for open project page
function open_project() {
  const portfolio = document.querySelector(".project");
  portfolio.style.display = "flex";
  document.querySelector(".right-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".skills").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".nav").style.display = "none";
  const elements = document.querySelectorAll(".card-title");
  elements.forEach((el) => {
    el.style.display = "flex";
  });
  // this for phones nav bar size
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".nav").style.height = "125vh";
      const elements = document.querySelectorAll(".card-title");
      elements.forEach((el) => {
        el.style.display = "none";
      });
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is end phones nav bar size
// this is for open contact page
function open_contact() {
  const contact = document.querySelector(".contact");
  contact.style.display = "flex";
  document.querySelector(".right-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".skills").style.display = "none";
  document.querySelector(".project").style.display = "none";
  document.querySelector(".nav").style.display = "none";
  // this for phones nav bar size
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      document.querySelector(".nav").style.height = "120vh";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
}
// this is end phones nav bar size
// this is for color nav bar
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    menuItems.forEach((el) => el.classList.remove("active"));

    // Add active class to the clicked item
    item.classList.add("active");
  });
});

// this is end of color nav bar
// loader
// JavaScript to handle loader
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // Hide the loader
    document.body.classList.remove("hidden"); // Show the website content
  }, 1200);
});
// loader end
