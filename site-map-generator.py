import os
from datetime import datetime
from urllib.parse import urljoin

# ===== CONFIGURATION =====
BASE_URL = "https://cadmateindia.com/"
ROOT_FOLDER = r"D:/mycode/cadmateindia.com"   # CHANGE THIS PATH
OUTPUT_FILE = "sitemap.xml"

VALID_EXTENSIONS = (".html",)  # add ".php", ".jsp" if needed

# =========================

def generate_sitemap():
    urls = []

    for root, _, files in os.walk(ROOT_FOLDER):
        for file in files:
            if file.endswith(VALID_EXTENSIONS):
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, ROOT_FOLDER)
                
                # Normalize URL path
                url_path = relative_path.replace(os.sep, "/")

                # Remove index.html from URLs
                if url_path.endswith("index.html"):
                    url_path = url_path.replace("index.html", "")

                full_url = urljoin(BASE_URL, url_path)
                urls.append(full_url)

    write_sitemap(urls)

def write_sitemap(urls):
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n')

        for url in sorted(set(urls)):
            f.write("  <url>\n")
            f.write(f"    <loc>{url}</loc>\n")
            f.write(f"    <lastmod>{datetime.now().date()}</lastmod>\n")
            f.write("    <changefreq>weekly</changefreq>\n")
            f.write("    <priority>0.8</priority>\n")
            f.write("  </url>\n")

        f.write('</urlset>')

    print(f"✅ Sitemap generated successfully: {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_sitemap()
