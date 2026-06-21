---
name: offene-aktivierungen
description: Zwei manuelle Schritte, damit Kontaktformular und Podcast-Embed live funktionieren
metadata:
  type: project
---

Nach der P0+P1-Umsetzungsrunde (Persona-Feedback, 15 Personas) sind zwei Dinge bewusst als Platzhalter angelegt und müssen noch aktiviert werden:

1. **Web3Forms-Key:** Platzhalter `value="WEB3FORMS_ACCESS_KEY_HIER_EINTRAGEN"` steht an **vier** Stellen: Kontaktformular (`kontakt/index.html`, `en/kontakt/index.html`) **und** Newsletter (`index.html`, `en/index.html`). Einmal den echten Key (kostenlos via web3forms.com an office@synk-group.com) an allen vier Stellen eintragen → aktiviert Kontaktformular **und** Newsletter. Bis dahin fallen beide automatisch auf **mailto** zurück (bleiben funktionsfähig). Kontakt mit Key: AJAX → Redirect auf `danke.html`.

2. **Podcast-Embed-URL:** `wissen/podcast.html` + EN betten die Podigee-Folge „Arbeiten mit KI" via `https://everydaycounts.podigee.io/124-arbeiten-mit-ki/embed?context=external` ein. Das Podigee-`/embed`-Format vor Go-Live im Browser prüfen; falls abweichend, src korrigieren (Fallback-Link daneben funktioniert ohnehin).

**Why:** Statische GitHub-Pages-Site ohne Backend — echtes Formular nur über Drittdienst möglich; Embed-URL nicht 100 % verifizierbar ohne Live-Test.

**How to apply:** Beide Punkte vor dem nächsten Go-Live/Review abhaken. P2 ist umgesetzt (Projekte-Filter, Programm-Vergleichstabelle, FAQ-Akkordeons, Leada-Navigator mit Auto-Scroll/Toast). Aus P3 umgesetzt: clientseitige Suche (in `site.js`), Newsletter (Web3Forms), Mobile-CSS-Härtung. **Echt offen / asset-/account-abhängig:** Calendly-Terminbuchung (braucht Konto), Whitepaper-Lead-Magnet (braucht PDF), echte/diverse Fotos, sowie eine reale Geräte-QA (iOS Safari / Android Chrome) vor Go-Live.
