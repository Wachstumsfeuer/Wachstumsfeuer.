# Wachstumsfeuer

Eine statische Next.js-V1 für kuratierte Buchempfehlungen rund um persönliches und finanzielles Wachstum.

## Lokal starten

```bash
npm install
npm run dev
```

Danach ist die Seite unter `http://localhost:3000` erreichbar. Ein Produktionscheck läuft mit `npm run build`.

## Ein neues Buch hinzufügen

Öffne `data/books.ts` und ergänze ein Objekt in `books`. Wichtig sind ein eindeutiger `slug`, Titel, Autor, Kategorie, Kurzbeschreibung, Empfehlung, drei Erkenntnisse, Zielgruppe und eine Akzentfarbe. Die Buchkarte, Detailseite, Sitemap und Navigation werden daraus automatisch erzeugt.

Die Kategorien werden darüber ebenfalls zentral in `categories` gepflegt.

## Vor dem Livegang

1. Domain in `app/layout.tsx`, `app/sitemap.ts` und `app/robots.ts` auf die echte Domain ändern.
2. Platzhalter auf Impressum- und Datenschutzseite ersetzen und rechtlich prüfen lassen.
3. Den Anker `#affiliate-link` auf den jeweiligen Affiliate-Link umstellen und die Kennzeichnung ergänzen.
