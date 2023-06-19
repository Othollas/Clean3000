// commençons par recuperer les données du client



let selectEntreprise ;

// donnée de l'entreprise

let entreprise = document.querySelector("#entrepriseName"); 

// donnée du jour

let date = document.querySelectorAll("#currentDate");

// donnée du commentaire

let comment = document.querySelectorAll("#commentClient");

// recuperer le champ où le texte sera inscrit

let recap = document.querySelector(".recap")


let button = document.querySelector(".recap")

button.addEventListener("click", (e) => {
    e.preventDefault();
    
    entreprise = document.querySelector("#entrepriseName").value ;
    date = document.querySelector("#currentDate").value ;
    comment = document.querySelector("#commentClient").value ;
    return entreprise, date, comment;
});



let recapitulatif = document.querySelector("#recapitulatif");

function getRecap() {
    recapitulatif.innerText = ` la societé ${entreprise} à été mandaté le ${date} `
};

button.onchange = getRecap;