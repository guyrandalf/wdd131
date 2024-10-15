document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');

        if (navMenu.classList.contains('show')) {
            hamburger.innerHTML = '✖';
        } else {
            hamburger.innerHTML = '☰';
        }
    });

    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;

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
            templeName: "São Paulo Brazil Temple",
            location: "São Paulo, Brazil",
            dedicated: "1978, October, 30",
            area: 59246,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/1280x800/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg",
        },
        {
            templeName: "Lisbon Portugal Temple",
            location: "Lisbon, Portugal",
            dedicated: "2019, September, 15",
            area: 23730,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/800x500/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg",
        },
        {
            templeName: "Praia Cape Verde Temple",
            location: "Praia, Santiago, Cape Verde",
            dedicated: "2022, June, 19",
            area: 8759,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/800x500/praia_cape_verde_temple-main.jpeg",
        },
    ];

    const templeContainer = document.getElementById("templeContainer");

    const displayTemples = (templesArray) => {
        templeContainer.innerHTML = "";

        templesArray.forEach((temple) => {
            const card = document.createElement("div");
            card.className = "temple-card";

            const name = document.createElement("h1");
            name.textContent = temple.templeName;
            card.appendChild(name);

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;
            card.appendChild(location);

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;
            card.appendChild(dedicated);

            const area = document.createElement("p");
            area.textContent = `Total Area: ${temple.area} sq ft`;
            card.appendChild(area);

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = temple.templeName;
            image.loading = "lazy";
            card.appendChild(image);

            templeContainer.appendChild(card);
        });
    };

    const filterByOldTemples = () => {
        const filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900
        );
        displayTemples(filteredTemples);
    };

    const filterByNewTemples = () => {
        const filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000
        );
        displayTemples(filteredTemples);
    };

    const filterByLargeTemples = () => {
        const filteredTemples = temples.filter((temple) => temple.area > 90000);
        displayTemples(filteredTemples);
    };

    const filterBySmallTemples = () => {
        const filteredTemples = temples.filter((temple) => temple.area < 10000);
        displayTemples(filteredTemples);
    };

    document.querySelector("nav").addEventListener("click", (event) => {
        event.preventDefault();

        const filter = event.target.textContent.toLowerCase().trim();

        switch (filter) {
            case "old":
                filterByOldTemples();
                break;
            case "new":
                filterByNewTemples();
                break;
            case "large":
                filterByLargeTemples();
                break;
            case "small":
                filterBySmallTemples();
                break;
            case "home":
                displayTemples(temples);
                break;
            default:
                break;
        }
    });
    displayTemples(temples);
});
