# Wildenhorst Badhoevedorp v1.7

v1.7 maakt de spelerskeuze flexibeler: een speler kan nu **Afwezig** opslaan terwijl de partner voor die zaterdag nog niets heeft ingevuld. De speeldag blijft voor het koppel als “nog niet volledig ingevuld” gelden totdat de partner ook een keuze heeft gemaakt. Als beide spelers afwezig zijn, blijft de bestaande vervanger-flow actief.

De Firestore-regels zijn hierop aangepast, zodat deze gedeeltelijke keuze ook veilig kan worden opgeslagen. De privé-opmerking uit v1.5 en de e-mailfix uit v1.6 blijven behouden. Cache- en bestandsversies zijn verhoogd naar v1.7.

## Publiceren

Upload alle 18 bestanden naar GitHub Pages. **Belangrijk:** publiceer ook de meegeleverde `firestore.rules` in Firebase, omdat v1.7 een nieuwe toegestane spelerskeuze toevoegt.
