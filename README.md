# Wildenhorst Badhoevedorp v0.32

Belangrijk in v0.32:
- Mijn koppel is compacter: volledige namen staan alleen bovenaan; per speeldag worden alleen voornamen gebruikt.
- Speelt / Reserve / Afwezig zijn standaard vergrendeld om onbedoelde wijzigingen te voorkomen.
- Tik eerst op Keuze invullen of Keuze wijzigen. Pas daarna worden de keuzes actief.
- Opslaan gebeurt pas bewust met de knop Keuze opslaan; daarna is de keuze direct gepubliceerd in de app.
- Mijn koppel heeft een compact WhatsApp-overzicht met voornamen, toekomstige keuzes en bij voorbije speeldagen wie daadwerkelijk in de gepubliceerde baanindeling heeft gespeeld. Uitslagen worden niet meegestuurd.
- Beheer → Spelers & koppels → Exporteren heeft nu ook WhatsApp, met een compacte lijst van koppelnummers, voornamen en reserves. Speelsterkte wordt niet meegestuurd.

Geen nieuwe Firestore-regels nodig ten opzichte van v0.29. De v0.29-regels blijven geldig.


## v0.32
- Stand gebruikt compacte, unieke namen (o.a. Eric R., Eric v.d.G., Marcel S., Marcel K.).
- Toekomstige spelerskeuzes gebruikt dezelfde compacte namen en extra lage rijen zodat meer van de 16 spelers tegelijk op mobiel zichtbaar zijn.
- Home-baanindeling centreert de scheidingsstreepjes van alle banen op exact dezelfde kolom.
- Beheer → Indeling heeft één centraal WhatsApp-blok met uitnodiging, herinnering en baanindeling delen.
- WhatsApp-baanindeling gebruikt compacte namen.
- Dubbele tekst ‘Seizoen Seizoen …’ in het koppel-WhatsApp-overzicht is opgelost.
