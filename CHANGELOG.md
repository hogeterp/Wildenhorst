## v0.34

- Home toont voor beheerders een compact overzicht van het aantal definitieve spelers en de status van invallers.
- Beheer → Indeling toont direct hoeveel spelers definitief zijn, hoeveel koppels nog moeten invullen en welke invallers ontbreken, wachten of geregeld zijn.
- Automatische indeling wordt niet meer stil automatisch uitgevoerd bij het openen van de pagina.
- Bij precies 3 spelers geeft Automatische indeling een duidelijke melding; alleen bij voldoende enkelspeltoestemming wordt een enkel voorgesteld en blijft de derde speler zichtbaar als niet ingedeeld.
- Geen nieuwe Firestore-regels nodig ten opzichte van v0.33.

## v0.33
- Vaste middenkolom voor het streepje in baanindelingen.
- Enkelspelvoorkeur zichtbaar in spelersbeheer.
- WhatsApp-hub en Banen wijzigen lager geplaatst in Beheer → Indeling.
- Webapplink automatisch onder alle WhatsApp-berichten.
- Vaste spelers kunnen door een afwezig koppel als vervanger worden voorgesteld, met beheerdergoedkeuring.
- Firestore Rules uitgebreid voor vervangerstype `fixed`.

## v0.32
- Compacte namen toegevoegd aan Stand en Toekomstige spelerskeuzes.
- Seizoenmatrix op mobiel verticaal compacter gemaakt.
- Baanregels op Home rond één centrale dash-kolom uitgelijnd.
- WhatsApp-acties in Beheer → Indeling samengebracht.
- WhatsApp-baanindeling gebruikt compacte unieke namen.
- ‘Seizoen Seizoen’ in koppeloverzicht hersteld.

# v0.31
- Compacte unieke namen op Home, Zaterdag en seizoensoverzicht (Eric R., Eric v.d.G., Marcel K., Marcel S.).
- Mijn koppel WhatsApp-overzicht: hele seizoen voor beide spelers, inclusief gespeeld/ingevallen en totalen.
- Beheer WhatsApp-export: volledige naam, e-mail en telefoon; geen speelsterkte.
- Excel-export: inclusief speelsterkte.
- PDF-export bij Spelers & koppels verwijderd.

- Compacte unieke namen op Home, Zaterdag en seizoensoverzicht (o.a. Eric R., Eric v.d.G., Marcel K., Marcel S.).
- Mijn koppel WhatsApp-overzicht bevat het hele seizoen voor beide koppelspelers plus totalen gespeeld/ingevallen.
- Beheer WhatsApp-export bevat volledige namen, e-mail en telefoon; geen speelsterkte.
- Excel-export bevat alle gegevens inclusief speelsterkte.
- PDF-export bij Spelers & koppels verwijderd.

- Mijn koppel compacter gemaakt met alleen voornamen in speeldagkaarten.
- Veilige wijzigingsmodus toegevoegd: keuzes zijn standaard vergrendeld.
- Keuze invullen / wijzigen activeert pas de keuzeknoppen; daarna volgt bewust Keuze opslaan.
- Na opslaan is de spelerskeuze direct gepubliceerd.
- WhatsApp-spelersoverzicht toegevoegd aan Mijn koppel; geen uitslagen, wel wie daadwerkelijk heeft gespeeld.
- WhatsApp-export toegevoegd bij Beheer → Spelers & koppels, zonder speelsterktes.
- Geen Firestore-regelwijziging nodig ten opzichte van v0.29.

# v0.29
- Iedere vaste speler die die zaterdag daadwerkelijk meespeelt kan een nog ontbrekende uitslag van Baan 1 of Baan 2 invoeren.
- Na opslaan is de uitslag voor spelers vergrendeld; alleen beheerders kunnen wijzigen of verwijderen.
- Home toont automatisch de nieuwste zaterdag met opgeslagen uitslagen, per baan met spelers, score en punten.
- Zaterdag heeft nu een apart tabblad Uitslagen met het volledige uitslagenarchief, nieuwste eerst.
- Per speeldag staat hoeveel baanuitslagen zijn ingevoerd.
- Stand wordt live uit opgeslagen uitslagen opgebouwd, zodat spelersinvoer direct zichtbaar is.
- Gepubliceerde indelingen bewaren participantIds voor veilige spelersrechten in Firestore.

## v0.28
- Spelers die op een gepubliceerde baan staan krijgen bij Zaterdag een knop **Uitslag invoeren**.
- Na opslaan wordt de uitslag voor spelers vergrendeld; alleen een beheerder kan hem daarna wijzigen of verwijderen.
- Wedstrijdweergaven gebruiken overal een **–** in plaats van VS/TEGEN.
- Firestore-regels aangescherpt: spelers mogen een uitslag alleen aanmaken, niet later bijwerken.
- Versie/cache bijgewerkt naar v0.28.

## v0.27
- Gamepunten staan nu compact direct achter alleen de laatste set; bij een extra set verhuist het veld automatisch mee.
- De grote aparte kaart “Punten in lopende game” is verwijderd.
- Het veld Opmerking is uit de uitslaginvoer verwijderd.
- Beheer → Uitslagen bevat nu een 🧪 Testdag die niets in Firestore of in de stand opslaat.
- Bestaande uitslagen blijven bewerkbaar en handmatige puntencorrectie blijft beschikbaar voor beheerders.
- Versie/cache bijgewerkt naar v0.27.

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
