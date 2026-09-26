# Wildenhorst Badhoevedorp v1.22

## Nieuw in v1.22
- **Mijn koppel** behoudt nu de informatie dat een vaste speler voor een ander koppel invalt wanneer de eigen spelerskeuze later wordt gewijzigd.
- Bestaande invallers worden in **Mijn koppel** ook rechtstreeks uit de goedgekeurde invallergegevens herkend. Daardoor wordt bijvoorbeeld Rinze op 10 oktober weer als invaller getoond, ook als de oude bronmarkering eerder is verdwenen.
- Bij het vastleggen van een vaste speler als invaller wordt diens eigen status waar dat zonder een ongeldige koppelkeuze kan automatisch **Reserve**.
- Beide spelers van een gekoppeld koppel kunnen de keuze voor beide spelers blijven invullen; dit hangt niet af van activatie van het account van de partner.
- Firestore-regels zijn gericht aangepast zodat spelers hun eigen koppelkeuze kunnen wijzigen zonder door de beheerder vastgelegde invallerinformatie te overschrijven.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. **Voor v1.22 moeten ook de nieuwe `firestore.rules` worden gepubliceerd in Firebase.**
