# Wildenhorst Badhoevedorp v1.19

## Nieuw in v1.19
- Reparatie voor **Mijn koppel** dat bij gewone spelers op **Laden…** kon blijven staan.
- De pagina probeert niet meer spelerrecords uit `/players` te lezen waarvoor gewone spelers volgens de bestaande Firestore-regels geen leesrecht hebben.
- Als laden toch mislukt, blijft het scherm niet meer eindeloos op Laden… staan: er verschijnt een duidelijke foutmelding met **Opnieuw proberen**.
- De brede privé-opmerking uit v1.18 blijft behouden.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Voor v1.19 zijn geen nieuwe Firestore-regels nodig; `firestore.rules` is ongewijzigd opgenomen in de ZIP.
