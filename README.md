# Wildenhorst Badhoevedorp v1.31

## Nieuw in v1.31
- Beheer → Uitslagen laadt een al opgeslagen uitslag direct terug zodra de speeldag en baan worden gekozen.
- De speler die een uitslag heeft ingevoerd kan die uitslag later zelf corrigeren; andere spelers kunnen die opgeslagen uitslag niet wijzigen. Beheerders kunnen alle uitslagen blijven wijzigen of verwijderen.
- De stand gebruikt bij gelijke competitiepunten nu het **gamesaldo** (gewonnen games min verloren games) in plaats van alleen het aantal gewonnen games.
- De stand toont **Gamesaldo** met bijvoorbeeld `+12`, `+2` of `-4`.
- Firestore-regels zijn aangepast zodat alleen de oorspronkelijke invoerder zijn eigen uitslag kan wijzigen.
- Alle overige functies uit v1.30 blijven behouden.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Publiceer daarna ook de nieuwe `firestore.rules` in Firebase.
