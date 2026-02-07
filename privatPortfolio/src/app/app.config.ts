// Import grundlegender Angular-Konfigurationstypen und Provider
import {
  ApplicationConfig,                   // Typ für die zentrale App-Konfiguration
  provideBrowserGlobalErrorListeners,   // Aktiviert globale Fehlerbehandlung im Browser
  provideZonelessChangeDetection        // Aktiviert Change Detection ohne Zone.js (Performance-Optimierung)
} from '@angular/core';

// Router-Funktionalität importieren
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Enthält die definierten Routen der Anwendung

// HTTP-Client bereitstellen, um API- oder Datei-Anfragen auszuführen
import { provideHttpClient } from '@angular/common/http';

// ngx-translate für Mehrsprachigkeit importieren
import {
  provideTranslateService, // Registriert den Übersetzungsdienst in der App
  TranslateService          // Dienst zum Arbeiten mit Übersetzungen (z. B. Sprache wechseln)
} from '@ngx-translate/core';

// Packete die wir installiert und in dieser Datei importieren.
// Zur Übersicht können wir alle Packete bei node_modules 
// sehen, die wir installiert haben.
// Loader zum Laden von Übersetzungsdateien über HTTP
// Die Übersetzungen werden typischerweise aus JSON-Dateien geladen.
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

// Zentrale Konfiguration der Angular-Anwendung
export const appConfig: ApplicationConfig = {
  providers: [
    // Aktiviert globale Fehlerüberwachung im Browser
    provideBrowserGlobalErrorListeners(),

    // Aktiviert zonenlose Change Detection für bessere Performance
    provideZonelessChangeDetection(),

    // Registriert das Routing-System mit den definierten Routen
    provideRouter(routes),

    // Registriert den HTTP-Client für Netzwerk-Anfragen
    provideHttpClient(),

    // Konfiguriert den Übersetzungsdienst
    provideTranslateService({
      lang: 'en',          // Standardsprache der Anwendung
      fallbackLang: 'en',  // Sprache bei fehlenden Übersetzungen

      // Konfiguration des HTTP-Loaders für Übersetzungsdateien
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',  // Ordner der Sprachdateien
        suffix: '.json'    // Dateiendung der Übersetzungen
      })
    })
  ]
};