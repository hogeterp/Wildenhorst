# Wildenhorst Badhoevedorp v0.22

Mobiele webapp/PWA voor de zaterdagmorgen dubbelcompetitie.

Belangrijk in v0.22:
- Nieuwe seizoenwizard met waarschuwing vóórdat er iets verandert.
- Nieuw seizoen in 4 stappen: speeldata, vaste spelers/reserves, koppels en definitieve controle.
- Het vorige seizoen wordt alleen op niet-actief gezet en blijft volledig bewaard met spelerskeuzes, baanindelingen, uitslagen, standen en betalingen.
- Nieuwe vaste spelers/reserves kunnen per persoon worden gekozen; nieuwe deelnemers kunnen worden toegevoegd.
- Nieuwe koppels worden vóór aanmaken gecontroleerd: ieder koppel moet precies twee vaste spelers hebben.
- Vorige seizoenen zijn zichtbaar als bewaard archief bij Beheer → Seizoen.
- Toekomstige spelerskeuzes houden Koppel en Speler vast aan de linkerkant bij horizontaal schuiven.
- Baanindeling toont speelsterkte alleen als klein cijfer bij de speler, uitsluitend in Beheer.
- Handmatige testselectie van spelers staat onderaan de indelingspagina.
- Start nieuw seizoen staat onderaan Beheer → Seizoen.
- Versie/cache bijgewerkt naar v0.22.

## Publiceren
Upload alle bestanden uit deze ZIP naar de hoofdmap van de GitHub Pages-repository.

## Firebase
Voor v0.22 zijn aangepaste Firestore-regels nodig. De hoofdbeheerder mag bij het definitief aanmaken van een nieuw seizoen de koppeling van geactiveerde gebruikers aan `participantType` en `coupleId` bijwerken. Publiceer daarom ook de meegeleverde `firestore.rules`.
