# Changelog

## v0.3
- Mooier eerder gekozen Wildenhorst-appicoon voor telefoon/PWA.
- Beheer → Seizoen: alle zaterdagen 3-10-2026 t/m 27-03-2027 aan/uit zetten en opslaan; 26-12 en 02-01 standaard uit.
- Beheer → Spelers: privé bulkimport via lokaal JSON-bestand; geen persoonsgegevens in GitHub-code.
- 16 vaste spelers, 8 koppels en 5 reserves kunnen in één import naar Firestore.
- De hoofdbeheerder wordt bij import automatisch aan het juiste koppel gekoppeld.
- Beheertabs op mobiel in twee rijen zodat Uitslagen zichtbaar blijft.
- Firestore-regels uitgebreid voor veilige hoofdbeheerder-import en seizoenbeheer.

# Wijzigingen

## v0.2
- Versienummer verhoogd van v0.1 naar v0.2.
- Uploadpakket plat gemaakt: `assets`-map verwijderd; logo en PWA-iconen staan in de hoofdmap.
- Verwijzingen in `index.html`, `manifest.webmanifest` en `sw.js` aangepast aan de platte structuur.
- `functions`-map uit het GitHub-uploadpakket verwijderd; backend wordt later apart naar Firebase gedeployed.
- Firebase-project `wildenhorst-94729` en webconfig blijven gekoppeld.
- Authentication Email/Password en Firestore `eur3 (Europe)` als ingestelde basis gedocumenteerd.
- Serviceworker-cache verhoogd naar `wildenhorst-v0.2`.

## v0.1
- Firebase-project `wildenhorst-94729` gekoppeld.
- Firebase Authentication Email/Password voorbereid voor echte accounts.
- Firestore-locatie `eur3 (Europe)` vastgelegd in projectconfiguratie/documentatie.
- Firebase Web SDK bijgewerkt naar 12.18.0.
- Eerste Wildenhorst-projectstructuur.
- Mobile-first PWA.
- Persoonlijke Firebase Authentication voorbereid.
- Firestore Security Rules voorbereid.
- Server-side beheerfuncties voorbereid.
- Vrijdag 18:00 als planningsdeadline verwerkt.
- Standaard 2 banen verwerkt.
- Koppelstand, invallercap en singles=0 als architectuurregels vastgelegd.
- Publieke GitHub-map bevat bewust geen spelers/contactgegevens.
