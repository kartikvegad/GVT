from collections import deque
from PIL import Image

src = r"C:\Users\karti\.cursor\projects\c-Users-karti-Desktop-DOT-Projects-GVT\assets\c__Users_karti_AppData_Roaming_Cursor_User_workspaceStorage_b00c2b6bb3e07f22c359dbd3dad23b14_images_Logo_Updated-fff3ccbb-a298-4da7-af88-726ae7350fbf.jpg"
dst = r"C:\Users\karti\Desktop\DOT\Projects\GVT\public\logo.png"
dst_sm = r"C:\Users\karti\Desktop\DOT\Projects\GVT\public\logo-sm.png"
dst_icon = r"C:\Users\karti\Desktop\DOT\Projects\GVT\app\icon.png"


def is_bg(r: int, g: int, b: int) -> bool:
    mx = max(r, g, b)
    mn = min(r, g, b)
    spread = mx - mn
    if mx < 18:
        return True
    if mx < 42 and spread < 18:
        return True
    if mx < 58 and r < 48 and g < 48 and b < 58 and spread < 24:
        return True
    return False


def bg_alpha(r: int, g: int, b: int) -> int:
    mx = max(r, g, b)
    mn = min(r, g, b)
    spread = mx - mn
    if mx < 18 or (mx < 36 and spread < 16):
        return 0
    if mx < 58 and r < 48 and g < 48 and b < 58 and spread < 24:
        t = (mx - 28) / 30
        return int(max(0.0, min(1.0, t)) * 255)
    return 255


img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size

visited = [[False] * width for _ in range(height)]
queue: deque[tuple[int, int]] = deque()

for x in range(width):
    for y in (0, height - 1):
        r, g, b, _a = pixels[x, y]
        if is_bg(r, g, b):
            queue.append((x, y))
            visited[y][x] = True
for y in range(height):
    for x in (0, width - 1):
        r, g, b, _a = pixels[x, y]
        if is_bg(r, g, b) and not visited[y][x]:
            queue.append((x, y))
            visited[y][x] = True

while queue:
    x, y = queue.popleft()
    r, g, b, _a = pixels[x, y]
    pixels[x, y] = (r, g, b, bg_alpha(r, g, b))
    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
        if 0 <= nx < width and 0 <= ny < height and not visited[ny][nx]:
            nr, ng, nb, _na = pixels[nx, ny]
            if is_bg(nr, ng, nb):
                visited[ny][nx] = True
                queue.append((nx, ny))

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue
        mx = max(r, g, b)
        mn = min(r, g, b)
        if mx < 14 and (mx - mn) < 10:
            pixels[x, y] = (0, 0, 0, 0)

bbox = img.getbbox()
if bbox:
    left, top, right, bottom = bbox
    pad = 18
    img = img.crop(
        (
            max(0, left - pad),
            max(0, top - pad),
            min(width, right + pad),
            min(height, bottom + pad),
        )
    )

img.save(dst, "PNG")
print(f"saved {dst} {img.size}")

small = img.copy()
small.thumbnail((240, 240), Image.Resampling.LANCZOS)
small.save(dst_sm, "PNG")
print(f"saved {dst_sm} {small.size}")

side = max(img.size)
icon = Image.new("RGBA", (side, side), (0, 0, 0, 0))
ox = (side - img.size[0]) // 2
oy = (side - img.size[1]) // 2
icon.paste(img, (ox, oy), img)
icon.thumbnail((192, 192), Image.Resampling.LANCZOS)
icon.save(dst_icon, "PNG")
print(f"saved {dst_icon} {icon.size}")
