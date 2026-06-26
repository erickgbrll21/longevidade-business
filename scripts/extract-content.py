"""Extract site content from static HTML into JSON for React app."""
import re, json, pathlib
from html.parser import HTMLParser

root = pathlib.Path(__file__).resolve().parent.parent
out = root / "web" / "src" / "data" / "site-content.json"

def strip_tags(html):
    html = re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.I)
    html = re.sub(r"<style[\s\S]*?</style>", "", html, flags=re.I)
    html = re.sub(r"<!--[\s\S]*?-->", "", html)
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", html)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

def read_html(name):
    return (root / name).read_text(encoding="utf-8")

def extract_between(html, start_pat, end_pat):
    m = re.search(start_pat + r"([\s\S]*?)" + end_pat, html, re.I)
    return m.group(1) if m else ""

def extract_frentes(html):
    block = extract_between(html, r'<div class="frentes-grid">', r"</div>\s*</div>\s*</section>")
    items = []
    for m in re.finditer(
        r'<a href="([^"]+)" class="frente">([\s\S]*?)</a>', block
    ):
        href, inner = m.groups()
        h3 = re.search(r"<h3>([\s\S]*?)</h3>", inner)
        p = re.search(r"<p>([\s\S]*?)</p>", inner)
        chips = re.findall(r'<span class="chip">([^<]+)</span>', inner)
        items.append({
            "slug": href.replace(".html", ""),
            "title": strip_tags(h3.group(1)) if h3 else "",
            "description": strip_tags(p.group(1)) if p else "",
            "chips": chips,
        })
    return items

def extract_stats(html, cls="hero-stats"):
    stats = []
    for m in re.finditer(
        r'<div class="hstat"><div class="num">([\s\S]*?)</div><div class="lbl">([^<]+)</div></div>',
        html,
    ):
        stats.append({"value": strip_tags(m.group(1)), "label": m.group(1) and m.group(2).strip() or ""})
    if not stats:
        for m in re.finditer(
            r'<div class="sis"><div class="n">([^<]+)</div><div class="l">([^<]+)</div></div>',
            html,
        ):
            stats.append({"value": m.group(1), "label": m.group(2)})
    return stats

def extract_pgroups(html):
    m = re.search(r'<section class="pgroups"[\s\S]*?</section>', html)
    if not m:
        return []
    block = m.group(0)
    groups = []
    chunks = re.split(r'<div class="pgroup(?: alt)?(?: reveal[^"]*)?">', block)[1:]
    for chunk in chunks:
        alt = chunk.lstrip().startswith('<div class="wrap">') or 'pgroup alt' in chunk[:80]
        h3 = re.search(r"<h3>([\s\S]*?)</h3>", chunk)
        gp = re.search(r"</h3>\s*<p>([\s\S]*?)</p>", chunk)
        cards = []
        for cm in re.finditer(r'<div class="pcard">([\s\S]*?)</div>\s*(?=<div class="pcard|</div>\s*</div>\s*</div>)', chunk):
            ch = re.search(r"<h4>([\s\S]*?)</h4>", cm.group(1))
            items = re.findall(r"<li>([\s\S]*?)</li>", cm.group(1))
            cards.append({
                "title": strip_tags(ch.group(1)) if ch else "",
                "items": [strip_tags(x) for x in items],
            })
        if h3 or cards:
            groups.append({
                "title": strip_tags(h3.group(1)) if h3 else "",
                "subtitle": strip_tags(gp.group(1)) if gp else "",
                "alt": alt,
                "cards": cards,
            })
    return groups

def extract_solution(path):
    html = read_html(path)
    slug = path.replace(".html", "")
    title_m = re.search(r"<h1>([\s\S]*?)</h1>", html)
    hero_p = re.search(r"sub-hero[\s\S]*?<h1>[\s\S]*?</h1>\s*<p>([\s\S]*?)</p>", html)
    intro_h2 = re.search(r'sub-intro[\s\S]*?<h2>([\s\S]*?)</h2>', html)
    intro_p = re.search(r'sub-intro[\s\S]*?<h2>[\s\S]*?</h2>\s*<p>([\s\S]*?)</p>', html)
    stats = []
    for m in re.finditer(r'<div class="sis"><div class="n">([^<]+)</div><div class="l">([^<]+)</div></div>', html):
        stats.append({"value": m.group(1), "label": m.group(2)})
    groups = extract_pgroups(html)
    strip_h = re.search(r'model-strip[\s\S]*?<h3>([\s\S]*?)</h3>', html)
    cta_h = re.search(r'sub-cta[\s\S]*?<h2>([\s\S]*?)</h2>', html)
    cta_p = re.search(r'sub-cta[\s\S]*?<h2>[\s\S]*?</h2>\s*<p>([\s\S]*?)</p>', html)
    eyebrow = re.search(r'sub-hero[\s\S]*?<span class="eyebrow[^"]*">([^<]+)</span>', html)
    return {
        "slug": slug,
        "eyebrow": eyebrow.group(1).strip() if eyebrow else "",
        "titleHtml": title_m.group(1).strip() if title_m else "",
        "heroDescription": strip_tags(hero_p.group(1)) if hero_p else "",
        "introTitle": strip_tags(intro_h2.group(1)) if intro_h2 else "",
        "introDescription": strip_tags(intro_p.group(1)) if intro_p else "",
        "stats": stats,
        "groups": groups,
        "modelStrip": strip_tags(strip_h.group(1)) if strip_h else "",
        "ctaTitle": strip_tags(cta_h.group(1)) if cta_h else "",
        "ctaDescription": strip_tags(cta_p.group(1)) if cta_p else "",
    }

idx = read_html("index.html")
hero_h1 = re.search(r'hero-copy[\s\S]*?<h1[^>]*>([\s\S]*?)</h1>', idx)
hero_p = re.search(r'hero-copy[\s\S]*?<p class="lead[^"]*">([\s\S]*?)</p>', idx)

data = {
    "home": {
        "hero": {
            "eyebrow": "Hub estratégico de soluções corporativas",
            "titleHtml": hero_h1.group(1).strip() if hero_h1 else "",
            "description": strip_tags(hero_p.group(1)) if hero_p else "",
        },
        "stats": extract_stats(idx),
        "frentes": extract_frentes(idx),
    },
    "solutions": [
        extract_solution(f) for f in [
            "beneficios.html", "rh.html", "ti.html",
            "financas.html", "educacao.html", "esg.html",
        ]
    ],
}

out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("wrote", out, "solutions:", len(data["solutions"]), "frentes:", len(data["home"]["frentes"]))
