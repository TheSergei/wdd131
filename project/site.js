const year = document.getElementById("currentyear")
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last modified: " + document.lastModified;


function saveBooking() {
    localStorage.setItem('username', 'Sergio');
    const user = localStorage.getItem('username'); 
    console.log(`Welcome back, ${user}!`); 
  }
  
  

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('Get My Quote', saveBooking);
  });
