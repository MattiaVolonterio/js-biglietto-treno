# js-biglietto-treno

## TRACCIA

```plaintext
@qui
Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno

1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
2. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    a applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65
3. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
```

## SVOLGIMENTO

1. Chiedo all'utente quanti chilometri deve percorrere

   - verifico che i dati inseriti rispettino i parametri
   - salvo il valore
   - calcolo il prezzo del biglietto in base ai km da percorrere

2. Chiedo all'utente la sua età

   - verifico che i dati inseriti rispettino i parametri
   - salvo il valore

3. - SE tutti i dati inseriti sono corretti:

     - SE l'utente è minorenne ha uno sconto del 20%
       - Calcolo lo sconto in base al prezzo del biglietto e alla scontistica
       - Applico lo sconto e salvo il nuovo valore
       - Stampo il nuovo prezzo scontato
     - SE INVECE l'utente è over 65 anni ha uno sconto del 40%
       - Calcolo lo sconto in base al prezzo del biglietto e alla scontistica
       - Applico lo sconto e salvo il nuovo valore
       - Stampo il nuovo prezzo scontato
     - ALTRIMENTI
       - Stampo il prezzo del biglietto

   - ALTRIMENTI comunico all'utente che c'è un'errore
