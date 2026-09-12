# Changelog

## v1.2
- Op Home ziet de hoofdbeheerder nu duidelijk hoeveel accountaanvragen op goedkeuring wachten.
- De melding is aanklikbaar en opent direct Beheer → Beheerders.
- De teller wordt rechtstreeks uit de openstaande accountaanvragen geladen.

## v1.1
- Accountaanvragen kunnen door de hoofdbeheerder worden goedgekeurd of geweigerd.
- Home toont een melding wanneer accounts op goedkeuring wachten.
- Account activeren controleert vooraf of het e-mailadres bij een actieve vaste speler of reserve bekend is.
- Onbekend e-mailadres krijgt de melding dat het e-mailadres niet bekend is bij de beheerder.
- Toegestane e-mailadressen worden privacyvriendelijk als SHA-256-hash gecontroleerd; e-mailadressen worden niet openbaar gemaakt.
- Firestore-regels uitgebreid voor gerichte e-mailcontrole en weigeren van accountaanvragen.
- Bij Account activeren staat duidelijk dat de aanvraag eerst door de beheerder moet worden goedgekeurd.
- Beheer → Spelers toont per vaste speler en reserve de accountstatus: geactiveerd, wacht op goedkeuring, geweigerd of nog niet geactiveerd.

## v1.0
- Eerste definitieve release. Functioneel gelijk aan v0.41; alleen versienummer/cache-referenties bijgewerkt.

## v0.40
- Reset testgegevens gerepareerd: geen invoerveld met WISSEN meer, maar twee duidelijke bevestigingen.
- Na het wissen controleert de app Firestore en meldt hij als er toch testdocumenten zijn blijven staan.
- Spelers, koppels, reserves, accounts, speeldata, speelsterktes, voorkeuren, seizoeninstellingen en spelregels blijven behouden.

## v0.39
- Hoofdbeheerder kan het huidige seizoen na de testfase veilig schoon terugzetten naar nul.
- Dubbele bevestiging: waarschuwing én exact `WISSEN` typen.
- Wist spelerskeuzes en vervangers, gepubliceerde baanindelingen, uitslagen, stand, gespeelde/invalbeurten, speelhistorie en betalingen.
- Behoudt spelers, koppels, reserves, accounts/beheerders, speeldata, speelsterktes, enkelspelvoorkeuren, seizoeninstellingen en spelregels.
- Geen nieuwe Firestore Rules nodig.

## v0.38
- Optionele finalezaterdag per seizoen; laatste actieve speeldag is de finale.
- Automatische finale-indeling: 1+4 tegen 2+3 en 5+8 tegen 6+7 op basis van de stand na de voorlaatste speeldag.
- Competitiepunten op de finale tellen dubbel; invallers blijven maximaal 2 punten krijgen; enkelspel blijft 0 punten.
- Finaleregels toegevoegd aan Uitleg / spelregels en het beheerderhandboek.

## v0.37
- Speelhistorie zichtbaar voor beheerders: per speler hoe vaak met en tegen anderen gespeeld.
- “Waarom deze indeling?” legt per baan uit hoeveel herhalingen de automatische indeling bevat.
- Automatische indeling gebruikt dezelfde spelerhistorie transparant in de score.
- Automatische indeling houdt rekening met eerdere gepubliceerde baanindelingen in hetzelfde seizoen.
- Herhaling van dezelfde teamgenoten wordt extra zwaar vermeden; ook herhaalde tegenstanders worden beperkt.
- Speelsterkte blijft meewegen voor evenwichtige partijen.
- Bij 6 spelers wordt de combinatie dubbel/enkel eveneens zo eerlijk mogelijk gekozen.
- Beheerder kan de voorgestelde indeling nog steeds handmatig aanpassen of opnieuw laten indelen.
- Geen nieuwe Firestore Rules nodig.

## v0.35
- Stand verduidelijkt: punten uit sets zijn leidend.
- Games alleen klein als aanvullende tiebreak-informatie; bij 0 games niet getoond.

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
