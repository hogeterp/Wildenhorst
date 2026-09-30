# Wildenhorst Badhoevedorp v1.29

## Nieuw in v1.29
- De knop voor het zichtbaar maken van de baanindeling publiceert niet meer direct. Eerst verschijnt het WhatsApp-voorbeeld; pas bij **Open WhatsApp** wordt de baanindeling voor iedereen gepubliceerd. Annuleren laat de publicatiestatus ongewijzigd.
- WhatsApp voegt alleen een achternaaminitiaal toe als er werkelijk meerdere verschillende spelers met dezelfde voornaam zijn. Daardoor blijft **Rinze** gewoon Rinze; dubbele voornamen zoals **Marcel S.** en **Marcel K.** blijven onderscheidbaar.
- De v1.28-correctie blijft behouden: na **Publicatie ongedaan maken** blijft de baanindeling verborgen voor spelers totdat bewust opnieuw via Open WhatsApp wordt gepubliceerd.
- Firestore-regels inhoudelijk ongewijzigd.

## Publiceren
Upload alle 18 bestanden naar GitHub Pages. De `firestore.rules` zijn inhoudelijk ongewijzigd en hoeven niet opnieuw in Firebase te worden gepubliceerd als de huidige regels al actief zijn.
