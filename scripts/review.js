const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
console.log('Current visits:', numVisits); 

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

console.log('Updated visits:', numVisits); 


visitsDisplay.textContent = numVisits;