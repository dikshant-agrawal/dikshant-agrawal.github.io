# Projects Page Guide — no HTML needed

Everything on the projects page is controlled by **one file**:

```
assets/projects-data.js
```

The HTML (`projects.html`) just provides empty containers — never edit it for content changes.

## The PROJECTS array

Each project is one `{ ... }` block:

```js
{
  id: "myproject",                  // short unique key
  visible: true,                    // false = hidden (nothing is deleted)
  title: "My New Project",
  description: "One or two sentences about what it does.",
  tags: ["C++", "RTOS", "CAN"],     // small chips at the top of the card
  meta: [                           // the highlighted info row
    { label: "mcu", value: "STM32F4" },
    { label: "role", value: "firmware" }
  ],
  codeUrl: "https://github.com/dikshant-agrawal/my-repo",  // null = no button
  codeLabel: "Code",                // or "Files"
  caseStudy: "myproject",           // popup key from assets/case-studies.js, or null
  image: "myproject.png",           // file in assets/project-img/ — see below
  svg: ``                           // only used when image is ""
}
```

## Common tasks

- **Add a project**: copy any block, paste it where you want it, fill the fields.
- **Reorder**: the page order IS the array order — cut a whole block and paste it higher/lower. First block = top of the page.
- **Hide without deleting**: `visible: false`.
- **Card image**: drop a picture (PNG/JPG/SVG/WebP, roughly 16:9) into `assets/project-img/` and set `image: "filename.png"`. That's it. If `image` is `""`, the inline `svg` art is used instead (the 15 original cards keep their hand-made SVGs this way). If both are empty, a neutral chip placeholder appears.
- **"More repos" buttons** (bottom of page): edit the `MORE_REPOS` array at the end of the same file — `label`, `url`, `visible`.

## Case-study popups

Popup text lives in `assets/case-studies.js`. To give a new project a popup, add an entry there with the same key you used in `caseStudy:` — copy an existing entry, it's plain text fields (overview / goals / approach / results).

## Publishing

Commit + push to `main`; GitHub Pages redeploys automatically in ~1 minute:

```
git add -A && git commit -m "update projects" && git push
```

---

# Other data-driven pages

## Experience page — `assets/experience-data.js`

- `WORK` — job timeline entries: `period`, `title`, `place`, `bullets` (array of strings, simple HTML like `<strong class="accent">` allowed), `visible`.
- `EDUCATION` — same shape.
- `SOFT_SKILLS` — plain list of tag strings.

Order = array order; `visible: false` hides an entry.

## Home page — `assets/home-data.js`

- `STATS` — the four stat tiles (`val`, `key`).
- `SKILLS_MONITOR` — the SKILL.MONITOR bars (`name`, `width` 0–100, `val` label).
- `TYPEWRITER_LINES` — the hero terminal typing animation.
- `SERIAL_SEQUENCE` / `SERIAL_NOISE` — the LOG.VALIDATOR panel messages (your quick CV facts — update `SEEKING:`, `EXP:` lines here as things change).

All support the same rules: order = array order, `visible: false` to hide (stats/skills).
