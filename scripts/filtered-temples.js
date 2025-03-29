const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last modified: " + document.lastModified;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California Temple",
        location: "San Diego California",
        dedicated: "1993, April 30",
        area: 72000,
        imageUrl:
        "images/san_diego.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok Thailand",
        dedicated: "2023, October 22",
        area: 48525,
        imageUrl:
        "images/bangkok.webp"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg Germany",
        dedicated: "2016, August 27",
        area: 21500,
        imageUrl:
        "images/germany_temple.jpg"
    }
];

function createTempleCard(filteredTemples) {
    const grid = document.querySelector(".pic-grid");
    grid.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} Sq Ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        grid.appendChild(card);
    });
}


createTempleCard(temples);


document.querySelector("#oldTemple").addEventListener("click", () => {
    console.log("Old temples clicked");
    const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    createTempleCard(filteredTemples);
});


document.querySelector("#largeTemple").addEventListener("click", () => {
    console.log("Large temples clicked");
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(filteredTemples);
});

document.querySelector("#newTemple").addEventListener("click", () => {
  console.log("New temples clicked");
  const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  createTempleCard(filteredTemples);
})


document.querySelector("#smallTemple").addEventListener("click", () => {
  console.log("Small temples clicked");
  const filteredTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(filteredTemples);
})

document.querySelector("#home").addEventListener("click", () => {
  createTempleCard(temples);
})