import {createElement, injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

let newInput = document.createElement("input")
let crtl = document.getElementById("controle")
crtl.prepend(newInput)

let button = document.getElementById("start")
button.textContent = "Calculer"

function start() {

    let a = Number(newInput.value)

    /*const etapes = [
        {title: "Commence à faire le café", duree: 1000},
        {title:"Mouds les grains de café", duree: 1000},
        {title:"Fait chauffer l'eau", duree: 8000},
        {title: "Infuse les grains de café moulus", duree: 3000},
        {title:"Verse le café dans une tasse", duree: 5000},
        {title:"Ajoute un peu de lait dans la tasse", duree: 5000},
        {title:"Le café est terminé."}
    ]

    const laListe = renewTag('ul');
    wrapper.append(laListe)
    injectElements(etapes, laListe)*/


    const cafes = [
        {title: "café", ingredients: {eau: 200, lait: 50, grains: 15}}
    ] 

    let eauA = parseFloat(prompt("Quantité d'eau disponible (en ml) :"));
    let laitA = parseFloat(prompt("Quantité de lait disponible (en ml) :"));
    let coffeeA = parseFloat(prompt("Quantité de grains de café disponibles (en g) :"));
    let cupsN = parseInt(prompt("Nombre de tasses de café nécessaires :"));

    if (isNaN(eauA) || isNaN(laitA) || isNaN(coffeeA) || isNaN(cupsN) ||
        eauA < 0 || laitA < 0 || coffeeA < 0 || cupsN < 0) {
    } else {

        const selecCoffee = cafes[0]

        const monUl = renewTag('ul')
        wrapper.append(monUl)
        let mesLi = document.createElement('li')
        mesLi.textContent = selecCoffee.title
        monUl.appendChild(mesLi);

        let eauI = cupsN * selecCoffee.ingredients.eau;
        let laitI = cupsN * selecCoffee.ingredients.lait;
        let coffeeI = cupsN * selecCoffee.ingredients.grains;

        if (eauI <= eauA && laitI <= laitA && coffeeI <= coffeeA) {
            alert("Oui, je peux faire cette quantité de café");
        
            let ingredientsList = document.createElement("ul");
            ingredientsList.innerHTML = `
            <li>Eau nécessaire : ${eauI} ml</li>
            <li>Lait nécessaire : ${laitI} ml</li>
            <li>Grains de café nécessaires : ${coffeeI} g</li>
        `;
        wrapper.appendChild(ingredientsList);
        }
    
        
    }
}

document.querySelector('#start').addEventListener('click', start)

