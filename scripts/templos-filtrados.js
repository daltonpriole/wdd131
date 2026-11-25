const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function toggleActive(elemnet) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
    });

    elemnet.classList.add("active")
}

// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", () => {

    // 1. Obtém e exibe o ano atual automaticamente no rodapé
    const anoElemento = document.getElementById("anoatual");
    if (anoElemento) {
        const anoAtual = new Date().getFullYear();
        anoElemento.textContent = anoAtual;
    }

    // 2. Obtém e exibe a data e hora da última modificação do arquivo
    const modificacaoElemento = document.getElementById("ultimaModificacao");
    if (modificacaoElemento) {
        // document.lastModified retorna uma string contendo a data/hora de modificação do arquivo no servidor
        modificacaoElemento.textContent = document.lastModified;
    }
});

const cutOffDate = new Date('1900-01-01');
const cutOnDate = new Date('2000-01-01')
const largeArea = 90000;
const smallArea = 10000

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigéria",
        dedication: "2005-07-07",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, Estados Unidos",
        dedication: "1888-05-21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, Estados Unidos",
        dedication: "2015-06-07",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedication: "2020-05-02",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, Estados Unidos",
        dedication: "1974-11-19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedication: "1986-01-10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Cidade do México, México",
        location: "Cidade do México, México",
        dedication: "1983-12-02",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Sao Paulo, Brasil",
        location: "São Paulo, SP, Brasil",
        dedication: "2004-02-22",
        area: 59246,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName: "Curitiba, Brasil",
        location: "Curitiba, PR, Brasil",
        dedication: "2008-06-01",
        area: 27850,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-15573-thumb.jpg"
    },
    {
        templeName: "Rio de janeiro, Brasil",
        location: "Rio de Janeiro, RJ, Brasil",
        dedication: "2022-08-05",
        area: 29966,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    }
];



function setFiler(seletor, filterFunction) {
    const element = document.querySelector(seletor);

    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(temples.filter(filterFunction));
    });
}

setFiler('#all', () => true);
setFiler('#old', temple => new Date(temple.dedication) < cutOffDate);
setFiler('#new', temple => new Date(temple.dedication) > cutOnDate);
setFiler('#large', temple => temple.area > largeArea);
setFiler('#small', temple => temple.area < smallArea);


createTempleCard(temples);

function createTempleCard(templos) {
    document.querySelector('.res-grid').innerHTML = '';

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Localização:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicação:</span> ${temple.dedication}`;
        area.innerHTML = `<span class="label">Area ft²:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `Templo ${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}