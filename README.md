# Wildenhorst Badhoevedorp – zaterdagmorgen dubbelcompetitie

Versie **v0.3** voor GitHub Pages + Firebase.

## Status
- GitHub repository `hogeterp/Wildenhorst`: aangemaakt.
- Firebase-project `wildenhorst-94729`: aangemaakt en gekoppeld.
- Firebase Authentication Email/Password: ingeschakeld.
- Cloud Firestore: aangemaakt in `eur3 (Europe)` in production mode.
- `firebase-config.js` staat op `configured: true`.
- Er staan **geen spelersnamen, adressen, telefoonnummers of e-mailadressen** in deze publieke GitHub-map.

## Afspraken verwerkt
- Seizoen 2026/2027; zaterdag 10:00–12:00.
- Standaard 2 banen; beheerder kan per zaterdag afwijken.
- Planning per koppel sluit vrijdag 18:00; daarna alleen beheerder.
- Vervanger alleen nodig als beide koppelleden niet kunnen.
- Prioriteit: niet-spelende vaste speler → reserve → andere vervanger.
- WhatsApp opent alleen een concept; gebruiker verstuurt zelf.
- Stand en punten zijn per koppel.
- Met vervanger maximaal 2 punten voor het koppel die zaterdag.
- Enkelspel mag, maar levert 0 competitiepunten op.
- Vaste deelnemers mogen uitslagen invoeren; na opslaan alleen beheerder corrigeren.
- Betalingen en speelsterkte zijn alleen voor beheerders.
- Alle 16 vaste spelers hebben in 2026/27 een gelijk aandeel.
- Speler kan eigen enkelspelvoorkeur wijzigen; NAW/contact alleen beheerder.
- E-mailadres is tevens Firebase Auth-inlognaam; beheerwijziging moet Auth + Firestore synchroon wijzigen.

## Volgende stappen
1. Upload de losse bestanden uit deze ZIP rechtstreeks naar de root van `hogeterp/Wildenhorst`.
2. Zet GitHub Pages aan.
3. Maak daarna de eerste beheerder en seizoendata via een beveiligd beheer/seedproces.
4. Cloud Functions worden later als aparte Firebase-backend gedeployed en staan daarom niet in deze eenvoudige GitHub-upload-ZIP.
5. Publiceer/test de definitieve Firestore-regels pas samen met de benodigde backendfuncties.

## Beveiliging
De structuur volgt het sterke deel van Supertiebreak v2.3.6/v2.3.7: permanente Firestore Security Rules, server-side beheeracties en Firebase Authentication. Wildenhorst wordt sterker doordat iedere speler een eigen account krijgt.

Mutaties zoals koppelplanning, e-mailwijziging, accountstatus, beheerrechten en later uitslagberekening lopen server-side. De browser mag dus niet zelfstandig competitiepunten of beheerdersrechten schrijven.

## Bewust nog niet definitief
- Firebase-config is nu gekoppeld;
- spelers/contactgegevens en Auth-accounts;
- definitieve callable voor bijzondere onafgemaakte-set/buzzergevallen;
- pushmeldingen;
- het eerder gekozen definitieve Wildenhorst-appicoon kan later de tijdelijke iconen vervangen.


## GitHub-upload v0.3
Deze ZIP is bewust **plat gemaakt** zoals bij Supertiebreak: er zijn geen `assets`- of `functions`-mappen. Alle webbestanden en iconen staan direct in de hoofdmap. De Cloud Functions-backend wordt later apart naar Firebase gedeployed en hoort niet bij de eenvoudige GitHub Pages-upload.


## v0.3 gebruiken
1. Upload alle bestanden uit deze ZIP naar de root van GitHub (bestanden vervangen).
2. Publiceer daarna de inhoud van `firestore.rules` in Firebase Console → Firestore → Rules.
3. Open de app opnieuw.
4. Onder Beheer → Seizoen kun je alle zaterdagen aan/uit zetten en opslaan.
5. Onder Beheer → Spelers kies je lokaal het aparte privé JSON-bestand en importeer je spelers, koppels en reserves in één keer.

**Privacy:** het privé begingegevensbestand hoort NIET in GitHub en zit daarom niet in deze openbare GitHub-ZIP. De bulkimport maakt ook geen Firebase Authentication-accounts voor de andere spelers; die stap volgt apart zodat iedere speler een eigen wachtwoord kan kiezen.
