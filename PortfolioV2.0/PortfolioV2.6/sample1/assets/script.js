/* =====================================================
   Dikshant Agrawal — Portfolio JS
   Terminal typewriter · Circuit canvas · Reveal · Nav
   ===================================================== */

/* ---------- 1. Circuit-board animated background ---------- */
(function circuitBackground() {
  const canvas = document.getElementById('circuit-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [], pulses = [];

  function resize() {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    buildGrid();
  }

  function buildGrid() {
    nodes = [];
    const step = 80 * devicePixelRatio;
    for (let x = step / 2; x < w; x += step) {
      for (let y = step / 2; y < h; y += step) {
        if (Math.random() < 0.55) {
          nodes.push({
            x: x + (Math.random() - 0.5) * step * 0.3,
            y: y + (Math.random() - 0.5) * step * 0.3,
          });
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Connect nearby nodes
    ctx.lineWidth = 1 * devicePixelRatio;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 * devicePixelRatio) {
          const alpha = 0.12 * (1 - dist / (130 * devicePixelRatio));
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          // Right-angle trace (PCB-style)
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(a.x, b.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Nodes (solder pads)
    nodes.forEach((n) => {
      ctx.fillStyle = 'rgba(255, 0, 60, 0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });

    // Moving pulses along random edges
    if (Math.random() < 0.04 && nodes.length > 2) {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      pulses.push({ x: a.x, y: a.y, tx: b.x, ty: b.y, t: 0 });
    }

    pulses = pulses.filter(p => {
      p.t += 0.015;
      if (p.t >= 1) return false;
      const cx = p.x + (p.tx - p.x) * p.t;
      const cy = p.y + (p.ty - p.y) * p.t;
      ctx.fillStyle = `rgba(255, 0, 60, ${1 - p.t})`;
      ctx.shadowColor = '#ff003c';
      ctx.shadowBlur = 12 * devicePixelRatio;
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      return true;
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
})();

/* ---------- 2. Terminal typewriter (hero) ---------- */
(function typewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const lines = [
    { prompt: '$', text: 'whoami' },
    { text: 'dikshant.agrawal — embedded systems engineer', className: 'out' },
    { prompt: '$', text: 'cat ./focus.cfg' },
    { text: 'AI · functional safety · real-time systems', className: 'out' },
    { prompt: '$', text: 'echo $LOCATION' },
    { text: 'Darmstadt, Germany', className: 'out' },
    { prompt: '$', text: '' },
  ];

  let li = 0, ci = 0;
  function type() {
    if (li >= lines.length) {
      // Leave cursor on the last empty prompt line
      return;
    }
    const line = lines[li];
    let div = target.querySelector(`[data-i="${li}"]`);
    if (!div) {
      div = document.createElement('div');
      div.className = 'terminal-line';
      div.dataset.i = li;
      if (line.prompt) {
        const p = document.createElement('span');
        p.className = 'prompt';
        p.textContent = line.prompt + ' ';
        div.appendChild(p);
      }
      const span = document.createElement('span');
      span.className = 'tw-text' + (line.className ? ' ' + line.className : '');
      div.appendChild(span);
      target.appendChild(div);
    }
    const span = div.querySelector('.tw-text');

    if (ci < line.text.length) {
      span.textContent += line.text.charAt(ci++);
      setTimeout(type, line.prompt ? 45 : 18);
    } else {
      li++; ci = 0;
      if (li < lines.length) setTimeout(type, 350);
      else {
        // final cursor on last line
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        div.appendChild(cursor);
      }
    }
  }
  setTimeout(type, 500);
})();

/* ---------- 3. Mobile nav toggle ---------- */
(function nav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
})();

/* ---------- 4. Scroll-reveal ---------- */
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

/* ---------- 5. Active nav link by page ---------- */
(function activeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
})();

/* ---------- 6. Contact form (mailto fallback) ---------- */
(function contact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const subject = encodeURIComponent(data.get('subject') || 'Hello Dikshant');
    const msg = encodeURIComponent(
      `From: ${decodeURIComponent(name)} <${decodeURIComponent(email)}>\n\n` + (data.get('message') || '')
    );
    window.location.href = `mailto:agrawaldikshant3001@gmail.com?subject=${subject}&body=${msg}`;
  });
})();
