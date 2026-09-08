# Wildenhorst Badhoevedorp v0.29

Belangrijk in v0.29:
- Iedere ingelogde vaste speler of reserve die daadwerkelijk in de gepubliceerde baanindeling van die zaterdag staat, kan een nog ontbrekende baanuitslag invoeren.
- Een speler die zelf op Baan 2 staat kan dus ook de uitslag van Baan 1 invoeren, zolang hij die zaterdag meespeelt.
- Zodra een baanuitslag is opgeslagen, kunnen spelers die niet meer wijzigen of verwijderen. Alleen een beheerder kan corrigeren.
- Home toont automatisch de nieuwste zaterdag met opgeslagen uitslagen, per baan met spelers, score en punten.
- Zaterdag heeft twee keuzes: **Zaterdag** voor één speeldag en **Uitslagen** voor het volledige archief van alle gespeelde zaterdagen.
- Per speeldag zie je hoeveel uitslagen zijn ingevuld, bijvoorbeeld **2 van 2 uitslagen ingevoerd**.
- De stand wordt bij openen live uit de opgeslagen uitslagen opgebouwd, zodat een spelersuitslag direct meetelt.
- Gepubliceerde baanindelingen bevatten voortaan `participantIds` voor veilige Firestore-controle. Bestaande v0.28-indelingen hebben een fallback voor vaste spelers via de spelerskeuze.

## Publiceren
Upload alle bestanden uit deze ZIP naar de hoofdmap van de GitHub Pages-repository.

## Firebase
v0.29 bevat aangepaste Firestore-regels. Publiceer `firestore.rules` opnieuw voordat spelers uitslagen van een andere baan gaan invoeren.
