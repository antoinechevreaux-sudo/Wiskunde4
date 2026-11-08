# Wiskunde 4 · matemáticas de 4º de primaria (Flandes)

App para aprender el programa de matemáticas del *4de leerjaar* de Flandes, con explicaciones en español y las palabras clave en neerlandés.

El programa completo según los *minimumdoelen* de wiskunde (einde 4de leerjaar), en 53 lecciones y 6 bloques: *Getalbegrip*, *Bewerkingen*, *Meten en metend rekenen*, *Meetkunde*, *Statistiek en kansrekenen* y *Vraagstukken*.

- Acceso libre a cualquier lección; cada una con lección guiada y práctica sin fin con 3 niveles de dificultad que se adaptan.
- Una *toets* (evaluación) al final de cada bloque, con corrección y lecciones para repasar.
- Botón «atrás» en todos los ejercicios.
- Indicador global del programa (lecciones + toetsen), repaso espaciado (*herhaling*), laboratorio interactivo de decimales.
- *Woordenlijst* con buscador y pronunciación en neerlandés de Bélgica, y un tutor Claude que guía con preguntas.

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
