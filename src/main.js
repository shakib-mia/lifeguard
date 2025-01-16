// const { default: Lenis } = require("lenis");
import Lenis from "lenis";
import AOS from "aos";
import { Autoplay, Navigation } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
  });
});

const navbar = document.getElementById("navbar");
const navContent = document.getElementById("nav-content");
// navbar.style.position = "fixed";
// navbar.style.top = 0;

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Hero Slider
const swiper = new Swiper("header .swiper", {
  modules: [Autoplay],
  // speed: 400,
  slidesPerView: 1,
  spaceBetween: 10, // Adjust space between slides if needed
  breakpoints: {
    // When screen width is <= 480px (Mobile)
    600: {
      slidesPerView: 1, // 1 slide for mobile
    },
    // When screen width is >= 768px (Tablet)
    768: {
      slidesPerView: 2, // 2 slides for tablets
    },
    1024: {
      slidesPerView: 3, // Default for PC
    },
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

// Coverage options slider

const coverageOptions = new Swiper("#coverage-options", {
  modules: [Autoplay, Navigation],
  // speed: 400,
  slidesPerView: 1,
  spaceBetween: 10, // Adjust space between slides if needed
  breakpoints: {
    // When screen width is <= 480px (Mobile)
    600: {
      slidesPerView: 1, // 1 slide for mobile
    },
    // When screen width is >= 768px (Tablet)
    768: {
      slidesPerView: 2, // 2 slides for tablets
    },
    1024: {
      slidesPerView: 3, // Default for PC
    },
  },
  autoplay: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // Custom classes for the buttons
    disabledClass: "swiper-button-disabled",
    // You can customize the button classes
    prevEl: ".coverage-prev-button",
    nextEl: ".coverage-next-button",
  },
});

// Testimonial Slider

const testimonialSlider = new Swiper("#testimonial .swiper", {
  modules: [Navigation, Autoplay],
  // speed: 400,
  slidesPerView: 1,
  spaceBetween: 10, // Adjust space between slides if needed
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // Custom classes for the buttons
    disabledClass: "swiper-button-disabled",
    // You can customize the button classes
    prevEl: "#testimonial-prev-button",
    nextEl: "#testimonial-next-button",
  },

  breakpoints: {
    // When screen width is <= 480px (Mobile)
    600: {
      slidesPerView: 1, // 1 slide for mobile
    },
    // When screen width is >= 768px (Tablet)
    768: {
      slidesPerView: 2, // 2 slides for tablets
    },
    1024: {
      slidesPerView: 3, // Default for PC
    },
  },

  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu ul");

  menuToggle.addEventListener("click", () => {
    // Toggle the 'open' class on the menu for transitions
    menu.classList.toggle("open");
  });
});

// Select elements
const playIcon = document.getElementById("playButton");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeButton");
const videoFrame = document.getElementById("videoFrame");

// YouTube Video URL

// Show modal on play icon click
playIcon.addEventListener("click", () => {
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
  videoFrame.src =
    "https://www.youtube.com/embed/Os1oDqefGOA?si=ZNoNK5qI3_0xqDn8";
});

// Close modal on close button click
closeModal.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
});

// Close modal on background click
videoModal.addEventListener("click", (event) => {
  // if (event.target === videoModal) {
  videoFrame.src = ""; // Stop the video
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
  // }
});

// Select all anchor tags within the navigation menu
document.querySelectorAll(".menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const targetId = this.getAttribute("href").slice(1); // Remove the # symbol
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Select all anchor tags within the navigation menu
document.querySelectorAll("#menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const targetId = this.getAttribute("href").slice(1); // Remove the # symbol
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Close the menu
      if (window.innerWidth < 1024) {
        const menu = document.querySelector("#menu ul");
        menu.classList.remove("open");
      }

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// document
//   .getElementById("download-button")
//   .addEventListener("click", () =>
//     window.open(
//       "https://www.stgeorges.nhs.uk/wp-content/uploads/2013/11/Pregnancy_Book_comp.pdf"
//     )
//   );

// Accordion

// Get all accordion items
document.querySelectorAll(".accordion-button").forEach((button, index) => {
  // Initialize the first accordion item as open
  if (index === 0) {
    const content = document.getElementById(`content-${index + 1}`);
    const icon = document.getElementById(`icon-${index + 1}`);
    content.classList.remove("h-0", "py-0");
    content.classList.add("h-auto", "py-4");
    icon.classList.add("rotate-180", "bg-primary", "text-white"); // Chevron is upward with styles
    button.classList.add("bg-green-100"); // Active button background
    button.setAttribute("data-open", "true"); // Mark as open
  } else {
    button.setAttribute("data-open", "false"); // Mark others as closed
  }

  // Add click event listener for toggling accordion items
  button.addEventListener("click", () => {
    const content = document.getElementById(`content-${index + 1}`);
    const icon = document.getElementById(`icon-${index + 1}`);
    const isOpen = button.getAttribute("data-open") === "true";

    // Only allow toggling if it's not already open or another is open
    if (!isOpen) {
      // Close all other accordion items
      document
        .querySelectorAll(".accordion-button")
        .forEach((otherButton, otherIndex) => {
          if (otherIndex !== index) {
            const otherContent = document.getElementById(
              `content-${otherIndex + 1}`
            );
            const otherIcon = document.getElementById(`icon-${otherIndex + 1}`);
            otherContent.classList.add("h-0", "py-0");
            otherContent.classList.remove("h-auto", "py-4");
            otherIcon.classList.remove(
              "rotate-180",
              "bg-primary",
              "text-white"
            );
            otherIcon.classList.add("-rotate-90");
            otherButton.classList.remove("bg-green-100");
            otherButton.setAttribute("data-open", "false");
          }
        });

      // Open the current accordion item
      content.classList.remove("h-0", "py-0");
      content.classList.add("h-auto", "py-4");
      icon.classList.add("rotate-180", "bg-primary", "text-white");
      button.classList.add("bg-green-100");
      button.setAttribute("data-open", "true");
    }
  });
});

document.getElementById("year").innerText = new Date().getFullYear();
