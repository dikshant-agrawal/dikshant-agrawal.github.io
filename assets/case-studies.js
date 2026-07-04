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
    reaction: {
      title: 'Reaction Game on Erika RTOS',
      meta: 'RTOS project · Erika (OSEK) · C/C++ · PWM · hardware timers · UART',
      overview: 'A reaction-speed game on a bare-metal target running the Erika (OSEK) RTOS: LEDs fire with PWM fade effects, the player hits a button, and reaction time is captured to the millisecond.',
      goals: ['Exercise OSEK task/event/alarm scheduling on real hardware', 'Capture reaction times with ±1 ms accuracy'],
      approach: [
        'Erika task set: periodic LED-driver and debounce tasks plus an event-triggered measurement task',
        'Hardware-timer PWM fade for smooth LED brightness ramps',
        'High-resolution capture via timer overflow interrupt',
        'UART logging for PC-side analysis; clean separation of HAL, game FSM, and display logic'
      ],
      results: 'Reaction measurements consistent within ±1 ms, validating the real-time accuracy of the scheduler — with clean C++ structure on bare metal.'
    },
    timing: {
      title: 'Timing Analyzer',
      meta: 'Embedded tooling · C/C++ · hardware timers · GPIO ISR · ring buffer · UART',
      overview: 'A software timing analyzer that captures digital signal transitions across 8 channels with microsecond resolution — a lightweight, no-oscilloscope debugging workflow for protocol bring-up.',
      goals: ['1 µs-resolution visibility into signal timing relationships (SPI CS, data lines, IRQs)', 'Human-readable output on any PC terminal'],
      approach: [
        '1 MHz hardware timer tick; per-channel GPIO interrupts record (channel, timestamp, level) into a ring buffer',
        'ChannelRecorder / TimingView classes separate capture from formatting',
        'Post-capture analysis: pulse widths, periods, delta-t between any two channels',
        'Configurable edge trigger; annotated ASCII waveform output over UART at 115200 baud'
      ],
      results: 'Measured SPI clock/MOSI/CS timing with sub-2 µs jitter — a practical debugging tool for resource-constrained targets.'
    },
    json: {
      title: 'JSON Parser in C++',
      meta: 'C++ project · lexer + recursive descent · std::variant · unit tests · zero dependencies',
      overview: 'A fully hand-written JSON parser in modern C++: tokeniser, recursive-descent parser building a typed AST, and a typed accessor API — no external libraries.',
      goals: ['Implement the full JSON spec by hand', 'Design a clean, type-safe access API'],
      approach: [
        'Character-level lexer producing a complete token stream',
        'parse_value() dispatching to object / array / primitive parsers via lookahead',
        'AST hierarchy (JsonObject, JsonArray, JsonString, JsonNumber, JsonBool, JsonNull)',
        'get<T>() accessors using std::variant; errors report line/column; assert-based unit tests incl. escapes and Unicode'
      ],
      results: 'Handles all test vectors including 10+-level nesting and malformed-input edge cases — parsing theory and API design directly transferable to protocol decoders in firmware.'
    },
    arcadian: {
      title: 'Arcadian — C++ Arcade Game',
      meta: 'C++ project · OOP · STL · chrono · ANSI terminal rendering',
      overview: 'A playable terminal arcade game in modern C++ with a real-time game loop, sprite management, collision detection, and persistent scoring.',
      goals: ['Demonstrate inheritance, polymorphism, and STL in a real-time context', 'Keep architecture extensible for new entity types'],
      approach: [
        'Fixed-timestep game loop with frame-rate-independent physics (chrono)',
        'Entity base class; Player / Enemy / Projectile with virtual update()/draw()',
        'AABB collision detection over STL containers',
        'ANSI-escape terminal renderer; high-score persistence via file I/O'
      ],
      results: 'Adding new enemy types became trivial thanks to the class design — a working showcase of software architecture paying off.'
    },
    reversi: {
      title: 'Reversi (Othello) in C++',
      meta: 'C++ project · OOP · game AI · ANSI terminal UI',
      overview: 'A complete Reversi implementation with human-vs-human and human-vs-AI modes; the AI plays a greedy max-flips strategy, extensible to minimax.',
      goals: ['Correct rules enforcement in all 8 directions', 'Clean separation of board logic, game control, and rendering'],
      approach: [
        'Encapsulated Board class over an 8×8 std::array grid',
        'Legal-move generation validating flip chains in every direction; atomic flip execution',
        'GameController for turns, end-game detection, and scoring',
        'AI evaluates all legal moves and maximises discs flipped; ANSI-colour board rendering'
      ],
      results: 'Fully playable game with correct rules and an AI framework designed for drop-in minimax replacement.'
    },
    battleship: {
      title: 'Battleship in C++',
      meta: 'C++ project · OOP · turn-based engine · test suite',
      overview: 'A two-player Battleship engine managing hidden grids, ship placement, shot resolution, and win detection — built with production-style OOP.',
      goals: ['Model the full game domain with encapsulated classes', 'Handle every placement and shot edge case'],
      approach: [
        'Grid (10×10 per-cell state) and Ship (orientation, cells, hit count, sunk()) classes',
        'Placement validation rejecting overlaps and out-of-bounds with clear errors',
        'GameSession orchestrating turns and masked opponent-grid display',
        'Hit/miss/sunk resolution and all-ships-sunk win detection with statistics'
      ],
      results: 'Correctly handles adjacent placement, repeat shots, and last-ship edge cases — class design applicable 1:1 to embedded state machines.'
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
        'Lab exercises and example code for university courses',
        'Bring-up, testing, and documentation through production handover'
      ],
      results: 'Adopted by 50+ engineering colleges across India as standard lab equipment for wireless/IoT courses.'
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
