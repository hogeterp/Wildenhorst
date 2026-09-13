# Wildenhorst Badhoevedorp v1.6

v1.6 lost een fout op bij het wijzigen van een e-mailadres in Beheer → Spelers & koppels. De hoofdbeheerder synchroniseert de toegang nu gericht op het oude en nieuwe e-mailadres, zonder de beveiligde `accessEmails`-collectie als lijst te hoeven uitlezen. Daardoor kan de wijziging worden opgeslagen terwijl de bestaande privacyregel `allow list: if false` behouden blijft. Ook is de service-worker/cache expliciet naar v1.6 verhoogd.

v1.5 bouwt voort op v1.4. De privé-opmerking herkent nu ook bestaande spelersaccounts waarbij playerId nog niet aan het accountprofiel is gekoppeld. De eerdere v1.4-wijzigingen blijven behouden: de melding voor openstaande accountaanvragen op Home opent nu direct Beheer → Beheerders met de aanvragen, en iedere speler kan per zaterdag een technisch afgeschermde privé-opmerking bij de eigen spelerskeuze bewaren. Die opmerking is uitsluitend leesbaar en wijzigbaar door het eigen ingelogde account.

Belangrijk in de definitieve release:
- Spelregels verduidelijkt voor de zoemer: bij gelijke gamestand (minimaal 3 games) wordt nog één beslissend punt gespeeld, bijvoorbeeld bij 3–3 0–0 en 3–3 30–30.
- Invallerregel volgens Carels uitleg verduidelijkt: alleen een volledig afwezig koppel dat door een invaller wordt vertegenwoordigd is gemaximeerd op 2 competitiepunten.
- Is minimaal één vaste speler van een koppel aanwezig, dan kan dat koppel de volledige punten behalen.
- De tegenstanders worden door een invaller niet beperkt.
- Op de finalezaterdag tellen de punten dubbel, maar het volledig afwezige koppel met invaller blijft maximaal 2 punten houden.
- Voorbeeld in de spelersregels toegevoegd: normaal 3/2/1/1 en op de finale 6/2/2/2.
- Beheerdersuitleg en finalezaterdagmelding zijn hierop aangepast.
- De bestaande puntentoekenning is gecontroleerd: de 2-puntenlimiet wordt gekoppeld aan het koppel dat volledig afwezig is en door de invaller wordt vertegenwoordigd.
- De noodafhandeling voor een exact gelijke stand blijft technisch beschikbaar, maar wordt niet in de normale spelregels toegelicht.

Upload de 18 bestanden naar GitHub Pages.


Aanmelden: na Account activeren moet de beheerder de accountaanvraag eerst goedkeuren voordat de speler kan inloggen.