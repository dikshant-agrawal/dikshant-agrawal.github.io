/* Renders project cards + more-repos buttons from assets/projects-data.js.
   You should not need to edit this file — edit projects-data.js instead. */
(function () {
  const DEFAULT_SVG = `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
    <rect x="95" y="45" width="70" height="60" rx="6" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.5" opacity=".9"/>
    <text x="130" y="80" text-anchor="middle" font-family="monospace" font-size="10" fill="#00e5ff">&lt;/&gt;</text>
    <g stroke="#00e5ff" stroke-width="1" opacity=".45">
      <line x1="95" y1="55" x2="70" y2="55"/><line x1="95" y1="75" x2="70" y2="75"/><line x1="95" y1="95" x2="70" y2="95"/>
      <line x1="165" y1="55" x2="190" y2="55"/><line x1="165" y1="75" x2="190" y2="75"/><line x1="165" y1="95" x2="190" y2="95"/>
    </g></svg>`;

  function cardHtml(p) {
    const art = p.image
      ? '<img src="assets/project-img/' + p.image + '" alt="' + (p.title || '') + '" loading="lazy">'
      : (p.svg || DEFAULT_SVG);
    const tags = (p.tags || []).map(t => '<span class="tag">' + t + '</span>').join('');
    const meta = (p.meta || []).map(m =>
      '<span><strong>' + m.label + ':</strong> ' + m.value + '</span>').join('\n            ');
    let links = '';
    if (p.codeUrl) {
      links += '<a href="' + p.codeUrl + '" target="_blank" rel="noopener">' +
               '<i class="fa-brands fa-github"></i> ' + (p.codeLabel || 'Code') + '</a>';
    }
    if (p.caseStudy) {
      links += '<a href="#" data-cs="' + p.caseStudy + '">' +
               '<i class="fa-solid fa-book-open"></i> Case Study</a>';
    }
    return '<article class="project-card reveal">' +
      '<div class="project-img">' + art + '</div>' +
      '<div class="project-body">' +
        '<div class="project-tags">' + tags + '</div>' +
        '<h3>' + p.title + '</h3>' +
        '<p>' + p.description + '</p>' +
        (meta ? '<div class="project-meta">' + meta + '</div>' : '') +
        '<div class="project-links">' + links + '</div>' +
      '</div></article>';
  }

  const grid = document.getElementById('projects-grid-js');
  if (grid && typeof PROJECTS !== 'undefined') {
    grid.innerHTML = PROJECTS.filter(p => p.visible !== false).map(cardHtml).join('\n');
  }

  const more = document.getElementById('more-repos-js');
  if (more && typeof MORE_REPOS !== 'undefined') {
    more.innerHTML = MORE_REPOS.filter(r => r.visible !== false).map(r =>
      '<a class="btn" href="' + r.url + '" target="_blank" rel="noopener">' +
      '<i class="fa-brands fa-github"></i> ' + r.label + '</a>').join('\n');
  }
})();
