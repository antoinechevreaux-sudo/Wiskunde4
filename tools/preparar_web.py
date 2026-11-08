"""Copia la app web y su fuente a los assets de Android."""
import pathlib, shutil

raiz = pathlib.Path(__file__).resolve().parent.parent
web, assets = raiz / "web", raiz / "app/src/main/assets"
assets.mkdir(parents=True, exist_ok=True)
for nombre in ("index.html", "Outfit.ttf"):
    shutil.copy(web / nombre, assets / nombre)
print("Assets listos:", sorted(p.name for p in assets.iterdir()))
