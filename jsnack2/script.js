/* in un array son contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all' utente il suo nome e cocunicagli se può partecipare o no alla festa*/

const Invitati =["Raffaele", "Giovanni", "Nicola", "Alberto"]

const userName = prompt("Inerici il tuo nome")
let IsUserInList = false;
for( let i = 0; i <Invitati.length; i++ ){
    if( Invitati[i] === userName){
        IsUserInList = true;
    }
    }
   
    if(IsUserInList){
        alert("Sei Ivitato alla festa")
    }else{
        alert("Non sei in lista")
    }
