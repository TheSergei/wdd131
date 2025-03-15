const year = document.getElementById("currentyear")
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last modified: " + document.lastModified;

function windChill(temp, speed){
   return 35.74+(0.6215 * temp) -35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
}

let temp = 42;
let speed = 4;

if (temp <= 50 && speed > 3){
    let chill = windChill(temp, speed);

    let rounded = Math.round(chill * 100) / 100;

    document.getElementById("windchill").innerText = "Windchill: " + rounded;
}  
else{
    document.getElementById("windchill").innerText = "no wind chill to report";
}