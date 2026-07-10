/* Case-study modal — content + logic */
(function () {
  const CS = {
    stm32n6: {
      title: 'Neural Network Deployment on STM32N6',
      meta: 'Team project · 2025–2026 · STM32N6 · PyTorch · CUDA · STM32Cube AI · C · int8',
      overview: 'A complete ML-to-embedded pipeline: a multi-layer perceptron trained to play Doom, taken from PyTorch training all the way to on-device inference on the STM32N6 — ST’s first MCU with a dedicated NPU.',
      goals: ['Cover the full edge-AI workflow: data collection → training → quantisation → embedded inference', 'Fit a game-playing agent within MCU flash/RAM budgets'],
      approach: [
        'Data collection pipeline feeding game-state observations into a CUDA-accelerated PyTorch training loop',
        'Multi-head MLP with separate output heads per control action',
        'int8 quantisation via STM32Cube AI Studio for NPU-optimised deployment',
        'Embedded C integration with inference validated against desktop predictions'
      ],
      results: 'Trained agent successfully deployed and playing Doom on the STM32N6 — demonstrating end-to-end competency across ML training, quantisation, and embedded deployment.'
    },
    fpga: {
      title: 'Nios II Soft-Core Processor on Intel MAX 10',
      meta: 'FPGA project · 2025–2026 · Verilog · Nios II · Quartus · Platform Designer · C',
      overview: 'Hardware/software co-design on the Intel MAX 10 DECA board: custom Verilog peripherals integrated with a Nios II soft-core CPU.',
      goals: ['Build RTL modules for LED pattern generation', 'Integrate a soft-core CPU and control the hardware from C firmware'],
      approach: [
        'Verilog modules for configurable LED patterns (shift-register and counter based)',
        'Nios II instantiation and configuration in Intel Platform Designer (Qsys)',
        'Custom Avalon-bus peripheral connecting the CPU to the LED hardware',
        'C firmware on Nios II to select and control patterns at runtime'
      ],
      results: 'Complete HW/SW system synthesised and deployed on the MAX 10 DECA board — demonstrating RTL design, Quartus tool flow, and soft-core co-design.'
    },
    zigbee: {
      title: 'Zigbee Radio Stack for Student Racing Car',
      meta: 'Firmware engineer · Mar 2026–present · Zigbee · CC2538 · AUTOSAR CDD · C · ARM',
      overview: 'The student racing team’s remote control runs on a Zigbee link. The AUTOSAR CDD communication stack needed new control features — without breaking hardware already deployed in the fleet.',
      goals: ['Extend the CDD layer for new remote-control features', 'Preserve full backward compatibility with deployed cars'],
      approach: [
        'Extended the AUTOSAR CDD layer for the CC2538 Zigbee SoC',
        'Redesigned the state machine to add transitions without altering legacy behaviour',
        'Hardened the radio stack for reliability under race conditions',
        'Validated against the existing regression test scenarios on the car platform'
      ],
      results: 'All regression tests passed with zero backward-compatibility breaks — new features shipped to the existing fleet without hardware changes.'
    },
    egas: {
      title: 'E-Gas Pedal Control (Drive-by-Wire)',
      meta: 'Embedded C · Erika RTOS (OSEK) · AUTOSAR-style RTE · PSoC 5LP · MATLAB',
      overview: 'The classic automotive E-Gas concept implemented as a layered real-time system: pedal position sampled via ADC, processed by a software component (swc_egas), and translated into engine-speed control — with all components decoupled through a generated Runtime Environment.',
      goals: ['Build a drive-by-wire pipeline with a clean AUTOSAR-style architecture', 'Keep application components hardware-independent via RTE signals'],
      approach: [
        'swc_egas software component: pedal ADC acquisition + engine speed command with brake interaction',
        'Generated RTE signal layer — SWCs never touch hardware or each other directly',
        'Erika (OSEK) task set: tsk_control, tsk_io, tsk_hmi plus ISRs and ring-buffered messaging',
        'PID evaluation of the engine response in MATLAB against captured motor logs'
      ],
      results: 'Working pedal-to-engine control chain with verified task timing (documented RTE schedule analysis) and a fully decoupled component architecture.'
    },
    eclock: {
      title: 'Electronic Clock — RTE Architecture',
      meta: 'Embedded C · Erika RTOS (OSEK) · AUTOSAR-style RTE · PSoC 5LP',
      overview: 'A real-time clock built with the same architecture discipline as automotive ECUs: application logic in a software component (swc_clock), hardware in a BSW driver, and a generated RTE in between — scheduled by OSEK alarms.',
      goals: ['Accurate timekeeping from an OSEK alarm time base', 'Strict layering: application ↔ RTE ↔ board support'],
      approach: [
        'swc_clock application component owning the clock logic',
        'Dedicated clock BSW driver for the time base',
        'tsk_control / tsk_hmi tasks wiring buttons and display through RTE signals',
        'Time-set interaction and display rendering decoupled from clock logic'
      ],
      results: 'A cleanly layered, running electronic clock demonstrating RTE-based composition on a small target — the same pattern that scales to production ECUs.'
    },
    reaction: {
      title: 'Reaction Game on Erika RTOS',
      meta: 'Erika RTOS (OSEK) · embedded C · PWM · hardware timers · UART',
      overview: 'A reaction-speed game on a bare-metal target running the Erika (OSEK) RTOS: LEDs fire with PWM fade effects, the player hits a button, and reaction time is captured to the millisecond.',
      goals: ['Exercise OSEK task/event/alarm scheduling on real hardware', 'Capture reaction times with ±1 ms accuracy'],
      approach: [
        'Erika task set: periodic LED-driver and debounce tasks plus an event-triggered measurement task',
        'Hardware-timer PWM fade for smooth LED brightness ramps',
        'High-resolution capture via timer overflow interrupt',
        'Score and average-reaction-time tracking on 7-segment displays; clean separation of drivers, game FSM, and display logic in C'
      ],
      results: 'Reaction measurements consistent within ±1 ms, validating the real-time accuracy of the scheduler — with cleanly layered C on bare metal.'
    },
    timing: {
      title: 'Timing Analyzer API',
      meta: 'Embedded C · PSoC 5LP (Cortex-M3) · DWT · SysTick · UART',
      overview: 'A configurable timing-measurement API for bare-metal firmware: measure execution time of code sections using the DWT cycle counter, SysTick, or GPIO pin toggling for oscilloscope verification — a lightweight profiling workflow for resource-constrained targets.',
      goals: ['Cycle-accurate visibility into firmware execution time without an oscilloscope', 'Multiple simultaneous measurements with zero interference between them'],
      approach: [
        'Selectable time bases: DWT cycle counter, SysTick, output-pin toggle — and combinations',
        'Start / Stop / Pause / Resume measurement state machine per analyzer',
        'Multiple analyzers running in parallel, built with object-oriented C (structs + function pointers)',
        'UART reporting assembled first, then sent in a single shot so transmission never distorts the measurement'
      ],
      results: 'Verified against oscilloscope pin-toggle measurements; provides cycle-accurate profiling of firmware sections on PSoC 5LP.'
    },
    json: {
      title: 'JSON Parser + TFT Drawer in C',
      meta: 'Embedded C · jsmn tokenizer · PSoC 5LP · Erika RTOS · UART · TFT',
      overview: 'An on-device JSON processing pipeline in C: drawing commands arrive over UART, are tokenized with jsmn and parsed by a custom layer, then rendered on a TFT display — receive, parse, validate and draw on a resource-constrained microcontroller.',
      goals: ['Parse JSON reliably within tight flash/RAM budgets', 'Decouple message reception from rendering so neither blocks the other'],
      approach: [
        'jsmn-based tokenization with a custom parser layer for the drawing-command schema',
        'Message-queue pipeline between UART reception and the drawing engine',
        'TFT driver and drawing engine rendering the parsed commands',
        'Layered architecture: application over board support over RTOS (Erika/OSEK tasks)'
      ],
      results: 'A working UART-to-display pipeline: JSON sent from a PC terminal is parsed and drawn on the TFT in real time — protocol handling directly applicable to firmware message decoders.'
    },
    arcadian: {
      title: 'Arcadian Light Effects',
      meta: 'Embedded C · Erika RTOS (OSEK) · PWM · PSoC 5LP',
      overview: 'A non-blocking LED light-effect engine in C running alongside the reaction game on Erika RTOS: Knight-Rider-style fading sweeps and an RGB glow engine, all driven from configurable tables.',
      goals: ['Smooth LED animations that never interfere with real-time game timing', 'Effects fully configurable without touching the engine code'],
      approach: [
        'Knight-Rider LED fade sweep using PWM brightness ramps',
        'RGB glow engine driven by configurable effect tables',
        'Fully non-blocking design scheduled as RTOS tasks — no busy waiting',
        'Runs concurrently with the reaction game without affecting its ±1 ms timing'
      ],
      results: 'Smooth, table-driven light effects with zero impact on game timing — demonstrating cooperative real-time design on a shared scheduler.'
    },
    reversi: {
      title: 'Reversi (Othello) in C++',
      meta: 'C++ · OOP · console game · 2-player',
      overview: 'A complete two-player Reversi implementation in C++ for the terminal: full rules enforcement with automatic disc flipping, skip-turn handling, and end-game detection.',
      goals: ['Correct rules enforcement in all 8 directions', 'Clean separation of board logic and rendering'],
      approach: [
        'Encapsulated ReversiBoard class owning the 8×8 grid state',
        'Legal-move generation validating flip chains in every direction; automatic flip execution',
        'Turn loop with skip-turn handling when a player has no valid move, and game-over detection',
        'ReversiConsoleView rendering the board cleanly in the terminal'
      ],
      results: 'Fully playable two-player game with correct rules — a modular design ready for an AI player to be added.'
    },
    battleship: {
      title: 'Battleship in C++',
      meta: 'C++ · OOP · game model · 3-part test suite',
      overview: 'A fully object-oriented Battleship game model in C++: grids, ships, shot resolution and sinking detection, verified by a three-part test suite and visualized in a dual-grid console view.',
      goals: ['Model the full game domain with encapsulated, testable classes', 'Handle every placement and shot edge case'],
      approach: [
        'Immutable GridPosition type; Ship class computing occupied and blocked (8-neighborhood) areas',
        'OwnGrid/OpponentGrid with placement validation via set intersections',
        'Shot resolution with hit/miss/sunk detection via hit-set comparison',
        'ConsoleView rendering both grids side by side; 3-part test suite covering the model'
      ],
      results: 'All model rules verified by the test suite, including blocked-area placement and sinking edge cases — class design applicable 1:1 to embedded state machines.'
    },
    bandpass: {
      title: '4th-Order Bandpass Amplifier PCB',
      meta: 'Hardware design · KiCad · 4-layer PCB · OPA340 ×2 · Gerber fab set',
      overview: 'Full hardware design flow for an analog radar front end: hand calculation, KiCad schematic, 4-layer PCB layout under manufacturing constraints, and a breadboard-verified prototype. Two cascaded OPA340 Sallen-Key stages (high-pass A=100, low-pass A=3).',
      goals: ['Meet the specified 4th-order bandpass response and 3 dB bandwidth', 'Deliver a DRC-clean, fabrication-ready 4-layer layout'],
      approach: [
        'Hand-calculated component values and corner frequencies per stage',
        'KiCad schematic: OPA340 in DIL8, E24 THT resistors, decoupling network, power LED',
        'Arduino-shield-format 4-layer stackup (Signal–GND–Power–Signal) with separated analog/digital grounds',
        'Constraints: 0.20 mm min track, PTH-only vias (0.8/0.4 mm); radar connector, push-button, RGB status LEDs; spec submitted for fabrication'
      ],
      results: 'DRC passed with zero errors; breadboard prototype confirmed the intended 4th-order bandpass response on the oscilloscope.'
    },
    healthcare: {
      title: 'Point-of-Care Healthcare Device',
      meta: 'Embedded systems engineer · 2023–2025 · STM32 · FreeRTOS · SPI/I2C · C',
      overview: 'Affordable, portable diagnostic devices for health workers in rural, resource-limited settings — built for reliability, low power, and use without specialist training.',
      goals: ['Low-cost vital-sign acquisition (heart rate, SpO2, temperature)', 'Immediate clinical decision support at the point of care'],
      approach: [
        'Firmware for vital-sign acquisition using low-cost sensor ICs',
        'FreeRTOS task architecture separating acquisition, display, and communication',
        'SPI/I2C driver stack for sensors and TFT output',
        'Alert and threshold logic for on-the-spot triage'
      ],
      results: 'Deployed to rural clinics across India — cutting diagnostic costs and enabling early detection where hospital access is limited.'
    },
    carrycot: {
      title: 'Smart Carrycot — Infant Monitoring',
      meta: 'Lead developer · 2021–2022 · ESP32 · BLE/WiFi · IMU · vitals sensors · C',
      overview: 'An IoT-enabled carrycot that continuously monitors infant vitals and alerts caregivers wirelessly, addressing undetected distress events in unsupervised infants.',
      goals: ['Continuous multi-sensor monitoring (motion, temperature, heart rate)', 'Low-latency wireless alerts to a caregiver dashboard'],
      approach: [
        'IMU, temperature, and heart-rate sensor integration on ESP32',
        'Real-time acquisition firmware with threshold-based alert logic',
        'BLE + WiFi stack streaming to a parent dashboard',
        'Configurable thresholds for temperature deviation and irregular motion'
      ],
      results: 'Demonstrated continuous monitoring with low-latency BLE alerts; foundation for subsequent IoT health-monitoring work.'
    },
    energy: {
      title: 'Wireless Energy-Monitoring Training Boards',
      meta: 'R&D engineer · 2022–2023 · LoRa · BLE · Zigbee · metering ICs · PCB design',
      overview: 'Educational hardware bridging IoT radios with real power measurement: training boards demonstrating LoRa, BLE, and Zigbee alongside real-time energy metering.',
      goals: ['One platform covering three production radio protocols', 'Curriculum-ready labs with real energy data'],
      approach: [
        'Multi-radio board design integrating LoRa, BLE, and Zigbee modules',
        'Energy-measurement firmware on dedicated metering ICs with UART output',
        'Hands-on exercises and example code for university courses',
        'Bring-up, testing, and documentation through production handover'
      ],
      results: 'Adopted by 50+ engineering colleges across India as standard teaching equipment for wireless/IoT courses.'
    },
    weighing: {
      title: 'IoT Smart Weighing Machine',
      meta: 'Embedded systems engineer · 2023–2025 · ESP32 · MQTT · HX711 load cell · C',
      overview: 'A connected scale for smart waste management: streams weight data in real time to an IoT dashboard so waste managers can track per-site output without manual logging.',
      goals: ['Precise, calibrated weighing at commercial waste sites', 'Real-time multi-site tracking over MQTT'],
      approach: [
        'Load cell + HX711 driver with tare and calibration support',
        'ESP32 firmware publishing weight events over WiFi/MQTT',
        'Per-device topic structure for multi-site fleets',
        'Dashboard integration: live weight, trends, per-site totals'
      ],
      results: 'Deployed across multiple hotel waste sites — eliminated manual recording and delivered actionable sustainability data.'
    },
    buck: {
      title: 'DC-DC Buck Converter Design',
      meta: 'Hardware design intern · 2022 · KiCad · power electronics · EMI',
      overview: 'A synchronous buck converter designed from specification to reviewed schematic, focusing on efficiency, EMI compliance, and thermal management in a fixed form factor.',
      goals: ['Hit the target efficiency within voltage/current/thermal specs', 'Radiated-emission compliance from the start'],
      approach: [
        'Full synchronous-buck schematic capture in KiCad',
        'Component selection against efficiency and thermal envelope',
        'EMI filter design and layout guidelines',
        'Switching-waveform review and efficiency characterisation'
      ],
      results: '≈92% conversion efficiency, meeting spec; design passed internal review.'
    }
  };

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function buildModal() {
    const overlay = el('div', 'cs-overlay');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="cs-modal" role="dialog" aria-modal="true" aria-labelledby="cs-title">' +
      '  <div class="cs-head">' +
      '    <span class="cs-label">// case_study</span>' +
      '    <button class="cs-close" aria-label="Close">&times;</button>' +
      '  </div>' +
      '  <h3 id="cs-title"></h3>' +
      '  <p class="cs-meta"></p>' +
      '  <div class="cs-body"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function section(label, inner) {
    return '<p class="cs-sec">// ' + label + '</p>' + inner;
  }

  function open(key, overlay) {
    const d = CS[key];
    if (!d) return;
    overlay.querySelector('#cs-title').textContent = d.title;
    overlay.querySelector('.cs-meta').textContent = d.meta;
    overlay.querySelector('.cs-body').innerHTML =
      section('overview', '<p>' + d.overview + '</p>') +
      section('goals', '<ul>' + d.goals.map(g => '<li>' + g + '</li>').join('') + '</ul>') +
      section('approach', '<ul>' + d.approach.map(a => '<li>' + a + '</li>').join('') + '</ul>') +
      section('results', '<p>' + d.results + '</p>');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.cs-modal').scrollTop = 0;
  }

  function close(overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[data-cs]');
    if (!links.length) return;
    const overlay = buildModal();
    links.forEach(a => a.addEventListener('click', function (ev) {
      ev.preventDefault();
      open(a.getAttribute('data-cs'), overlay);
    }));
    overlay.addEventListener('click', ev => { if (ev.target === overlay) close(overlay); });
    overlay.querySelector('.cs-close').addEventListener('click', () => close(overlay));
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') close(overlay); });
  });
})();
