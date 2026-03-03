from PIL import Image

# Open the image
img = Image.open("parall-logo-transparent.png")
img = img.convert("RGBA")

# Get pixel data
pixels = img.load()
width, height = img.size

# Process each pixel
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        
        # Check if pixel is dark navy/dark blue
        if 0 <= r <= 80 and 0 <= g <= 80 and 80 <= b <= 180:
            # Change to white, keep alpha
            pixels[x, y] = (255, 255, 255, a)

# Save the result
img.save("parall-logo-white-text.png")
print("Logo converted successfully! Saved as parall-logo-white-text.png")
