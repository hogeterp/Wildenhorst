# Changelog

## v0.17
- Beheer → Indeling: aparte foutopvang toegevoegd voor de opbouwfase nádat alle Firebase-data is geladen.
- Afwijkende koppeldata wordt robuuster genormaliseerd.
- Ontbrekende knoppen/DOM-elementen stoppen de hele render niet meer.
- Handmatige testselectie van spelers blijft beschikbaar.
- Geen nieuwe Firestore-regels nodig ten opzichte van v0.15.

## v0.16
- Spelerskeuzes, vaste spelers, reserves, koppels en gepubliceerde indeling worden afzonderlijk gecontroleerd.
- Elk onderdeel krijgt zichtbaar ✓ geladen of een duidelijke fout/timeout.
- Na 8 seconden zonder Firebase-antwoord volgt een concrete melding en knop Opnieuw proberen.
- Handmatige spelersselectie toegevoegd om de baanindeling te testen zonder echte spelerskeuzes te wijzigen.
- Geen wijziging van Firestore-regels ten opzichte van v0.15.

## v0.15
- Koppels kunnen bij twee afwezige spelers zelf een reserve of andere vervanger doorgeven.
- Vervanger wacht op goedkeuring van een beheerder.
- Beheerder kan voorgestelde vervanger goedkeuren of afwijzen.
- Alleen goedgekeurde vervangers tellen mee in de baanindeling.
- Home en Mijn koppel tonen vervanger en goedkeuringsstatus.
- Tekst over speelsterkte verwijderd bij Spelers & reserves.
- Beheer → Indeling heeft foutafhandeling zodat “Laden…” niet eindeloos blijft staan.

# Changelog

## v0.16
- Beheer → Indeling blijft niet meer onbeperkt op Laden staan.
- Spelerskeuzes, vaste spelers, reserves, koppels en gepubliceerde indeling worden afzonderlijk gecontroleerd.
- Elk onderdeel krijgt zichtbaar ✓ geladen of een duidelijke fout/timeout.
- Na 8 seconden zonder Firebase-antwoord volgt een concrete melding en knop Opnieuw proberen.
- Handmatige spelersselectie staat standaard open, zodat een beheerder bijvoorbeeld 8 spelers kan kiezen om de indeling te testen zonder de echte spelerskeuzes te wijzigen.
- Geen wijziging van Firestore-regels ten opzichte van v0.15.


## v0.14
- Alle WhatsApp-knoppen tonen eerst een bewerkbaar voorbeeld met Open WhatsApp / Annuleren.
- Bij Mijn koppel staat standaard “Keuze opgeslagen”; na een wijziging wordt dit “Wijziging opslaan”.
- De technische datum (zoals 2026-10-03) is verwijderd uit Beheer → Seizoen.
- Koppels worden netter als losse kaartjes met koppelnummer en spelers op aparte regels weergegeven.
- Meer → Spelers & reserves toegevoegd voor alle spelers, zonder speelsterkte of contactgegevens.
- De uitleg over enkelspel is verwijderd uit Mijn gegevens; de spelregel blijft bij Uitleg / spelregels.
- Bij Uitleg / spelregels toegevoegd: inspeeltijd 10.00–10.15 uur en aanvang wedstrijd 10.15 uur.
- Publieke spelerslijst bevat alleen koppelnummers en namen; privégegevens blijven afgeschermd.

## v0.13
- WhatsApp-reparatie uit v0.12 meegenomen.
- Het onduidelijke label “Open/Gesloten” bij een speeldag vervangen door “Spelerskeuze open” en “Spelerskeuze gesloten”.
- Bij een open spelerskeuze wordt de sluitingsdag en -tijd direct getoond.
- Na de deadline staat duidelijk dat alleen een beheerder Speelt, Reserve of Afwezig nog kan wijzigen.
- Ook beheerders zien na de deadline dat de spelerskeuze gesloten is, terwijl hun beheerdersknoppen beschikbaar blijven.

## v0.12
- WhatsApp-knoppen hersteld: de ontbrekende `waOpen()`-functie is toegevoegd.
- Vervanger gezocht, planning-herinnering, baanindeling en betaalherinnering openen weer een WhatsApp-conceptbericht.

## v0.11
- Speelsterkte 1–9 toegevoegd voor vaste spelers en reserves; alleen zichtbaar in beheer.
- Automatische baanindeling op basis van speelsterkte toegevoegd; speelsterktes worden niet gepubliceerd.
- Home-statistieken zijn klikbaar: spelers gepland, koppels ingevuld en koppels die nog moeten invullen.
- WhatsApp-herinnering toegevoegd voor koppels die de planning nog niet hebben ingevuld.
- Koppelnummers worden ook in Beheer → Spelers → Koppels getoond.
- Vervanger gezocht via WhatsApp blijft zichtbaar zodra beide spelers afwezig zijn.
- Beheerder kan vaste speler, reserve of een externe vervanger met naam + speelsterkte vastleggen.
- Bij een vaste invaller wordt bij het eigen koppel geregistreerd voor welk koppel diegene invalt.
- Speelzaterdag aan/uit wordt na bevestiging direct opgeslagen.
- Knop hernoemd naar “Algemene instellingen opslaan” voor sluitingsinstellingen en standaard banen.
- Vaste koppels kunnen na een gespeelde, gepubliceerde dubbelwedstrijd zelf hun uitslag invoeren.
- Afgebroken laatste set ondersteunt ook gelijke games met puntenstand, zoals 3–3 en 30–15.
- Gepubliceerde baanindeling bewaart ook technische speler-/koppelkoppelingen voor veilige uitslaginvoer; deze IDs zijn niet zichtbaar in de spelersweergave.

## v0.10
- Koppelnummers, vervangers, WhatsApp vervanger gezocht en uitgebreide zoemer-/halve-puntinvoer.
