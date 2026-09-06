# Wildenhorst Badhoevedorp v0.15

Mobiele webapp/PWA voor de zaterdagmorgen dubbelcompetitie.

Belangrijk in v0.15:
- een koppel kan bij twee afwezige spelers zelf een reservespeler of andere vervanger doorgeven;
- de vervanger krijgt eerst de status “Wacht op goedkeuring beheerder”;
- de beheerder kan voorgestelde vervangers goedkeuren of afwijzen;
- pas na goedkeuring telt een vervanger mee voor de baanindeling;
- Home en Mijn koppel tonen de vervanger en goedkeuringsstatus;
- de uitleg over speelsterkte is verwijderd van de gewone pagina Spelers & reserves;
- Beheer → Indeling toont voortaan een duidelijke foutmelding als Firebase-data niet geladen kan worden, in plaats van eindeloos “Laden…”;
- alle functies en verbeteringen uit v0.14 blijven behouden.

## Publiceren
Upload alle bestanden uit deze ZIP naar de hoofdmap van de GitHub Pages-repository.

## Firebase
Voor v0.15 moeten de meegeleverde Firestore-regels worden gepubliceerd. Daarmee mag een koppel veilig alleen een vervanger voor het eigen koppel voorstellen; goedkeuren blijft alleen voor beheerders.
