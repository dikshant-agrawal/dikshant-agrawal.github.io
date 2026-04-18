# Projects Guide — How to Edit Your Portfolio Projects

This document tells you exactly where to find each field in `projects.html` and how to add or update project cards, GitHub links, case study links, and PDF downloads.

---

## File to edit: `projects.html`

Each project is an `<article class="project-card">` block. There are currently **6 projects**. They appear in this order:

1. Zigbee Radio Stack for Racing Car
2. Point-of-Care Healthcare Device
3. Aerospace-Grade Buck Converter
4. Wireless Energy-Monitoring Boards
5. Edge-AI Keyword Spotting on Cortex-M4
6. CAN Bus Gateway & Diagnostic Logger

---

## Anatomy of a project card

Below is the structure of every card with labels for each editable field:

```html
<article class="project-card reveal">

  <!-- ① Illustration area — SVG diagram, no text to edit here -->
  <div class="project-img"> ... </div>

  <div class="project-body">

    <!-- ② Technology tags -->
    <div class="project-tags">
      <span class="tag">Zigbee</span>
      <span class="tag">AUTOSAR CDD</span>
    </div>

    <!-- ③ Project title -->
    <h3>Zigbee Radio Stack for Racing Car</h3>

    <!-- ④ Description paragraph -->
    <p>Extending the CDD and communication stack layer of a Zigbee-based remote...</p>

    <!-- ⑤ Meta row (role + key stat) -->
    <div class="project-meta">
      <span><strong>role:</strong> firmware eng.</span>
      <span><strong>mcu:</strong> CC2538</span>
    </div>

    <!-- ⑥ Links (GitHub, Case Study, PDF) -->
    <div class="project-links">
      <a href="https://github.com/..." target="_blank" rel="noopener">
        <i class="fa-brands fa-github"></i> Code
      </a>
      <a href="#">
        <i class="fa-solid fa-book-open"></i> Case Study
      </a>
    </div>

  </div>
</article>
```

---

## ① How to update each field

### ② Tags
Find `<div class="project-tags">` inside the project card.  
Add or remove `<span class="tag">TEXT</span>` lines. Keep it to 3–5 tags for best layout.

### ③ Title
Edit the text inside `<h3>...</h3>`.

### ④ Description
Edit the text inside `<p>...</p>` between the tags and project-meta. Keep it 2–3 sentences.

### ⑤ Meta row
The two `<span>` items show your role and a key stat. Change the label (e.g. `role:`, `mcu:`, `η:`) and value to suit each project.

---

## ⑥ How to set up links

### GitHub link
Replace `#` or the existing URL in the first `<a>` with the real GitHub repo URL:

```html
<a href="https://github.com/dikshant-agrawal/REPO-NAME" target="_blank" rel="noopener">
  <i class="fa-brands fa-github"></i> Code
</a>
```

If the repo is private or doesn't exist yet, change the label to `Private` and remove the link:

```html
<span class="project-links" style="color:var(--fg-2); font-family:var(--mono); font-size:.82rem;">
  <i class="fa-solid fa-lock"></i> Private
</span>
```

### Case Study link (external page or section)
Replace `href="#"` with your URL:

```html
<a href="https://your-case-study-url.com" target="_blank" rel="noopener">
  <i class="fa-solid fa-book-open"></i> Case Study
</a>
```

### PDF Case Study / CV link
To link directly to a PDF file (like your CV), use `fa-file-pdf` as the icon and point to the PDF:

```html
<!-- If the PDF is in your portfolio folder: -->
<a href="case-study-zigbee.pdf" target="_blank" rel="noopener">
  <i class="fa-solid fa-file-pdf"></i> Case Study (PDF)
</a>

<!-- Or link to your main CV: -->
<a href="Dikshant_Agrawal_Biographie.pdf" target="_blank" rel="noopener">
  <i class="fa-solid fa-file-pdf"></i> View CV
</a>
```

Just drop the PDF file into the `Portfolio Website/` folder alongside `index.html` and use the filename as the `href`.

---

## How to add a completely new project

1. Copy any existing `<article class="project-card reveal">…</article>` block.
2. Paste it at the end of the `<div class="projects-grid">` section (before the closing `</div>`).
3. Update fields ②–⑥ above.
4. For the illustration, you can either:
   - **Keep the copied SVG** and change the text labels inside it.
   - **Replace the SVG** with a real screenshot/image: `<img src="your-image.png" alt="Project name" style="width:100%;height:100%;object-fit:cover;">`

---

## How to remove a project

Delete the entire `<article class="project-card reveal"> … </article>` block for that project.

---

## Quick reference: all 6 current project cards

| # | Title | Where in file (approx. line) |
|---|-------|------------------------------|
| 1 | Zigbee Radio Stack for Racing Car | ~67 |
| 2 | Point-of-Care Healthcare Device | ~113 |
| 3 | Aerospace-Grade Buck Converter | ~155 |
| 4 | Wireless Energy-Monitoring Boards | ~207 |
| 5 | Edge-AI Keyword Spotting on Cortex-M4 | ~256 |
| 6 | CAN Bus Gateway & Diagnostic Logger | ~300 |

---

## Hex ticker (scrolling status bar below the grid)

The scrolling text bar beneath the project grid is in `projects.html` around line 350.  
It contains a `<span class="track">` with inline status strings. Update the `/proj/...` entries to match your current project statuses:

```html
/proj/zigbee → BUILD: OK  ::  /proj/ekg-monitor → DEPLOYED @ clinic_0x03  ::
```

---

*Last updated: 2026-04-18*
