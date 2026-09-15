# Wildenhorst Badhoevedorp v1.16

Webapp voor de zaterdagmorgen dubbelcompetitie.

## Nieuw in v1.16

- Herstel van **📝 Mijn opmerking – alleen voor mij** bij de eigen speler op iedere speelzaterdag.
- De app bepaalt de eigen speler nu niet alleen via de opgeslagen playerId/naam, maar controleert als extra zekerheid het e-mailadres van de twee spelers van het koppel tegen het ingelogde e-mailadres.
- Bestaande privé-opmerkingen blijven in dezelfde `privateNotes/{uid}` documenten staan en worden opnieuw geladen.
- Privé-opmerkingen blijven alleen voor de betreffende gebruiker leesbaar en verschijnen niet in WhatsApp, baanindeling, uitslagen of overzichten.
- De wijzigingen uit v1.14 blijven behouden, waaronder de aanklikbare detailvakken op Home en bij Beheer → Indeling.

## Publiceren

Upload alle 18 bestanden naar GitHub Pages. Voor v1.16 zijn geen nieuwe Firestore-regels nodig ten opzichte van v1.15.
