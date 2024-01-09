let error = false;

// Prendo un'elemento dove stampare il prezzo del biglietto
const ticketCost = document.getElementById("ticket-cost");
console.log(ticketCost);

// Chiedo all'utente quanti chilometri deve percorrere
const pathLength = parseFloat(
  prompt("Inserire la distanza da percorrere: ").trim()
);
console.log("La lunghezza del percorso è: " + pathLength);

if (isNaN(pathLength)) {
  error = true;
}

// Calcolo il prezzo base del biglietto senza sconti
const priceKm = 0.21;
const ticketPrice = pathLength * priceKm;
const roundedPrice = Math.round(ticketPrice * 100) / 100;
console.log(ticketPrice, roundedPrice);

// Chiedo all'utente la sua età
const userAge = parseInt(prompt("Inserire l'età: ").trim());
console.log("L'età dell'utente è: " + userAge);

if (isNaN(userAge)) {
  error = true;
}

// Condizione di calcolo

if (!error) {
  if (userAge < 18) {
    // Calcolo lo sconto
    const discount = (ticketPrice * 20) / 100;
    console.log("Lo sconto è: " + discount);
    //   Applico lo sconto
    const discountedPrice = ticketPrice - discount;
    const discountedPriceRounded = Math.round(
      (discountedPrice * 100) / 100
    ).toFixed(2);
    console.log(discountedPrice, discountedPriceRounded);
    //   Stampo il prezzo scontato
    ticketCost.innerText = `Il prezzo del biglietto è: ${discountedPriceRounded}€`;
  } else if (userAge > 65) {
    // Calcolo lo sconto
    const discount = (ticketPrice * 40) / 100;
    console.log("Lo sconto è: " + discount);
    //   Applico lo sconto
    const discountedPrice = parseFloat((ticketPrice - discount).toFixed(2));
    console.log(discountedPrice);
    //   Stampo il prezzo scontato
    ticketCost.innerText = `Il prezzo del biglietto è: ${discountedPrice}€`;
  } else {
    ticketCost.innerText = `Il prezzo del biglietto è: ${roundedPrice}€`;
  }
} else {
  alert("I dati inseriti non sono validi");
}
