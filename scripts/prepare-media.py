from pathlib import Path
from urllib.request import urlretrieve, Request, urlopen
from PIL import Image
import shutil

ROOT = Path(r'D:\psl\psl-mian-channu\public')
for folder in ['hero', 'owners', 'players', 'sponsors', 'teams']:
    (ROOT / folder).mkdir(parents=True, exist_ok=True)

SRC = Path(r'C:\Users\HP\.cursor\projects\d-psl\assets\c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_7c8f0fb22426ca533a3e7cd7dbe29596_images_ChatGPT_Image_Sep_23__2026__12_48_04_AM-79846ede-d74f-47af-8600-c0a30b03669c.jpg')
shutil.copyfile(SRC, ROOT / 'hero' / 'memorial-banner.jpg')

im = Image.open(SRC)
crops = {
    'masood-awan': (8, 105, 175, 300),
    'niaz-asif-nadeem': (165, 100, 335, 300),
    'naveed-awan': (320, 95, 490, 295),
    'khan-kashif': (475, 95, 645, 295),
    'raja-murtaza': (630, 90, 820, 295),
    'memorial-guest': (800, 80, 1015, 300),
}
for name, box in crops.items():
    face = im.crop(box).resize((480, 480), Image.Resampling.LANCZOS)
    face.save(ROOT / 'owners' / f'{name}.jpg', quality=92)
    print('saved owner', name)

def download(url: str, dest: Path) -> bool:
    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req, timeout=60) as res, open(dest, 'wb') as f:
            f.write(res.read())
        print('ok', dest.name, dest.stat().st_size)
        return True
    except Exception as e:
        print('fail', dest.name, e)
        return False

heroes = {
    'stadium-lights.jpg': 'https://images.unsplash.com/photo-1750716413381-1c9a0d94db84?auto=format&fit=crop&w=1600&q=80',
    'crowd-night.jpg': 'https://images.unsplash.com/photo-1750716413756-b66624b64ce4?auto=format&fit=crop&w=1600&q=80',
    'match-action.jpg': 'https://images.unsplash.com/photo-1750716413341-fd5d93296a76?auto=format&fit=crop&w=1600&q=80',
    'cricket-bat.jpg': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1600&q=80',
}
for name, url in heroes.items():
    download(url, ROOT / 'hero' / name)

players = {
    'p1.jpg': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&h=800&q=80',
    'p2.jpg': 'https://images.unsplash.com/photo-1540747916308-5a763caa94c2?auto=format&fit=crop&w=800&h=800&q=80',
    'p3.jpg': 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e05e?auto=format&fit=crop&w=800&h=800&q=80',
    'p4.jpg': 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&h=800&q=80',
    'p5.jpg': 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&h=800&q=80',
    'p6.jpg': 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&h=800&q=80',
    'p7.jpg': 'https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=800&h=800&q=80',
    'p8.jpg': 'https://images.unsplash.com/photo-1517649763962-0c6230660274?auto=format&fit=crop&w=800&h=800&q=80',
    'p9.jpg': 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&h=800&q=80',
    'p10.jpg': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&h=800&q=80',
    'p11.jpg': 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&h=800&q=80',
    'p12.jpg': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&h=800&q=80',
}
for name, url in players.items():
    download(url, ROOT / 'players' / name)

sponsors = {
    'hbl.png': 'https://logo.clearbit.com/hbl.com',
    'pepsi.png': 'https://logo.clearbit.com/pepsi.com',
    'kfc.png': 'https://logo.clearbit.com/kfc.com',
    'ary.png': 'https://logo.clearbit.com/arydigital.tv',
    'daraz.png': 'https://logo.clearbit.com/daraz.pk',
    'jazz.png': 'https://logo.clearbit.com/jazz.com.pk',
}
for name, url in sponsors.items():
    download(url, ROOT / 'sponsors' / name)

print('complete')
