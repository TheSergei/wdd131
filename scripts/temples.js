const year = document.getElementById("currentyear")
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last modified: " + document.lastModified;

document.querySelector(".burger-menu").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
});
