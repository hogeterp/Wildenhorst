# Wildenhorst Badhoevedorp v1.32

## Nieuw in v1.32
- De oorspronkelijke invoerder van een uitslag kan die vanaf de eerste invoer nog **48 uur** corrigeren. Daarna kan alleen een beheerder de uitslag wijzigen of verwijderen.
- De eerste invoer van een nog ontbrekende uitslag blijft voor actieve vaste spelers en reservespelers toegestaan.
- Onder **Home → Koppels ingevuld** staat welke vaste spelers zich als **Reserve** hebben opgegeven en nog niet ergens invallen. Is niemand beschikbaar, dan staat: **Geen vaste spelers meer beschikbaar als reserve. Benader een reserve buiten de vaste groep.**
- Bij **Beheer → Indeling** worden spelers in de baanindeling met voornamen getoond. Alleen bij dubbele voornamen wordt een onderscheidende initiaal/afkorting gebruikt.
- Als dezelfde persoon twee keer in de spelers-/baanindeling voorkomt, geeft de app duidelijk aan dat de indeling niet goed is. Publiceren wordt dan geblokkeerd totdat dit is opgelost. Dezelfde controle wordt ook bij **Koppels ingevuld** getoond.
- Wanneer een beheerder zelf een vervanger vastlegt via **Beheer → Indeling**, volgt eerst een extra bevestiging. Pas na die bevestiging wordt de vervanger direct goedgekeurd opgeslagen.
- Alle functies en verbeteringen uit v1.31 blijven behouden.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. Publiceer daarna ook de nieuwe `firestore.rules` in Firebase, omdat de 48-uursregel daar ook wordt afgedwongen.
