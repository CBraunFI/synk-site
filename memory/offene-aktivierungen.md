---
name: offene-aktivierungen
description: Zwei manuelle Schritte, damit Kontaktformular und Podcast-Embed live funktionieren
metadata:
  type: project
---

Nach der P0+P1-Umsetzungsrunde (Persona-Feedback, 15 Personas) sind zwei Dinge bewusst als Platzhalter angelegt und müssen noch aktiviert werden:

1. **Web3Forms-Key:** In `kontakt/index.html` und `en/kontakt/index.html` steht im Formular `value="WEB3FORMS_ACCESS_KEY_HIER_EINTRAGEN"`. Bis ein echter Key (kostenlos via web3forms.com an office@synk-group.com) eingetragen ist, fällt das Formular automatisch auf den alten **mailto-Versand** zurück (so bleibt es funktionsfähig). Mit Key: AJAX-Versand → Redirect auf `danke.html` / `en/kontakt/danke.html`.

2. **Podcast-Embed-URL:** `wissen/podcast.html` + EN betten die Podigee-Folge „Arbeiten mit KI" via `https://everydaycounts.podigee.io/124-arbeiten-mit-ki/embed?context=external` ein. Das Podigee-`/embed`-Format vor Go-Live im Browser prüfen; falls abweichend, src korrigieren (Fallback-Link daneben funktioniert ohnehin).

**Why:** Statische GitHub-Pages-Site ohne Backend — echtes Formular nur über Drittdienst möglich; Embed-URL nicht 100 % verifizierbar ohne Live-Test.

**How to apply:** Beide Punkte vor dem nächsten Go-Live/Review abhaken. Restliche offene Punkte sind P2/P3 (Projekte-Filter, Programm-Vergleicher, FAQ, Calendly, Suche, echte Fotos).
