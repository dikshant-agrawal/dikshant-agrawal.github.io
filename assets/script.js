/* =====================================================
   Dikshant Agrawal — Portfolio v2 (TRON)
   Grid floor · Circuit canvas · Typewriter · Scope
   Live clock · Reveal · Nav · Contact
   ===================================================== */

/* ---------- 1. TRON grid floor (perspective) ---------- */
(function gridFloor() {
  const canvas = document.getElementById('grid-floor');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, t = 0;
  const DPR = Math.min(window.devicePixelRatio, 2);

  function resize() {
    w = canvas.width = window.innerWidth * DPR;
    h = canvas.height = window.innerHeight * DPR;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    t += 0.5;
    ctx.clearRect(0, 0, w, h);

    const horizon = h * 0.55;
    const vanishX = w / 2;

    ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
    ctx.lineWidth = 1 * DPR;

    // Horizontal lines (moving forward)
    const rows = 22;
    for (let i = 0; i < rows; i++) {
      const p = ((i + (t / 80) % 1) / rows);
      const y = horizon + (h - horizon) * (p * p);
      const alpha = Math.pow(p, 1.2) * 0.55;
      ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Vertical lines (vanishing)
    const cols = 28;
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
    for (let i = 0; i <= cols; i++) {
      const x = (i / cols) * w * 2 - w / 2;
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(vanishX, horizon);
      ctx.stroke();
    }

    // Horizon glow
    const grad = ctx.createLinearGradient(0, horizon - 40, 0, horizon + 40);
    grad.addColorStop(0, 'rgba(0, 229, 255, 0)');
    grad.addColorStop(0.5, 'rgba(0, 229, 255, 0.35)');
    grad.addColorStop(1, 'rgba(0, 229, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, horizon - 40, w, 80);

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ---------- 2. Circuit background with moving pulses ---------- */
(function circuitBackground() {
  const canvas = document.getElementById('circuit-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio, 2);
  let w, h, nodes = [], pulses = [];

  function resize() {
    w = canvas.width = window.innerWidth * DPR;
    h = canvas.height = window.innerHeight * DPR;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    buildGrid();
  }

  function buildGrid() {
    nodes = [];
    const step = 90 * DPR;
    for (let x = step / 2; x < w; x += step) {
      for (let y = step / 2; y < h * 0.55; y += step) {
        if (Math.random() < 0.4) {
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

    ctx.lineWidth = 1 * DPR;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140 * DPR) {
          const alpha = 0.14 * (1 - dist / (140 * DPR));
          ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(a.x, b.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      ctx.fillStyle = 'rgba(0, 229, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2 * DPR, 0, Math.PI * 2);
      ctx.fill();
    });

    if (Math.random() < 0.05 && nodes.length > 2) {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      pulses.push({ x: a.x, y: a.y, tx: b.x, ty: b.y, t: 0 });
    }

    pulses = pulses.filter(p => {
      p.t += 0.02;
      if (p.t >= 1) return false;
      const cx = p.x + (p.tx - p.x) * p.t;
      const cy = p.y + (p.ty - p.y) * p.t;
      ctx.fillStyle = `rgba(0, 229, 255, ${1 - p.t})`;
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 14 * DPR;
      ctx.beginPath();
      ctx.arc(cx, cy, 3 * DPR, 0, Math.PI * 2);
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

/* ---------- 3. Terminal typewriter (hero) ---------- */
(function typewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const lines = [
    { prompt: '$', text: 'whoami' },
    { text: 'dikshant.agrawal // embedded systems engineer', className: 'accent' },
    { prompt: '$', text: 'cat ./experience.log' },
    { text: '~4 yrs · IoT · wireless comms · research · AI', className: 'accent' },
    { prompt: '$', text: 'cat ./status.cfg' },
    { text: 'seeking internship · embedded firmware · device drivers', className: 'accent' },
    { prompt: '$', text: '' },
  ];

  let li = 0, ci = 0;
  function type() {
    if (li >= lines.length) return;
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
      setTimeout(type, line.prompt ? 40 : 16);
    } else {
      li++; ci = 0;
      if (li < lines.length) setTimeout(type, 320);
      else {
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        div.appendChild(cursor);
      }
    }
  }
  setTimeout(type, 450);
})();

/* ---------- 4. Oscilloscope waveform strip ---------- */
(function scope() {
  document.querySelectorAll('.scope-strip svg').forEach((svg) => {
    const w = 300, h = 40;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('preserveAspectRatio', 'none');

    // grid
    const gridNS = 'http://www.w3.org/2000/svg';
    for (let x = 0; x <= w; x += 20) {
      const ln = document.createElementNS(gridNS, 'line');
      ln.setAttribute('x1', x); ln.setAttribute('y1', 0);
      ln.setAttribute('x2', x); ln.setAttribute('y2', h);
      ln.setAttribute('stroke', 'rgba(0,229,255,0.08)');
      ln.setAttribute('stroke-width', '1');
      svg.appendChild(ln);
    }
    const mid = document.createElementNS(gridNS, 'line');
    mid.setAttribute('x1', 0); mid.setAttribute('y1', h/2);
    mid.setAttribute('x2', w); mid.setAttribute('y2', h/2);
    mid.setAttribute('stroke', 'rgba(0,229,255,0.12)');
    mid.setAttribute('stroke-dasharray', '2 3');
    svg.appendChild(mid);

    // waveform path
    const path = document.createElementNS(gridNS, 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#00e5ff');
    path.setAttribute('stroke-width', '1.8');
    path.setAttribute('filter', 'drop-shadow(0 0 4px #00e5ff)');
    svg.appendChild(path);

    const type = svg.dataset.wave || 'sine';
    const speed = type === 'clock' ? 0.008 : type === 'triangle' ? 0.014 : type === 'pwm' ? 0.016 : 0.035;
    let t = 0;
    function tick() {
      t += speed;
      let d = '';

      if (type === 'clock') {
        // Sharp-edged clock wave — explicit vertical transitions so edges are perfectly square
        const n = 5;    // cycles visible
        const amp = 13;
        const mid = h / 2;
        const pts = [];
        let prevY = null;
        for (let x = 0; x <= w; x++) {
          const phase = ((x / w * n + t) % 1);
          const ny = mid + (phase < 0.5 ? -amp : amp);
          if (prevY !== null && ny !== prevY) {
            // Insert explicit vertical edge: same x, old y → same x, new y
            pts.push(x + ' ' + prevY.toFixed(1));
            pts.push(x + ' ' + ny.toFixed(1));
          } else {
            pts.push(x + ' ' + ny.toFixed(1));
          }
          prevY = ny;
        }
        d = 'M' + pts[0] + ' ' + pts.slice(1).map(p => 'L' + p).join(' ');
      } else {
        for (let x = 0; x < w; x += 1.5) {
          let y;
          const phase = (x / w) * Math.PI * 6 + t;
          if (type === 'square') {
            y = h / 2 + Math.sign(Math.sin(phase)) * 14;
          } else if (type === 'pwm') {
            const v = (x / w * 6 + t) % 2;
            y = h / 2 + (v < 1.3 ? -14 : 14);
          } else if (type === 'triangle') {
            // Symmetric triangle: ramps linearly -amp → +amp → -amp per cycle
            const ph = ((x / w * 5 + t) % 1);
            const amp = 13;
            const yrel = ph < 0.5 ? -amp + ph * 4 * amp : amp - (ph - 0.5) * 4 * amp;
            y = h / 2 + yrel;
          } else { // sine
            y = h / 2 + Math.sin(phase) * 12 + Math.sin(phase * 2.3) * 3;
          }
          d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' ';
        }
      }
      path.setAttribute('d', d);
      requestAnimationFrame(tick);
    }
    tick();
  });
})();

/* ---------- 5. Live clock (nav) ---------- */
(function liveClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  function tick() {
    const now = new Date();
    const h = now.toLocaleTimeString('en-DE', { hour12: false, timeZone: 'Europe/Berlin' });
    el.textContent = `DA/${h} CET`;
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- 6. Mobile nav toggle ---------- */
(function nav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
})();

/* ---------- 7. Scroll-reveal ---------- */
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

/* ---------- 8. Active nav link ---------- */
(function activeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
})();

/* ---------- 9. Side hex decoration generator ---------- */
(function sideHex() {
  const hexPool = '0123456789ABCDEF';
  function randLine(n = 8) {
    let s = '';
    for (let i = 0; i < n; i++) s += hexPool[Math.floor(Math.random() * 16)];
    return '0x' + s;
  }
  document.querySelectorAll('.side-hex').forEach(el => {
    const lines = [];
    for (let i = 0; i < 160; i++) lines.push(randLine());
    el.textContent = lines.join('\n');
  });
})();

/* ---------- 10. SKILL MONITOR bar fill animation ---------- */
(function skillMonitor() {
  // Animate bars filling in on load for visual impact
  const fills = document.querySelectorAll('.hw-monitor .sm-bar-fill');
  if (!fills.length) return;
  fills.forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      bar.style.width = target;
    }, 400 + Math.random() * 300);
  });
})();

/* ---------- 11. Serial / UART skill log ---------- */
(function serialMonitor() {
  const output = document.getElementById('serial-output');
  if (!output) return;

  const MAX_LINES = 60;
  let ticker = 0;

  // ''     = blue  (system noise)
  // 'ok'   = green (verified)
  // 'data' = white (recruiter-critical CV info)

  const noise = [
    { msg: 'CAN1: TX 0x2A1 DLC=8 nominal',           type: '' },
    { msg: 'I2C1: ACK @ 0x48 TMP102 OK',             type: '' },
    { msg: 'RTOS: tick 1000Hz nominal',               type: '' },
    { msg: 'WDT: kick counter reset',                 type: '' },
    { msg: 'UART0: RX buffer clear',                  type: '' },
    { msg: 'DMA: stream 0 transfer OK',               type: '' },
    { msg: 'ADC1: VREF 3.30V nominal',                type: '' },
    { msg: 'SPI2: CS deassert OK',                    type: '' },
    { msg: 'GPIO: IRQ edge detected',                 type: '' },
    { msg: 'CLK: PLL locked 168MHz',                  type: '' },
  ];

  const sequence = [
    { msg: 'LOG.VALIDATOR — boot',                    type: '' },
    { msg: 'RTOS: scheduler verified',                type: 'ok' },
    { msg: 'DRV: device driver stack OK',             type: 'ok' },
    null, // noise slot
    { msg: 'NAME: Dikshant Agrawal',                  type: 'data' },
    { msg: 'LOC: Darmstadt, DE · Indian national',    type: 'data' },
    null,
    { msg: 'EDU: M.Sc. Embedded Systems · h_da',      type: 'data' },
    { msg: 'EXP: ~4 yrs · IoT · wireless · AI',       type: 'data' },
    null,
    { msg: 'EXP: Firmware Dev · h_da · 2026–now',     type: 'data' },
    { msg: 'EXP: Embedded Eng · IITI IIT · 2yr',      type: 'data' },
    null,
    { msg: 'STACK: C/C++ · RTOS · Device Driver',     type: 'data' },
    { msg: 'MCU: ARM · PSoC · ESP · Nordic',           type: 'data' },
    null,
    { msg: 'ENGLISH: professional · GERMAN: A2',       type: 'data' },
    null,
    { msg: 'SEEKING: firmware internship · DE',        type: 'data' },
    { msg: 'LOG.VALIDATOR: all checks passed ✓',       type: 'ok' },
  ];

  function randomNoise() {
    return noise[Math.floor(Math.random() * noise.length)];
  }

  function addLine(msg, type) {
    while (output.children.length >= MAX_LINES) output.removeChild(output.firstChild);
    const ts = String(ticker++).padStart(4, '0');
    const div = document.createElement('div');
    div.className = 'serial-line';
    const tsSpan = document.createElement('span');
    tsSpan.className = 'serial-ts';
    tsSpan.textContent = '[' + ts + ']';
    const msgSpan = document.createElement('span');
    msgSpan.className = 'serial-msg' + (type ? ' ' + type : '');
    msgSpan.textContent = msg;
    div.appendChild(tsSpan);
    div.appendChild(msgSpan);
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  // boot: ~500ms per entry, noise slots get a random noise line
  let si = 0;
  function runBoot() {
    if (si >= sequence.length) { startLive(); return; }
    const entry = sequence[si++];
    const e = entry === null ? randomNoise() : entry;
    addLine(e.msg, e.type);
    setTimeout(runBoot, 480 + Math.random() * 120);
  }

  // live: rotates data + random noise, ~1.4s per line
  const live = [
    { msg: 'SEEKING: firmware internship · DE',       type: 'data' },
    null,
    { msg: 'STACK: C/C++ · RTOS · Device Driver',     type: 'data' },
    null,
    { msg: 'MCU: ARM · PSoC · ESP · Nordic',           type: 'data' },
    null,
    { msg: 'EDU: M.Sc. Embedded Systems · h_da',       type: 'data' },
    null,
    { msg: 'ENGLISH: professional · GERMAN: A2',        type: 'data' },
    null,
    { msg: 'EXP: ~4 yrs · IoT · wireless · AI',        type: 'data' },
    null,
    { msg: 'LOG.VALIDATOR: nominal ✓',                  type: 'ok' },
    null,
  ];

  let li = 0;
  function startLive() {
    function nextLive() {
      const entry = live[li % live.length];
      li++;
      const e = entry === null ? randomNoise() : entry;
      addLine(e.msg, e.type);
      const delay = entry === null ? 600 + Math.random() * 200 : 1400 + Math.random() * 300;
      setTimeout(nextLive, delay);
    }
    setTimeout(nextLive, 1000);
  }

  setTimeout(runBoot, 150);
})();

/* ---------- 11. Phone button: copy-to-clipboard on desktop, tel: on mobile ---------- */
(function phoneBtn() {
  const btn = document.querySelector('.phone-btn');
  if (!btn) return;

  // Create toast element once
  const toast = document.createElement('div');
  toast.className = 'phone-toast';
  document.body.appendChild(toast);

  let hideTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  btn.addEventListener('click', (e) => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ||
                     ('ontouchstart' in window && window.innerWidth < 768);
    if (isMobile) return; // let the href="tel:" fire naturally

    e.preventDefault();
    const num = btn.dataset.phone || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(num).then(() => showToast('📋 ' + num + ' — copied to clipboard'));
    } else {
      showToast('📞 ' + num);
    }
  });
})();

/* ---------- 12. Contact form handled inline in contact.html via Web3Forms ---------- */
