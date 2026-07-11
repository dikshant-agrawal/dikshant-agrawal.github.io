/* Renders stat tiles + skill monitor from home-data.js. */
(function () {
  const stats = document.getElementById('stat-row-js');
  if (stats && typeof STATS !== 'undefined') {
    stats.innerHTML = STATS.filter(s => s.visible !== false).map(s =>
      '<div class="stat-tile"><span class="val">' + s.val + '</span><span class="key">' + s.key + '</span></div>'
    ).join('\n');
  }
  const mon = document.getElementById('skill-monitor-js');
  if (mon && typeof SKILLS_MONITOR !== 'undefined') {
    mon.innerHTML = SKILLS_MONITOR.filter(r => r.visible !== false).map(r =>
      '<div class="sm-row">' +
      '<span class="sm-dot sm-on"></span>' +
      '<span class="sm-name">' + r.name + '</span>' +
      '<div class="sm-bar-wrap"><div class="sm-bar-fill" style="width:' + r.width + '%"></div></div>' +
      '<span class="sm-val">' + r.val + '</span></div>'
    ).join('\n');
  }
  const sg = document.getElementById('skills-grid-js');
  if (sg && typeof SKILL_GROUPS !== 'undefined') {
    sg.innerHTML = SKILL_GROUPS.filter(g => g.visible !== false).map(g =>
      '<div class="skill-group reveal">' +
      '<h4><span class="ico"><i class="' + g.icon + '"></i></span>' + g.title + '</h4>' +
      '<div class="tag-cloud">' + g.tags.map(t => '<span class="tag">' + t + '</span>').join('') + '</div></div>'
    ).join('\n');
  }
})();
