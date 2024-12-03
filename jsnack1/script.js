// L utente inserisce due numeri in successione , con due prompt.
// Il software stampa il maggiore

let numb1 = Number(prompt("Inserisci un numero"))
let numb2 = Number(prompt("Inserisci un numero"))
if( numb1 > numb2){
    const numbBig = numb1;
    alert(`I primo numero è maggiore${numbBig}`)
    
} else if( numb2 > numb1){
    const numbBig = numb2
    alert(`I secondo numero è maggiore${numbBig}`)
} else{
    alert(`I  numeri sono uguali`)

}

