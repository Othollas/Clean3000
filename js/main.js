// commençons par recuperer les données du client
import Client from "./client"


let selectEntreprise ;

// donnée de l'entreprise

let entreprise = document.querySelector("#entrepriseName").value; 

// donnée du jour

let date = document.querySelectorAll("#currentDate");

// donnée du commentaire

let comment = document.querySelectorAll("#commentClient");

// recuperer le champ où le texte sera inscrit

// let recap = document.querySelector("#recap")

let clients = new Array()

if (localStorage.getItem("clients")) {
    let clientsString = localStorage.getItem("clients");
    let clientsArray = JSON.parse(clientsString);
    clients = clientsArray.map(object => {
        return new Client(object.entreprise, object.date, object.comment);
    });
}

const entrepriseName = {
    "ta": "Toxic Avenger",
    "lc": "les crados",
    "jpm": "j-m paslaver",
    "d3": "Degueu3000",
    "jp": "Jay pludidé"
}

let recap = document.querySelector(".booking-form");
recap.addEventListener("submit", (e) => {
    // Annuler le comportement par défaut (à savoir la soumission du formulaire)
    e.preventDefault();});