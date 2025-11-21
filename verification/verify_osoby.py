from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/Osoby.html")

        # Take a full page screenshot
        page.screenshot(path="verification/osoby_page.png", full_page=True)

        # Take a screenshot of the header area
        header = page.locator("h2:has-text('Galeria Osób')")
        if header.count() > 0:
            print("Header 'Galeria Osób' found.")
        else:
            print("Header 'Galeria Osób' NOT found.")

        sidebar = page.locator(".sidebar h3:has-text('Menu')")
        if sidebar.count() > 0:
            print("Sidebar 'Menu' found.")
        else:
            print("Sidebar 'Menu' NOT found.")

        browser.close()

if __name__ == "__main__":
    run()
