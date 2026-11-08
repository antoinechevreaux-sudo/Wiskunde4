# Wiskunde 4 · matemáticas de 4º de primaria (Flandes)

App para aprender el programa de matemáticas del *4de leerjaar* de Flandes, con explicaciones en español y las palabras clave en neerlandés.

- **Fase 1 – Getalbegrip** (disponible): *positietabel*, *splitsen*, *getallenas*, *vergelijken*, *afronden*, *breuken*, *gelijkwaardige breuken*, *kommagetallen*.
- **Fases 2–4** (previstas): *Bewerkingen*, *Metend rekenen*, *Meetkunde*.

Incluye un indicador global del programa (32 lecciones, de «pendiente» a «dominada»), repaso espaciado (*herhaling*), una *woordenlijst* con pronunciación en neerlandés de Bélgica y un tutor Claude que guía con preguntas.

## Descargar la APK

Ve a **Releases** y descarga `Wiskunde4.apk` desde el móvil. Cada cambio en `main` compila una versión nueva. Al actualizar se conserva el progreso.

## Tutor

En **Ajustes**, pega tu clave de API de Anthropic. Se guarda solo en el teléfono, nunca en este repositorio.

## Cómo está hecha

- `web/index.html`: la app completa (HTML + CSS + JavaScript, sin dependencias).
- `tools/preparar_web.py`: copia la web y la fuente Outfit a los assets de Android.
- `app/`: app Android (Kotlin) con un WebView, el botón «atrás» y la voz en neerlandés (TextToSpeech `nl-BE`).
- `.github/workflows/build.yml`: compila y publica la APK con GitHub Actions.

La fuente Outfit se distribuye bajo la licencia SIL Open Font License (`web/Outfit-OFL.txt`).
