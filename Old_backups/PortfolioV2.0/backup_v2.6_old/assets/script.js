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
    { prompt: '$', text: 'uname -a' },
    { text: 'Darmstadt/5.15 #embedded #MCU #edgeAI', className: 'accent' },
    { prompt: '$', text: 'cat ./stack.cfg' },
    { text: 'C · C++ · Python · RTOS · ARM Cortex-M', className: 'accent' },
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
    // Per-type speeds: EKG and PWM are much slower to reduce distraction
    const speed = type === 'ekg' ? 0.012 : type === 'pwm' ? 0.016 : 0.035;
    // Start EKG with offset so the waveform scrolls in from right (starts flat)
    let t = type === 'ekg' ? -2.4 : 0;
    function tick() {
      t += speed;
      let d = '';
      for (let x = 0; x < w; x += 1.5) {
        let y;
        const phase = (x / w) * Math.PI * 6 + t;
        if (type === 'square') {
          y = h / 2 + Math.sign(Math.sin(phase)) * 14;
        } else if (type === 'pwm') {
          // Reduced cycle density (6 instead of 10) and no t*2 multiplier
          const v = (x / w * 6 + t) % 2;
          y = h / 2 + (v < 1.3 ? -14 : 14);
        } else if (type === 'ekg') {
          // Fewer cycles (5 instead of 8) and slower scroll
          const m = ((x / w * 5 + t) % 1);
          const spike = (m > .48 && m < .5) ? -18 : (m > .5 && m < .52) ? 14 : 0;
          y = h / 2 + spike + Math.sin(phase * 3) * 1.2;
        } else { // sine
          y = h / 2 + Math.sin(phase) * 12 + Math.sin(phase * 2.3) * 3;
        }
        d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' ';
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
    for (let i = 0; i < 60; i++) lines.push(randLine());
    el.textContent = lines.join('\n');
  });
})();

/* ---------- 10. Tab switching ---------- */
(function hwTabs() {
  document.querySelectorAll('.hw-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.hw-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.hw-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const el = document.getElementById('tab-' + tab.dataset.tab);
      if (el) el.classList.add('active');
    });
  });
})();

/* ---------- 11. SYS MONITOR live animations ---------- */
(function sysMonitor() {
  // WDT bar countdown → kicks every 4 s
  const wdtBar = document.getElementById('sm-wdt-bar');
  const wdtVal = document.getElementById('sm-wdt-val');
  let wdt = 4.0;
  setInterval(() => {
    wdt -= 0.05;
    if (wdt <= 0) wdt = 4.0;
    if (wdtBar) wdtBar.style.width = ((wdt / 4) * 100).toFixed(1) + '%';
    if (wdtVal) wdtVal.textContent = wdt.toFixed(1) + 's';
  }, 50);

  // CPU usage: gentle drift 55–88%
  const cpuBar = document.getElementById('sm-cpu');
  const cpuVal = document.getElementById('sm-cpu-val');
  let cpu = 72;
  setInterval(() => {
    cpu = Math.max(55, Math.min(88, cpu + (Math.random() - 0.5) * 4));
    const v = Math.round(cpu);
    if (cpuBar) cpuBar.style.width = v + '%';
    if (cpuVal) cpuVal.textContent = v + '%';
  }, 900);

  // ADC: voltage fluctuates slightly
  const adcEl  = document.getElementById('sm-adc');
  const adcVEl = document.getElementById('sm-adc-v');
  setInterval(() => {
    const raw = Math.floor(3100 + Math.random() * 150);
    const v   = (raw / 4096 * 3.3).toFixed(2);
    if (adcEl)  adcEl.textContent  = '0x' + raw.toString(16).toUpperCase().padStart(4,'0');
    if (adcVEl) adcVEl.textContent = v + 'V';
  }, 1200);

  // Protocol churn
  const i2cList  = ['ACK → 0x48', 'ACK → 0x68', 'TX → 0x1E', 'RX ← 0x48', 'NACK · retry'];
  const canList  = ['TX: 0x2A1', 'RX: 0x18F', 'TX: 0x641', 'ERR: none',  'TX: 0x100'];
  const uartList = ['TX ACTIVE', 'RX: "STATUS?"', 'TX: "OK\\r\\n"', 'IDLE'];
  const gpioList = ['12 HIGH · 4 LOW', '11 HIGH · 5 LOW', '13 HIGH · 3 LOW'];
  [['sm-i2c', i2cList, 2200], ['sm-can', canList, 1800],
   ['sm-uart', uartList, 2800], ['sm-gpio', gpioList, 3500]].forEach(([id, list, ms]) => {
    setInterval(() => {
      const el = document.getElementById(id);
      if (el) el.textContent = list[Math.floor(Math.random() * list.length)];
    }, ms);
  });
})();

/* ---------- 12. Serial Monitor auto-scroll ---------- */
(function serialMonitor() {
  const output = document.getElementById('serial-output');
  if (!output) return;

  const boot = [
    { ts: '0000', msg: 'SYS: boot sequence initiated',      type: '' },
    { ts: '0012', msg: 'CLK: PLL locked @ 168 MHz',         type: 'ok' },
    { ts: '0024', msg: 'GPIO: 140 pins configured',          type: '' },
    { ts: '0041', msg: 'FLASH: read latency 5WS',            type: '' },
    { ts: '0055', msg: 'DMA: streams 0–7 armed',             type: '' },
    { ts: '0067', msg: 'I2C1: scanning bus…',                type: '' },
    { ts: '0071', msg: 'I2C1: ACK @ 0x48  (TMP102)',         type: 'ok' },
    { ts: '0089', msg: 'SPI2: init 8 MHz mode-0',            type: '' },
    { ts: '0103', msg: 'CAN1: 1 Mbps  BTR=0x001C',          type: '' },
    { ts: '0116', msg: 'CAN1: bus ACTIVE  REC=0 TEC=0',     type: 'ok' },
    { ts: '0135', msg: 'ADC1: VREF = 3.300 V',               type: '' },
    { ts: '0157', msg: 'RTOS: heap 192 kB  tasks: 8',        type: '' },
    { ts: '0179', msg: 'RTOS: scheduler START',              type: 'ok' },
    { ts: '0201', msg: 'WDT: IWDG armed  timeout 4.0 s',    type: '' },
    { ts: '0235', msg: 'UART0: 115200 8N1  FIFO=32',         type: '' },
    { ts: '0258', msg: 'Zigbee CC2538: channel 15  PAN=0x1A',type: 'ok' },
    { ts: '0314', msg: 'EdgeAI: model 24 kB  int8 quant',   type: 'ok' },
    { ts: '0390', msg: 'SYS: all systems nominal ✓',         type: 'ok' },
  ];
  const live = [
    { msg: () => `I2C1: temp = ${(38+Math.random()*8).toFixed(1)} °C`,       type: '' },
    { msg: () => `CAN1: TX 0x2A1  DLC=8  [${randHex(8)}]`,                  type: '' },
    { msg: () => `ADC1: ch0 = ${(3100+Math.random()*200).toFixed(0)} mV`,    type: '' },
    { msg: () => 'WDT: kick  counter reset',                                  type: '' },
    { msg: () => 'RTOS: task_blink sleep 500 ms',                             type: '' },
    { msg: () => `UART0: RX "${['STATUS?','PING','GET TEMP'][Math.floor(Math.random()*3)]}\\r\\n"`, type: '' },
    { msg: () => `CAN1: RX 0x18F  [${randHex(6)}]`,                          type: '' },
    { msg: () => `EdgeAI: infer 14 ms  label="${['silence','keyword','noise'][Math.floor(Math.random()*3)]}"`, type: 'ok' },
    { msg: () => 'Zigbee: TX packet  RSSI -72 dBm',                           type: '' },
  ];

  function randHex(n) {
    return Array.from({length:n}, ()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0').toUpperCase()).join(' ');
  }
  function addLine(ts, msg, type) {
    const row = document.createElement('div');
    row.className = 'serial-line';
    row.innerHTML = `<span class="serial-ts">[${ts}ms]</span><span class="serial-msg${type?' '+type:''}">${msg}</span>`;
    output.appendChild(row);
    const all = output.querySelectorAll('.serial-line');
    if (all.length > 9) all[0].remove();
  }

  // Play boot sequence, then live messages
  let idx = 0;
  function playBoot() {
    if (idx >= boot.length) { startLive(); return; }
    const m = boot[idx++];
    addLine(m.ts, m.msg, m.type);
    setTimeout(playBoot, 240);
  }
  function startLive() {
    let elapsed = 390;
    function tick() {
      elapsed += Math.floor(Math.random() * 300 + 100);
      const m = live[Math.floor(Math.random() * live.length)];
      addLine(elapsed.toString().padStart(4,'0'), m.msg(), m.type);
      setTimeout(tick, 1400 + Math.random() * 900);
    }
    tick();
  }
  setTimeout(playBoot, 1000);
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

/* ---------- 12. Contact form (mailto fallback) ---------- */
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
