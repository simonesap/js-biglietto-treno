/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  1) prompt per chiedere i chilometri da percorrere in (numero) esempio: 10
    1.5) convertire la stringa in numero formula number() o parseInt()
  2) prompt per chiedere l'età del passeggero in (numero)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
  3) Calcolare i km richiesti per 0.21
va applicato uno sconto del 20% per i minorenni
  4) condizione if per sapere se è minorenne e applicare nel caso true 20% di sconto
va applicato uno sconto del 40% per gli over 65.
  5) condizione if per sapere se è over 65 e applicare nel caso true 40% di sconto
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  6) i risultati dovranno avere max 2 decimali (formula da cercare)
*/

function ticket() {
    
    var lunghezzaViaggio = Number(prompt("Ciao, per favore determina la lunghezza del tuo viaggio"));
    console.log(lunghezzaViaggio);
    console.log(typeof(lunghezzaViaggio));
    document.getElementById('lunghezzaViaggio').innerHTML = `Percorrerai ${lunghezzaViaggio} km`;

    var etaUtente = Number(prompt("Per favore, inserisci la tua età"));
    console.log(etaUtente);
    console.log(typeof(etaUtente));
    document.getElementById('etaUtente').innerHTML = `L'età del passeggero è: ${etaUtente}`;

    let tariffaEuroAlKm = 0.21;

    var prezzoFinitoAlKm = lunghezzaViaggio * tariffaEuroAlKm;
    console.log(prezzoFinitoAlKm);
    // document.getElementById('prezzoFinitoAlKm').innerHTML = `Il tuo ticket costerà: ${prezzoFinitoAlKm.toFixed(2)} euro`;


    if (etaUtente < 18) {
        
        var discount_20 = (prezzoFinitoAlKm / 100) * 20;
        var finalPrice = prezzoFinitoAlKm - discount_20;
        console.log(finalPrice);
        document.getElementById('sconto_20').innerHTML =`Extra sconto minorenni del 20% applicato: ${finalPrice.toFixed(2)} euro`;
        
    } else if (etaUtente > 65) {
        
        var discount_40 = (prezzoFinitoAlKm / 100) * 40;
        var finalPrice = prezzoFinitoAlKm - discount_40;
        console.log(finalPrice)
        document.getElementById('sconto_40').innerHTML = `Extra sconto over 65 del 40% applicato: ${finalPrice.toFixed(2)} euro`;

    } else {

      document.getElementById('prezzo_normale').innerHTML = `Il tuo ticket costerà: ${prezzo_normale.toFixed(2)} euro`;

    }
    
}

