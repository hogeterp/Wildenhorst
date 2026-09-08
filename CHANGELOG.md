## v0.26
- Gamepunten staan nu compact direct achter alleen de laatste set; bij een extra set verhuist het veld automatisch mee.
- De grote aparte kaart “Punten in lopende game” is verwijderd.
- Het veld Opmerking is uit de uitslaginvoer verwijderd.
- Beheer → Uitslagen bevat nu een 🧪 Testdag die niets in Firestore of in de stand opslaat.
- Bestaande uitslagen blijven bewerkbaar en handmatige puntencorrectie blijft beschikbaar voor beheerders.
- Versie/cache bijgewerkt naar v0.26.

## v0.25
- Lopende gamepunten toegevoegd aan uitslagberekening, los van de reden waarom een wedstrijd stopte.
- Gelijke games en gelijke gamepunten geven ieder 0,25 punt; voorsprong in de lopende game geeft de leider 0,5 punt.
- Opgeslagen uitslagen kunnen door beheerders worden bewerkt; handmatige puntencorrectie is mogelijk.

## v0.24
- Hotfix: leeg scherm in v0.23 opgelost door foutieve functiedeclaratie te herstellen.
- Extra controle toegevoegd zodat appfouten zichtbaar kunnen worden gemaakt in plaats van een leeg scherm.

# Changelog

## v0.24
- Toekomstige spelerskeuzes compacter: koppelnummer en speler in één vaste kolom zodat meer zaterdagen tegelijk zichtbaar zijn.
- Speler bewerken opent nu direct in een dialoog; compacte bewerkknoppen.
- NAW-export samengevoegd onder één knop Exporteren met keuze PDF/Excel.
- Gepubliceerde baanindeling voor de eerstvolgende zaterdag staat nu ook op Home.
- Nieuw-seizoenwizard laat in stap 1 zaterdagen uitsluiten vóór definitief aanmaken.
- Beheer-indeling toont speelsterkte alleen als cijfer en nettere Team A / VS / Team B-weergave.
- Uitslag invoeren volgt automatisch de gepubliceerde baanindeling en toont de werkelijk gespeelde spelers.
- Meer dan drie sets mogelijk via Set toevoegen.
- Punten worden automatisch aan de vertegenwoordigde vaste koppels gekoppeld en de stand wordt na opslaan/verwijderen opnieuw opgebouwd.


## v0.22
- Nieuwe veilige seizoenwizard toegevoegd.
- Vooraf waarschuwing: pas bij de laatste bevestiging wordt het huidige seizoen gearchiveerd.
- Stap 1: nieuwe speeldata, tijden, banen en sluitingsmoment instellen.
- Stap 2: per deelnemer kiezen: vaste speler, reserve of niet meenemen; nieuwe deelnemer toevoegen.
- Stap 3: nieuwe koppels samenstellen; ieder koppel moet exact twee vaste spelers hebben.
- Stap 4: samenvatting en laatste bevestiging.
- Huidig seizoen blijft volledig bewaard als archief; er wordt niets verwijderd.
- Nieuw seizoen start zonder oude uitslagen/punten/spelerskeuzes.
- Vorige seizoenen zichtbaar onder Beheer → Seizoen.
- Toekomstige spelerskeuzes: koppel- en spelerskolom blijven vast staan tijdens horizontaal schuiven.
- Baanindeling: speelsterkte alleen als cijfer achter de naam, alleen in beheer.
- Handmatige spelersselectie/testen naar onderaan de indelingspagina verplaatst.
- Start nieuw seizoen naar onderaan Beheer → Seizoen verplaatst.
- Firestore-regels uitgebreid zodat alleen de hoofdbeheerder bij de seizoenwissel `participantType` en `coupleId` van gebruikers kan bijwerken.

## v0.21
- Baanindeling wijzigen verduidelijkt.
- Spelers wisselen door twee namen na elkaar aan te tikken.
- Spelvorm Dubbel / Enkel / Niet gebruiken apart instelbaar.
- Speelsterkte zichtbaar voor beheerder bij indelen.
- Toekomstige spelerskeuzes per koppel gegroepeerd.

## v0.20
- Seizoensoverzicht gespeeld/ingevallen toegevoegd.
- Toekomstige spelerskeuzes toegevoegd.
- Compacte baanindeling.
- NAW- en betalingsexport naar PDF/Excel.

## v0.19
- Mijn koppel toont aantal keren ingevallen per speler.
