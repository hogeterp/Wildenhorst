# Wildenhorst Badhoevedorp v1.15

## Nieuw in v1.15
- Het privéveld **📝 Mijn opmerking – alleen voor mij** is hersteld bij de eigen speler op iedere speelzaterdag onder **Mijn koppel**.
- De herkenning van de ingelogde speler is robuuster gemaakt: eerst via speler-ID en, als die koppeling niet overeenkomt, veilig via de eigen naam binnen het gekoppelde koppel.
- Eerder opgeslagen privé-opmerkingen worden weer uit dezelfde `privateNotes/{uid}`-documenten geladen.
- Privé-opmerkingen blijven automatisch opslaan, maximaal 300 tekens, en blijven uitsluitend leesbaar voor het eigen account.
- Privé-opmerkingen komen niet in WhatsApp, baanindeling, uitslagen, standen of beheer-overzichten.
- Alle verbeteringen uit v1.14 blijven behouden, waaronder de aanklikbare overzichtsvakken op Home en Beheer → Indeling.
- De functie **Meerdere zaterdagen invullen** blijft verwijderd.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Voor v1.15 zijn **geen nieuwe Firestore-regels nodig** ten opzichte van v1.14; `firestore.rules` is ongewijzigd opgenomen in de ZIP.
