import {createElement, injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

let newInput = document.createElement("input")
let crtl = document.getElementById("controle")
crtl.prepend(newInput)

let button = document.getElementById("start")
button.textContent = "Calculer"

function start() {

    let a = Number(newInput.value)
    const etapes = [
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

    injectElements(etapes, laListe)

    function calculer() {
        let quantiteCafe = Number(document.getElementById("quantiteCafe").value);
    
        if (isNaN(quantiteCafe) || quantiteCafe <= 0) {
            alert("Veuillez entrer une quantité de café valide.");
            return;
        }
    
        const eauNecessaire = quantiteCafe * 200; 
        const laitNecessaire = quantiteCafe * 50; 
        const cafeNecessaire = quantiteCafe * 15; 
    

        const resultat = document.getElementById("resultat");
        resultat.innerHTML = `
            Pour ${quantiteCafe} tasse(s) de café, vous aurez besoin de :
            - ${eauNecessaire} ml d'eau
            - ${laitNecessaire} ml de lait
            - ${cafeNecessaire} g de grains de café
        `;
    }
    
    document.querySelector('#start').addEventListener('click', calculer);
   
    

}

document.querySelector('#start').addEventListener('click', start)

