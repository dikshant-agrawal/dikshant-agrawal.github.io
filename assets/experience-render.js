/* Renders work/education timelines + soft skills from experience-data.js.
   Edit experience-data.js, not this file. */
(function () {
  function itemHtml(e) {
    const bullets = (e.bullets || []).map(b => '<li>' + b + '</li>').join('');
    return '<div class="timeline-item reveal">' +
      '<span class="period"><i class="fa-regular fa-calendar"></i> ' + e.period + '</span>' +
      '<h3>' + e.title + '</h3>' +
      '<p class="place">' + e.place + '</p>' +
      (bullets ? '<ul>' + bullets + '</ul>' : '') +
      '</div>';
  }
  function fill(id, arr) {
    const el = document.getElementById(id);
    if (el && arr) el.innerHTML = arr.filter(x => x.visible !== false).map(itemHtml).join('\n');
  }
  fill('work-timeline-js', typeof WORK !== 'undefined' ? WORK : null);
  fill('education-timeline-js', typeof EDUCATION !== 'undefined' ? EDUCATION : null);
  const s = document.getElementById('soft-skills-js');
  if (s && typeof SOFT_SKILLS !== 'undefined') {
    s.innerHTML = SOFT_SKILLS.map(t => '<span class="tag">' + t + '</span>').join('\n');
  }
})();
