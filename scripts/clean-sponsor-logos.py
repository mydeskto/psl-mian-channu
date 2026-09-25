from pathlib import Path
from PIL import Image
import math

out = Path(r'D:\psl\psl-mian-channu\public\sponsors')

# Pepsi: remove black bg + white outer ring
pepsi = Image.open(out / 'pepsi.png').convert('RGBA')
w, h = pepsi.size
px = pepsi.load()
cx, cy = w / 2, h / 2
R_outer = min(w, h) * 0.42
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        dist = math.hypot(x - cx, y - cy)
        if r < 35 and g < 35 and b < 35:
            px[x, y] = (0, 0, 0, 0)
        elif dist > R_outer:
            px[x, y] = (0, 0, 0, 0)
pepsi.save(out / 'pepsi.png')
print('pepsi cleaned')

# Jazz: drop black + red circle, keep yellow wordmark
jazz = Image.open(out / 'jazz.png').convert('RGBA')
w, h = jazz.size
px = jazz.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 40 and g < 40 and b < 40:
            px[x, y] = (0, 0, 0, 0)
            continue
        is_yellow = r > 180 and g > 140 and b < 120
        is_red_bg = r > 120 and g < 100 and b < 100
        if is_red_bg and not is_yellow:
            px[x, y] = (0, 0, 0, 0)
jazz.save(out / 'jazz.png')
print('jazz cleaned')

# ARY: inset crop to drop gold frame
ary = Image.open(out / 'ary.png').convert('RGBA')
w, h = ary.size
inset = int(min(w, h) * 0.12)
ary.crop((inset, inset, w - inset, h - inset)).save(out / 'ary.png')
print('ary cropped')

svgs = {
    'hbl.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 90" role="img" aria-label="HBL">
  <text x="140" y="68" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#00A7A0">HBL</text>
</svg>
''',
    'kfc.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 90" role="img" aria-label="KFC">
  <text x="120" y="68" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#E4002B">KFC</text>
</svg>
''',
    'daraz.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 90" role="img" aria-label="Daraz">
  <text x="140" y="68" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="52" font-weight="900" fill="#F57224">daraz</text>
</svg>
''',
    'jazz.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 90" role="img" aria-label="Jazz">
  <text x="140" y="68" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#EE3124">jazz</text>
</svg>
''',
    'ary.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 90" role="img" aria-label="ARY">
  <text x="120" y="68" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#C8102E">ARY</text>
</svg>
''',
    'pepsi.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Pepsi">
  <defs><clipPath id="c"><circle cx="100" cy="100" r="90"/></clipPath></defs>
  <g clip-path="url(#c)">
    <rect width="200" height="200" fill="#004B93"/>
    <path d="M-10 50 C50 10 150 10 210 50 L210 100 C140 50 60 50 -10 100 Z" fill="#E32934"/>
    <path d="M-10 90 C60 140 140 140 210 90 L210 210 L-10 210 Z" fill="#fff"/>
    <text x="100" y="108" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#004B93" transform="rotate(-8 100 100)">PEPSI</text>
  </g>
</svg>
''',
}

for name, content in svgs.items():
    (out / name).write_text(content, encoding='utf-8')
    print('wrote', name)

print('done')
