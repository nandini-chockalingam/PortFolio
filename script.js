// mode changing
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    
    // Save user preference to local storage
    const mode = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", mode);
}

// Load user preference on page load
window.onload = function () {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(savedMode);
    }
};


// btn apperence connect btn

// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.querySelector(".cnt");
//     const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

//     function toggleButton() {
//         const scrollY = window.scrollY;//user position
//         const windowHeight = window.innerHeight; //vh
//         const totalHeight = document.documentElement.scrollHeight; //total website height
//         const bottomThreshold = totalHeight - windowHeight; // Last page position

//         // Show button on 2nd page and last page
//         if (scrollY >= windowHeight || scrollY >= bottomThreshold) {
//             button.style.display = "block";
//         } else {
//             button.style.display = "none";
//         }
//     }
// //changing code
//     function updateButtonForSmallScreen() {
//         if (window.matchMedia("(max-width: 768px)").matches) {
//             button.innerHTML = '<i class="fa-solid fa-paper-plane"></i>'; // Chat icon
//         } else {
//             button.innerHTML = 'CONNECT <i class="fa-solid fa-paper-plane"></i>';
//         }
//     }

//     // Hide button initially
//     button.style.display = "none";

//     // Attach event listener
//     window.addEventListener("scroll", toggleButton);
//     window.addEventListener("resize", updateButtonForSmallScreen);

//     // Call function to set button text correctly on load
//     updateButtonForSmallScreen();
// });

 