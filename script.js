// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// ACTIVE LINK
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


document.querySelector(".services-menu").onclick = function () {
  document.querySelector(".dropdown").classList.toggle("show");
}

function toggleDropdown() {
  document.getElementById("voituresDropdown").classList.toggle("show");
}

// Close dropdown if click outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
}





