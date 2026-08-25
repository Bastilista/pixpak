# yourproject — landing page

A static landing page template, pre-wired to open and run in **GitHub Codespaces** with zero setup.

## Run it in Codespaces

1. Push this folder to a GitHub repo.
2. On the repo page: **Code → Codespaces → Create codespace on main**.
3. Wait for the container to build (installs `serve` automatically via `postCreateCommand`).
4. It auto-runs `serve . -l 3000` and Codespaces will pop up a **"Open in Browser"** prompt for port `3000` — click it.

Alternatively, once the codespace is open:
- Right-click `index.html` in the file explorer → **Open with Live Server** (the extension is preinstalled), or
- Run `npx serve .` in the terminal and open the forwarded port.

## Run it locally

No build step — just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Structure

```
.
├── index.html              # markup
├── styles.css              # all styling (dark/terminal theme)
├── script.js                # typing-effect animation + footer year
└── .devcontainer/
    └── devcontainer.json    # Codespaces environment + auto port forward
```

## Customizing

- Swap `yourproject` and the copy in `index.html` for your real project name/pitch.
- Colors and fonts are defined as CSS variables at the top of `styles.css` (`:root`) — change the palette there.
- The terminal commands typed in the hero live in the `commands` array at the top of `script.js`.
