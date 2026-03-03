from PIL import Image

img = Image.open("parall-logo-transparent.png").convert("RGBA")
pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        
        # Skip transparent pixels
        if a <= 30:
            continue
        
        # Keep bright blue hexagon (high blue value)
        if b > 180:
            continue
        
        # Keep cyan/teal colors (high green and blue)
        if g > 150 and b > 150:
            continue
        
        # Convert ALL other dark/colored pixels to white
        # This catches dark blue, navy, dark gray, etc.
        if r < 150 or g < 150 or b < 200:
            pixels[x, y] = (255, 255, 255, a)

img.save("parall-logo-white-text.png")
print("Logo converted successfully!")
