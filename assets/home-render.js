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
})();
