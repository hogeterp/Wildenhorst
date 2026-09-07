# Wildenhorst Badhoevedorp v0.24

Mobiele webapp/PWA voor de zaterdagmorgen dubbelcompetitie.

Belangrijk in v0.24:
- Nieuwe seizoenwizard met waarschuwing vóórdat er iets verandert.
- Nieuw seizoen in 4 stappen: speeldata, vaste spelers/reserves, koppels en definitieve controle.
- Het vorige seizoen wordt alleen op niet-actief gezet en blijft volledig bewaard met spelerskeuzes, baanindelingen, uitslagen, standen en betalingen.
- Nieuwe vaste spelers/reserves kunnen per persoon worden gekozen; nieuwe deelnemers kunnen worden toegevoegd.
- Nieuwe koppels worden vóór aanmaken gecontroleerd: ieder koppel moet precies twee vaste spelers hebben.
- Vorige seizoenen zijn zichtbaar als bewaard archief bij Beheer → Seizoen.
- Toekomstige spelerskeuzes gebruiken één compacte vaste kolom met koppelnummer + speler, zodat meer zaterdagen tegelijk zichtbaar zijn.
- Baanindeling toont speelsterkte alleen als klein cijfer bij de speler, uitsluitend in Beheer.
- Handmatige testselectie van spelers staat onderaan de indelingspagina.
- Speler bewerken opent direct in een dialoog met compacte bewerkknoppen.
- NAW-export zit onder één knop met keuze PDF of Excel.
- De eerstvolgende gepubliceerde baanindeling verschijnt ook op Home.
- In de nieuw-seizoenwizard kunnen zaterdagen vooraf worden uitgesloten.
- Uitslag invoeren volgt de gepubliceerde baanindeling, ondersteunt extra sets en kent punten automatisch toe aan de vertegenwoordigde koppels.
- Start nieuw seizoen staat onderaan Beheer → Seizoen.
- Versie/cache bijgewerkt naar v0.24.

## Publiceren
Upload alle bestanden uit deze ZIP naar de hoofdmap van de GitHub Pages-repository.

## Firebase
v0.24 gebruikt dezelfde Firestore-regels als v0.22. Als de v0.22-regels al zijn gepubliceerd, hoef je de regels voor v0.24 niet opnieuw te publiceren.
