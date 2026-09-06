# Wildenhorst Badhoevedorp v0.18

Mobiele webapp/PWA voor de zaterdagmorgen dubbelcompetitie.

Belangrijk in v0.18:
- Beheer → Indeling bouwt het scherm robuuster op nadat de Firebase-data geladen is;
- de app toont ook een fout als juist de opbouwfase mislukt;
- koppeldata wordt defensief verwerkt zodat afwijkende gegevens niet meteen de hele indeling blokkeren;
- handmatige spelersselectie blijft beschikbaar om bijvoorbeeld 8 spelers te kiezen voor een testindeling;
- alle functies uit v0.15 en v0.16 blijven behouden.

## Publiceren
Upload alle bestanden uit deze ZIP naar de hoofdmap van de GitHub Pages-repository.

## Firebase
Voor v0.18 zijn geen nieuwe Firestore-regels nodig. De gepubliceerde regels van v0.15 blijven gelden.
