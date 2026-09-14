# Wildenhorst Badhoevedorp v1.14

## Nieuw in v1.14
- De drie overzichtsvakken op **Home** zijn daadwerkelijk aanklikbaar: **spelers die spelen**, **koppels ingevuld** en **nog invullen** tonen direct de bijbehorende namen/koppels.
- De vier overzichtsvakken bij **Beheer → Indeling** zijn daadwerkelijk aanklikbaar: **spelers definitief**, **koppels nog invullen**, **invaller nodig** en **wacht op goedkeuring** tonen detailinformatie.
- Ook bij een teller van **0** wordt een duidelijke detailmelding getoond.
- Na het openen van details scrollt het scherm naar de informatie en blijft het gekozen vak zichtbaar gemarkeerd.
- De fout uit v1.13 is hersteld waarbij de Home-handlers konden worden gekoppeld voordat de knoppen daadwerkelijk in de pagina stonden.
- Alle cache- en assetverwijzingen zijn consequent verhoogd naar **v1.14**, zodat browsers niet per ongeluk v1.12/v1.13-bestanden blijven gebruiken.
- De functie **Meerdere zaterdagen invullen** blijft uit de code verwijderd.
- Speeldagen worden pas definitief aangepast via **Algemene instellingen opslaan**; bij het uitschakelen van actieve speeldagen volgt eerst een bevestiging.
- **Toekomstige spelerskeuzes** blijft voor alle ingelogde spelers zichtbaar via **Meer** en is voor gewone spelers alleen-lezen.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Voor v1.14 zijn **geen nieuwe Firestore-regels nodig** ten opzichte van v1.11; `firestore.rules` is ongewijzigd opgenomen in de ZIP.
