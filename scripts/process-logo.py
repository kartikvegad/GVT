from PIL import Image

src = r"C:\Users\karti\.cursor\projects\c-Users-karti-Desktop-DOT-Projects-GVT\assets\c__Users_karti_AppData_Roaming_Cursor_User_workspaceStorage_b00c2b6bb3e07f22c359dbd3dad23b14_images_image-276ea9b6-8d3a-458c-ad32-6496576185de.jpg"
dst = r"C:\Users\karti\Desktop\DOT\Projects\GVT\public\logo.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, _a = pixels[x, y]
        mx = max(r, g, b)
        mn = min(r, g, b)
        spread = mx - mn
        if mx < 36 and spread < 16:
            pixels[x, y] = (0, 0, 0, 0)
        elif mx < 52 and r < 42 and g < 42 and b < 52 and spread < 22:
            t = (mx - 28) / 24
            pixels[x, y] = (r, g, b, int(max(0.0, min(1.0, t)) * 255))

bbox = img.getbbox()
if bbox:
    left, top, right, bottom = bbox
    pad = 16
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
