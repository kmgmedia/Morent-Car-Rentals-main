    // Ensure the script runs only after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
    // Select the button element by its ID
    const rentalButton = document.getElementById("rentalBtn");

    // Verify the button exists before adding the event listener
    if (rentalButton) {
        rentalButton.addEventListener("click", function () {
        console.log("Button clicked!");
        // Replace with the correct path to your HTML file
        window.location.href = ".//floater.html";
        });
    } else {
        console.error('Button with ID "rentalBtn" not found!');
    }
    });

// let btn = document.getElementById("rental-button")
// btn.addEventListener('click' , () => {

// })

// let btnClick = document.querySelector("button");

// btnClick.addEventListener("click", () =>{
//     window.location.href = "https://www.linkedin.com/in/moruf-adebola/";
// })

// // JavaScript for Hamburger Menu
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
// navLinks.classList.toggle("active");
// });
