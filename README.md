# Wildenhorst Badhoevedorp v1.20

## Nieuw in v1.20
- **Mijn koppel** kan niet meer onbeperkt op **Laden…** blijven staan: noodzakelijke Firebase-reads hebben nu een timeout.
- Een probleem bij één speelzaterdag blokkeert niet langer de hele pagina.
- Privé-opmerkingen worden pas na het hoofdscherm geladen. Een fout daarbij blokkeert **Mijn koppel** niet.
- Historische invalstatistieken worden apart geladen en blokkeren het hoofdscherm niet.
- Bij een probleem met de basisgegevens verschijnt een duidelijke melding met **Opnieuw proberen**.
- De privacy van privé-opmerkingen en de bestaande Firestore-regels zijn ongewijzigd.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Voor v1.20 zijn geen nieuwe Firestore-regels nodig; `firestore.rules` is ongewijzigd opgenomen in de ZIP.
