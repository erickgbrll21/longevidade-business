import re, base64, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
idx = (root / "index.html").read_text(encoding="utf-8")
out_dir = root / "web" / "public" / "assets"
out_dir.mkdir(parents=True, exist_ok=True)

patterns = [
    ("favicon.png", r'rel="icon"[^>]*href="(data:image/[^"]+)"'),
    ("logo-light.png", r'class="nav-logo light" src="(data:image/[^"]+)"'),
    ("logo-dark.png", r'class="nav-logo dark" src="(data:image/[^"]+)"'),
    ("footer-logo.png", r'class="footer-logo" src="(data:image/[^"]+)"'),
]

for name, pattern in patterns:
    m = re.search(pattern, idx)
    if not m:
        print("missing", name)
        continue
    data = m.group(1)
    _, b64 = data.split(",", 1)
    (out_dir / name).write_bytes(base64.b64decode(b64))
    print("wrote", name, (out_dir / name).stat().st_size)
