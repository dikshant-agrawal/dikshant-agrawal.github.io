/* ============================================================
   PROJECTS DATA — edit THIS file to manage the projects page.
   No HTML knowledge needed. See PROJECTS_GUIDE.md for details.

   Quick reference:
   - ORDER on the page = order of the blocks in this array.
     To reorder, cut a whole { ... } block and paste it elsewhere.
   - HIDE a project without deleting: set  visible: false
   - ADD a project: copy any block, change the fields.
   - CARD IMAGE: put a file in  assets/project-img/  and set
       image: "myproject.png"
     (the svg field is then ignored). Leave image: "" to use the svg.
   - caseStudy: key of the popup text in assets/case-studies.js
     (set to null if the project has no case study).
   - codeUrl / codeLabel: the GitHub button (label: "Code" or "Files").
   ============================================================ */

const PROJECTS = [
  {
    id: "stm32n6",
    visible: true,
    title: "Neural Network Deployment on STM32N6",
    description: "Deployed a trained MLP neural network (Doom game bot) onto the STM32N6 edge AI MCU. Full pipeline: data collection, PyTorch training with CUDA, int8 quantization, and embedded deployment via STM32Cube AI Studio.",
    tags: ["STM32N6", "PyTorch", "Edge AI", "NPU"],
    meta: [{ label: "mcu", value: "STM32N6" }, { label: "role", value: "team project" }],
    codeUrl: "https://github.com/dikshant-agrawal/Doom_STM32N6",
    codeLabel: "Code",
    caseStudy: "stm32n6",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="85" y="45" width="90" height="65" rx="4" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <text x="130" y="70" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="9"
              font-weight="700">STM32N6</text>
            <text x="130" y="83" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">Edge AI MCU</text>
            <g stroke="#00e5ff" stroke-width="1.5" opacity=".7">
              <line x1="65" y1="58" x2="85" y2="58" />
              <line x1="65" y1="70" x2="85" y2="70" />
              <line x1="65" y1="82" x2="85" y2="82" />
              <line x1="65" y1="94" x2="85" y2="94" />
              <line x1="175" y1="58" x2="195" y2="58" />
              <line x1="175" y1="70" x2="195" y2="70" />
              <line x1="175" y1="82" x2="195" y2="82" />
              <line x1="175" y1="94" x2="195" y2="94" />
            </g>
            <g fill="#00e5ff" opacity=".6">
              <circle cx="30" cy="60" r="4" />
              <circle cx="30" cy="78" r="4" />
              <circle cx="30" cy="96" r="4" />
              <circle cx="50" cy="69" r="4" />
              <circle cx="50" cy="87" r="4" />
            </g>
            <g stroke="#00e5ff" stroke-width="0.7" opacity=".3">
              <line x1="30" y1="60" x2="50" y2="69" />
              <line x1="30" y1="60" x2="50" y2="87" />
              <line x1="30" y1="78" x2="50" y2="69" />
              <line x1="30" y1="78" x2="50" y2="87" />
              <line x1="30" y1="96" x2="50" y2="69" />
              <line x1="30" y1="96" x2="50" y2="87" />
            </g>
            <circle cx="130" cy="100" r="3" fill="#00e5ff">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <text x="130" y="20" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">EDGE AI · STM32N6</text>
            <text x="130" y="140" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">PyTorch · int8 quant · deployed</text>
          </svg>`
  },
  {
    id: "fpga",
    visible: true,
    title: "Nios II Soft-Core Processor on Intel MAX 10",
    description: "Developed a Nios II soft-core processor on the Intel MAX 10 DECA board using Platform Designer. Implemented Verilog hardware modules for LED patterns and integrated custom peripherals with the soft-core CPU.",
    tags: ["FPGA", "Verilog", "Nios II"],
    meta: [{ label: "board", value: "MAX 10 DECA" }, { label: "lang", value: "Verilog / C" }],
    codeUrl: "https://github.com/dikshant-agrawal/nios2-max10-experiments",
    codeLabel: "Code",
    caseStudy: "fpga",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="30" width="140" height="95" rx="4" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <g fill="none" stroke="#00e5ff" stroke-width="1" opacity=".4">
              <rect x="72" y="42" width="18" height="18" rx="1" />
              <rect x="96" y="42" width="18" height="18" rx="1" />
              <rect x="120" y="42" width="18" height="18" rx="1" />
              <rect x="144" y="42" width="18" height="18" rx="1" />
              <rect x="72" y="66" width="18" height="18" rx="1" />
              <rect x="96" y="66" width="18" height="18" rx="1" />
              <rect x="120" y="66" width="18" height="18" rx="1" />
              <rect x="144" y="66" width="18" height="18" rx="1" />
            </g>
            <rect x="96" y="90" width="68" height="24" rx="2" fill="rgba(0,229,255,0.1)" stroke="#00e5ff"
              stroke-width="1.5" />
            <text x="130" y="105" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              font-weight="700">Nios II Core</text>
            <g fill="#00e5ff">
              <circle cx="30" cy="50" r="4">
                <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="65" r="4">
                <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="80" r="4">
                <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" begin="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="95" r="4">
                <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" begin="0.6s" repeatCount="indefinite" />
              </circle>
            </g>
            <line x1="34" y1="50" x2="60" y2="50" stroke="#00e5ff" stroke-width="1" opacity=".5" />
            <line x1="34" y1="65" x2="60" y2="65" stroke="#00e5ff" stroke-width="1" opacity=".5" />
            <line x1="34" y1="80" x2="60" y2="80" stroke="#00e5ff" stroke-width="1" opacity=".5" />
            <line x1="34" y1="95" x2="60" y2="95" stroke="#00e5ff" stroke-width="1" opacity=".5" />
            <text x="130" y="20" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">MAX 10 DECA · FPGA</text>
            <text x="130" y="140" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">Verilog · Nios II · Platform Designer</text>
          </svg>`
  },
  {
    id: "zigbee",
    visible: true,
    title: "XBee Zigbee Driver for Wireless Car",
    description: "Device driver development in embedded C for an XBee Zigbee radio module on PSoC5LP, extending the communication stack for Hochschule Darmstadt's student car remote. Added new state transitions while maintaining backward compatibility.",
    tags: ["C", "PSoC5LP", "Zigbee"],
    meta: [{ label: "mcu", value: "PSoC5LP" }, { label: "lang", value: "C · CI/CD" }],
    codeUrl: "https://github.com/dikshant-agrawal/xbee-zigbee-driver",
    codeLabel: "Code",
    caseStudy: "zigbee",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <!-- PSoC5LP chip -->
            <rect x="30" y="50" width="75" height="60" rx="4" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <text x="67" y="76" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              font-weight="700">PSoC5LP</text>
            <text x="67" y="89" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">CY8C58xx</text>
            <g stroke="#00e5ff" stroke-width="1.2" opacity=".6">
              <line x1="10" y1="63" x2="30" y2="63" />
              <line x1="10" y1="75" x2="30" y2="75" />
              <line x1="10" y1="87" x2="30" y2="87" />
              <line x1="10" y1="99" x2="30" y2="99" />
            </g>
            <!-- Arrow -->
            <line x1="105" y1="80" x2="125" y2="80" stroke="#00e5ff" stroke-width="2" />
            <polygon points="125,76 133,80 125,84" fill="#00e5ff" />
            <!-- XBee module -->
            <rect x="133" y="45" width="95" height="65" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <text x="180" y="70" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="9"
              font-weight="700">XBee</text>
            <text x="180" y="83" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">Zigbee 2.4GHz</text>
            <!-- Antenna -->
            <line x1="200" y1="45" x2="200" y2="25" stroke="#00e5ff" stroke-width="2" />
            <line x1="195" y1="25" x2="215" y2="25" stroke="#00e5ff" stroke-width="2" />
            <!-- Radio waves -->
            <circle cx="215" cy="25" r="6" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".7">
              <animate attributeName="r" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".7;0;.7" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <text x="130" y="20" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="9"
              font-weight="700">XBee DRIVER · PSoC5LP</text>
            <text x="130" y="135" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">Zigbee · CDD · Device Driver · C</text>
          </svg>`
  },
  {
    id: "egas",
    visible: true,
    title: "E-Gas Pedal Control (Drive-by-Wire)",
    description: "Drive-by-wire accelerator pedal on PSoC5LP: ADC pedal acquisition and engine-speed control in an AUTOSAR-style SWC architecture — components communicate only through a generated RTE, scheduled by Erika (OSEK) tasks, with PID analysis in MATLAB.",
    tags: ["C", "AUTOSAR RTE", "Erika RTOS", "Automotive"],
    meta: [{ label: "mcu", value: "PSoC5LP" }, { label: "arch", value: "SWC + RTE" }],
    codeUrl: "https://github.com/dikshant-agrawal/egas-pedal-control",
    codeLabel: "Code",
    caseStudy: "egas",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="105" width="200" height="6" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1" opacity=".6"/><g transform="rotate(-28 70 108)"><rect x="55" y="60" width="30" height="50" rx="5" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.5"/><text x="70" y="88" text-anchor="middle" font-family="monospace" font-size="8" fill="#00e5ff">GAS</text></g><path d="M110 85 h30 m8 0 h30 m8 0 h20" stroke="#00e5ff" stroke-width="1" stroke-dasharray="4 3" opacity=".7"/><rect x="140" y="75" width="22" height="20" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1"/><text x="151" y="88" text-anchor="middle" font-family="monospace" font-size="7" fill="#00e5ff">ADC</text><rect x="178" y="72" width="30" height="26" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1"/><text x="193" y="83" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#00e5ff">RTE</text><text x="193" y="92" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#00e5ff">SWC</text><text x="130" y="35" text-anchor="middle" font-family="monospace" font-size="9" fill="#00e5ff" opacity=".8">E-GAS · DRIVE-BY-WIRE</text><text x="130" y="130" text-anchor="middle" font-family="monospace" font-size="7" fill="#00e5ff" opacity=".5">PEDAL → ADC → RTE → ENGINE PWM</text></svg>`
  },
  {
    id: "eclock",
    visible: true,
    title: "Electronic Clock — RTE Architecture",
    description: "Real-time clock on PSoC5LP built the AUTOSAR way: swc_clock application component over a generated RTE signal layer, OSEK alarms as the time base, display rendering and button time-setting handled by dedicated tasks.",
    tags: ["C", "AUTOSAR RTE", "Erika RTOS", "OSEK"],
    meta: [{ label: "mcu", value: "PSoC5LP" }, { label: "timebase", value: "OSEK alarms" }],
    codeUrl: "https://github.com/dikshant-agrawal/electronic-clock-rte",
    codeLabel: "Code",
    caseStudy: "eclock",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="50" width="150" height="50" rx="6" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.5"/><text x="130" y="84" text-anchor="middle" font-family="monospace" font-size="26" fill="#00e5ff" letter-spacing="2">12:58</text><text x="130" y="34" text-anchor="middle" font-family="monospace" font-size="9" fill="#00e5ff" opacity=".8">ELECTRONIC CLOCK · RTE</text><text x="130" y="122" text-anchor="middle" font-family="monospace" font-size="7" fill="#00e5ff" opacity=".5">OSEK ALARM 1Hz :: swc_clock :: tsk_hmi</text></svg>`
  },
  {
    id: "reaction",
    visible: true,
    title: "Reaction Game on Erika RTOS (PSoC5LP)",
    description: "Device drivers written from scratch in embedded C on PSoC5LP: GPIO driver for button input, PWM driver for LED fade effects, and DWT unit timer driver for sub-millisecond reaction time capture. Running on Erika OSEK task scheduler.",
    tags: ["C", "PSoC5LP", "Erika RTOS", "Device Driver"],
    meta: [{ label: "mcu", value: "PSoC5LP" }, { label: "lang", value: "C · CDD" }],
    codeUrl: "https://github.com/dikshant-agrawal/erikaos-reaction-game",
    codeLabel: "Code",
    caseStudy: "reaction",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="35" width="120" height="65" rx="4" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <text x="130" y="55" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              font-weight="700">PSoC5LP</text>
            <text x="130" y="67" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">Erika OSEK · RTOS</text>
            <rect x="85" y="72" width="90" height="22" rx="2" fill="#02080e" stroke="#00e5ff" stroke-width="1.2" />
            <text x="130" y="82" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7">REACT
              TIME:</text>
            <text x="130" y="91" fill="#00ff80" text-anchor="middle" font-family="JetBrains Mono" font-size="9"
              font-weight="700">212 ms</text>
            <!-- LEDs -->
            <circle cx="85" cy="116" r="7" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="1.5">
              <animate attributeName="fill" values="rgba(0,229,255,0.15);rgba(0,229,255,0.8);rgba(0,229,255,0.15)"
                dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="108" cy="116" r="7" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="131" cy="116" r="7" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="1.5">
              <animate attributeName="fill" values="rgba(0,229,255,0.15);rgba(0,255,80,0.8);rgba(0,229,255,0.15)"
                dur="2.3s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="154" cy="116" r="7" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="177" cy="116" r="7" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="1.5">
              <animate attributeName="fill" values="rgba(0,229,255,0.15);rgba(255,200,0,0.8);rgba(0,229,255,0.15)"
                dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <text x="130" y="18" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">REACTION GAME · RTOS</text>
            <text x="130" y="142" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">PWM drv · GPIO drv · Timer drv · C</text>
          </svg>`
  },
  {
    id: "timing",
    visible: true,
    title: "Timing Analyzer API (PSoC5LP)",
    description: "Configurable timing-measurement API in embedded C on PSoC5LP — DWT cycle-counter, SysTick and output-pin time bases, a start/stop/pause/resume state machine, multiple analyzers in parallel, and single-shot UART reporting.",
    tags: ["C", "PSoC5LP", "Device Driver"],
    meta: [{ label: "mcu", value: "PSoC5LP" }, { label: "res", value: "DWT cycles" }],
    codeUrl: "https://github.com/dikshant-agrawal/timing-analyzer-api",
    codeLabel: "Code",
    caseStudy: "timing",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="220" height="105" rx="4" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <text x="32" y="48" fill="#00e5ff" font-family="JetBrains Mono" font-size="7" opacity=".7">CH1</text>
            <text x="32" y="65" fill="#00e5ff" font-family="JetBrains Mono" font-size="7" opacity=".7">CH2</text>
            <text x="32" y="82" fill="#00e5ff" font-family="JetBrains Mono" font-size="7" opacity=".7">CH3</text>
            <text x="32" y="99" fill="#00e5ff" font-family="JetBrains Mono" font-size="7" opacity=".7">CH4</text>
            <polyline
              points="52,52 62,52 62,43 82,43 82,52 102,52 102,43 122,43 122,52 142,52 142,43 162,43 162,52 182,52 182,43 202,43 202,52 222,52"
              fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <polyline
              points="52,69 72,69 72,60 102,60 102,69 112,69 112,60 132,60 132,69 152,69 152,60 172,60 172,69 222,69"
              fill="none" stroke="rgba(0,255,160,0.8)" stroke-width="1.5" />
            <polyline points="52,86 92,86 92,77 102,77 102,86 192,86 192,77 202,77 202,86 222,86" fill="none"
              stroke="rgba(255,200,0,0.7)" stroke-width="1.5" />
            <polyline points="52,103 122,103 122,94 132,94 132,103 222,103" fill="none" stroke="rgba(255,100,100,0.7)"
              stroke-width="1.5" />
            <line x1="102" y1="35" x2="102" y2="115" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="3 2"
              opacity=".4" />
            <line x1="132" y1="35" x2="132" y2="115" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="3 2"
              opacity=".4" />
            <text x="117" y="120" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6"
              opacity=".7">&#x0394;t = 4.2&#xB5;s</text>
            <text x="130" y="20" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">TIMING ANALYZER · PSoC5LP</text>
          </svg>`
  },
  {
    id: "json",
    visible: true,
    title: "JSON Parser in C",
    description: "A JSON command parser in C built on the jsmn tokenizer — parses drawing commands on-device and feeds a TFT drawing engine through a message queue on PSoC5LP.",
    tags: ["C", "Parser", "STL"],
    meta: [{ label: "lang", value: "C" }, { label: "method", value: "recursive descent" }],
    codeUrl: "https://github.com/dikshant-agrawal/embedded-json-tft-drawer",
    codeLabel: "Code",
    caseStudy: "json",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="220" height="125" rx="5" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <rect x="20" y="15" width="220" height="16" rx="5" fill="rgba(0,229,255,0.08)" />
            <circle cx="35" cy="23" r="3" fill="#ff5f56" />
            <circle cx="47" cy="23" r="3" fill="#ffbd2e" />
            <circle cx="59" cy="23" r="3" fill="#27c93f" />
            <text x="148" y="26" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">parser.c</text>
            <text x="34" y="46" fill="rgba(0,229,255,0.5)" font-family="JetBrains Mono" font-size="8">&#x7B;</text>
            <text x="46" y="46" fill="rgba(255,200,100,0.85)" font-family="JetBrains Mono" font-size="8">"sensor"</text>
            <text x="108" y="46" fill="rgba(255,255,255,0.7)" font-family="JetBrains Mono" font-size="8">:</text>
            <text x="118" y="46" fill="rgba(0,255,160,0.85)" font-family="JetBrains Mono" font-size="8">"DHT22"</text>
            <text x="34" y="60" fill="rgba(255,200,100,0.85)" font-family="JetBrains Mono" font-size="8"> "temp"</text>
            <text x="90" y="60" fill="rgba(255,255,255,0.7)" font-family="JetBrains Mono" font-size="8">:</text>
            <text x="100" y="60" fill="rgba(100,200,255,0.9)" font-family="JetBrains Mono" font-size="8">24.6</text>
            <text x="34" y="74" fill="rgba(255,200,100,0.85)" font-family="JetBrains Mono" font-size="8"> "unit"</text>
            <text x="88" y="74" fill="rgba(255,255,255,0.7)" font-family="JetBrains Mono" font-size="8">:</text>
            <text x="98" y="74" fill="rgba(0,255,160,0.85)" font-family="JetBrains Mono" font-size="8">"celsius"</text>
            <text x="34" y="88" fill="rgba(255,200,100,0.85)" font-family="JetBrains Mono" font-size="8"> "valid"</text>
            <text x="91" y="88" fill="rgba(255,255,255,0.7)" font-family="JetBrains Mono" font-size="8">:</text>
            <text x="101" y="88" fill="rgba(100,150,255,0.9)" font-family="JetBrains Mono" font-size="8">true</text>
            <text x="34" y="102" fill="rgba(0,229,255,0.5)" font-family="JetBrains Mono" font-size="8">&#x7D;</text>
            <rect x="46" y="38" width="62" height="11" rx="1" fill="rgba(255,200,100,0.1)"
              stroke="rgba(255,200,100,0.4)" stroke-width="0.8" />
            <text x="34" y="120" fill="rgba(0,255,160,0.6)" font-family="JetBrains Mono" font-size="7">TOKEN: STRING
              &#x2192; VALUE: "DHT22"</text>
            <rect x="27" y="127" width="6" height="8" fill="#00e5ff" opacity=".8">
              <animate attributeName="opacity" values=".8;0;.8" dur="0.9s" repeatCount="indefinite" />
            </rect>
          </svg>`
  },
  {
    id: "arcadian",
    visible: true,
    title: "Arcadian Lights",
    description: "Knight-Rider-style LED fading and RGB glow effects in C on Erika RTOS — table-driven and fully non-blocking alongside the main application.",
    tags: ["C", "OOP", "Game Loop"],
    meta: [{ label: "lang", value: "C" }, { label: "engine", value: "table-driven FX" }],
    codeUrl: "https://github.com/dikshant-agrawal/erikaos-reaction-game",
    codeLabel: "Code",
    caseStudy: "arcadian",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="20" width="210" height="115" rx="5" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <rect x="25" y="20" width="210" height="16" rx="5" fill="rgba(0,229,255,0.08)" />
            <circle cx="40" cy="28" r="3" fill="#ff5f56" />
            <circle cx="52" cy="28" r="3" fill="#ffbd2e" />
            <circle cx="64" cy="28" r="3" fill="#27c93f" />
            <text x="145" y="31" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">arcadian.c</text>
            <text x="38" y="52" fill="rgba(0,229,255,0.3)" font-family="JetBrains Mono" font-size="8">. . . . . . . . .
              . . . . . .</text>
            <text x="38" y="64" fill="rgba(0,229,255,0.3)" font-family="JetBrains Mono" font-size="8">. . . &#x2588;
              &#x2588; . . &#x2588; &#x2588; . . . . .</text>
            <text x="38" y="76" fill="rgba(0,255,160,0.8)" font-family="JetBrains Mono" font-size="8">. &#x2588; .
              &#x2588; &#x2588; . &#x2588; &#x2588; &#x2588; . &#x2588; . . .</text>
            <text x="38" y="88" fill="rgba(0,229,255,0.3)" font-family="JetBrains Mono" font-size="8">. . . . . . . . .
              . . . . . .</text>
            <text x="38" y="100" fill="rgba(0,229,255,0.5)" font-family="JetBrains Mono" font-size="8">. . . . . .
              &#x25BC; . . . . . . . .</text>
            <text x="38" y="116" fill="rgba(0,229,255,0.4)" font-family="JetBrains Mono" font-size="7">SCORE: </text>
            <text x="86" y="116" fill="#00ff80" font-family="JetBrains Mono" font-size="7">04820</text>
            <text x="140" y="116" fill="rgba(0,229,255,0.4)" font-family="JetBrains Mono" font-size="7">LIVES:
              &#x2665;&#x2665;&#x2665;</text>
            <rect x="38" y="124" width="6" height="9" fill="#00e5ff" opacity=".8">
              <animate attributeName="opacity" values=".8;0;.8" dur="1s" repeatCount="indefinite" />
            </rect>
          </svg>`
  },
  {
    id: "reversi",
    visible: true,
    title: "Reversi (Othello) in C++",
    description: "Full Reversi implementation in C++ in the terminal — legal move generation in all 8 directions, automatic disc flipping, and skip-turn handling. Clean OOP separation of ReversiBoard and ReversiConsoleView.",
    tags: ["C++", "OOP", "Console UI"],
    meta: [{ label: "lang", value: "C++ / OOP" }, { label: "mode", value: "2-player" }],
    codeUrl: "https://github.com/dikshant-agrawal/reversi-cpp",
    codeLabel: "Code",
    caseStudy: "reversi",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="15" width="160" height="125" rx="3" fill="#061020" stroke="#00e5ff" stroke-width="1.5" />
            <g stroke="rgba(0,229,255,0.2)" stroke-width="0.8">
              <line x1="50" y1="35" x2="210" y2="35" />
              <line x1="50" y1="56" x2="210" y2="56" />
              <line x1="50" y1="77" x2="210" y2="77" />
              <line x1="50" y1="98" x2="210" y2="98" />
              <line x1="50" y1="119" x2="210" y2="119" />
              <line x1="76" y1="15" x2="76" y2="140" />
              <line x1="103" y1="15" x2="103" y2="140" />
              <line x1="130" y1="15" x2="130" y2="140" />
              <line x1="157" y1="15" x2="157" y2="140" />
              <line x1="184" y1="15" x2="184" y2="140" />
            </g>
            <circle cx="116" cy="67" r="9" fill="#04060f" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="143" cy="46" r="9" fill="#04060f" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="90" cy="88" r="9" fill="#04060f" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="143" cy="67" r="9" fill="rgba(0,229,255,0.85)" stroke="#00e5ff" stroke-width="1" />
            <circle cx="116" cy="46" r="9" fill="rgba(0,229,255,0.85)" stroke="#00e5ff" stroke-width="1" />
            <circle cx="170" cy="88" r="9" fill="rgba(0,229,255,0.85)" stroke="#00e5ff" stroke-width="1" />
            <ellipse cx="90" cy="109" rx="9" ry="9" fill="#04060f" stroke="#00e5ff" stroke-width="1.5">
              <animate attributeName="rx" values="9;1;9" dur="2s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#04060f;rgba(0,229,255,0.85);#04060f" dur="2s"
                repeatCount="indefinite" />
            </ellipse>
            <rect x="50" y="128" width="160" height="12" rx="2" fill="rgba(0,0,0,0.4)" />
            <text x="90" y="138" fill="rgba(0,229,255,0.6)" text-anchor="middle" font-family="JetBrains Mono"
              font-size="7">&#x25CF; 4</text>
            <text x="170" y="138" fill="rgba(0,229,255,0.9)" text-anchor="middle" font-family="JetBrains Mono"
              font-size="7">&#x25CF; 6</text>
          </svg>`
  },
  {
    id: "battleship",
    visible: true,
    title: "Battleship in C++",
    description: "Object-oriented Battleship game model in C++ — ship placement validation, hit/miss/sunk resolution, and a dual-grid console view. Built around GridPosition, Ship, OwnGrid and OpponentGrid classes with a 3-part test suite.",
    tags: ["C++", "OOP", "STL", "Unit Tests"],
    meta: [{ label: "lang", value: "C++ / OOP" }, { label: "tests", value: "3-part suite" }],
    codeUrl: "https://github.com/dikshant-agrawal/battleship-cpp",
    codeLabel: "Code",
    caseStudy: "battleship",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <text x="65" y="14" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">YOURS</text>
            <text x="195" y="14" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">ENEMY</text>
            <rect x="25" y="18" width="80" height="80" rx="2" fill="#061020" stroke="rgba(0,229,255,0.4)"
              stroke-width="1" />
            <g stroke="rgba(0,229,255,0.15)" stroke-width="0.7">
              <line x1="25" y1="34" x2="105" y2="34" />
              <line x1="25" y1="50" x2="105" y2="50" />
              <line x1="25" y1="66" x2="105" y2="66" />
              <line x1="25" y1="82" x2="105" y2="82" />
              <line x1="41" y1="18" x2="41" y2="98" />
              <line x1="57" y1="18" x2="57" y2="98" />
              <line x1="73" y1="18" x2="73" y2="98" />
              <line x1="89" y1="18" x2="89" y2="98" />
            </g>
            <rect x="27" y="20" width="44" height="12" rx="1" fill="rgba(0,229,255,0.2)" stroke="#00e5ff"
              stroke-width="1" />
            <rect x="59" y="52" width="12" height="44" rx="1" fill="rgba(0,229,255,0.2)" stroke="#00e5ff"
              stroke-width="1" />
            <text x="33" y="48" fill="rgba(255,80,80,0.9)" font-family="JetBrains Mono" font-size="9"
              font-weight="700">&#x2715;</text>
            <text x="49" y="32" fill="rgba(255,80,80,0.9)" font-family="JetBrains Mono" font-size="9"
              font-weight="700">&#x2715;</text>
            <rect x="155" y="18" width="80" height="80" rx="2" fill="#061020" stroke="rgba(0,229,255,0.4)"
              stroke-width="1" />
            <g stroke="rgba(0,229,255,0.15)" stroke-width="0.7">
              <line x1="155" y1="34" x2="235" y2="34" />
              <line x1="155" y1="50" x2="235" y2="50" />
              <line x1="155" y1="66" x2="235" y2="66" />
              <line x1="155" y1="82" x2="235" y2="82" />
              <line x1="171" y1="18" x2="171" y2="98" />
              <line x1="187" y1="18" x2="187" y2="98" />
              <line x1="203" y1="18" x2="203" y2="98" />
              <line x1="219" y1="18" x2="219" y2="98" />
            </g>
            <circle cx="163" cy="43" r="3" fill="none" stroke="rgba(0,229,255,0.5)" stroke-width="1.2" />
            <circle cx="195" cy="27" r="3" fill="none" stroke="rgba(0,229,255,0.5)" stroke-width="1.2" />
            <circle cx="179" cy="75" r="3" fill="none" stroke="rgba(0,229,255,0.5)" stroke-width="1.2" />
            <text x="209" y="60" fill="rgba(255,80,80,0.9)" font-family="JetBrains Mono" font-size="9"
              font-weight="700">&#x2715;</text>
            <circle cx="211" cy="55" r="8" fill="none" stroke="rgba(255,80,80,0.6)" stroke-width="1.5">
              <animate attributeName="r" values="4;12;4" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <text x="130" y="112" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              font-weight="700">HIT!</text>
            <text x="130" y="125" fill="rgba(0,229,255,0.5)" text-anchor="middle" font-family="JetBrains Mono"
              font-size="7">TURN 7 · SHIPS: 3 / 3</text>
            <text x="130" y="142" fill="rgba(0,229,255,0.35)" text-anchor="middle" font-family="JetBrains Mono"
              font-size="6">C++ · OOP · TESTED</text>
          </svg>`
  },
  {
    id: "bandpass",
    visible: true,
    title: "4th-Order Bandpass Amplifier PCB",
    description: "Schematic capture and PCB layout of a 4th-order active bandpass amplifier (two cascaded OPA340 stages, A=100 and A=3). Designed on a 4-layer Arduino UNO shield template in KiCad — power derived from FreeSoc2, THT components, with RGB status LEDs and push-button.",
    tags: ["KiCad", "PCB", "Analog", "Sallen-Key"],
    meta: [{ label: "tool", value: "KiCad" }, { label: "layers", value: "4-layer THT" }],
    codeUrl: "https://github.com/dikshant-agrawal/bandpass-amplifier-pcb",
    codeLabel: "Files",
    caseStudy: "bandpass",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <!-- PCB board outline (Arduino shield shape) -->
            <rect x="18" y="20" width="224" height="118" rx="4" fill="#061a0e" stroke="#00e5ff" stroke-width="1.8" />
            <!-- PCB traces (horizontal) -->
            <g stroke="rgba(0,229,255,0.25)" stroke-width="1.2" fill="none">
              <line x1="18" y1="55" x2="242" y2="55" />
              <line x1="18" y1="95" x2="242" y2="95" />
            </g>
            <!-- Stage 1: OPA340 op-amp triangle -->
            <polygon points="55,60 55,85 80,72" fill="rgba(0,229,255,0.08)" stroke="#00e5ff" stroke-width="1.5" />
            <text x="60" y="70" fill="#00e5ff" font-family="JetBrains Mono" font-size="6" opacity=".8">OPA</text>
            <text x="58" y="79" fill="#00e5ff" font-family="JetBrains Mono" font-size="6" opacity=".8">340</text>
            <!-- Stage 1 label -->
            <text x="67" y="48" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6"
              opacity=".7">A=100</text>
            <!-- Stage 2: OPA340 op-amp triangle -->
            <polygon points="155,60 155,85 180,72" fill="rgba(0,229,255,0.08)" stroke="#00e5ff" stroke-width="1.5" />
            <text x="160" y="70" fill="#00e5ff" font-family="JetBrains Mono" font-size="6" opacity=".8">OPA</text>
            <text x="158" y="79" fill="#00e5ff" font-family="JetBrains Mono" font-size="6" opacity=".8">340</text>
            <text x="167" y="48" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6"
              opacity=".7">A=3</text>
            <!-- VIN -->
            <text x="25" y="70" fill="#00e5ff" font-family="JetBrains Mono" font-size="7" opacity=".8">V_IN</text>
            <line x1="42" y1="72" x2="55" y2="72" stroke="#00e5ff" stroke-width="1.2" />
            <!-- Inter-stage connection -->
            <line x1="80" y1="72" x2="155" y2="72" stroke="#00e5ff" stroke-width="1.2" />
            <!-- Capacitors inter-stage -->
            <line x1="110" y1="68" x2="110" y2="76" stroke="#00e5ff" stroke-width="1.8" />
            <line x1="115" y1="68" x2="115" y2="76" stroke="#00e5ff" stroke-width="1.8" />
            <text x="112" y="85" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="5"
              opacity=".6">4.7&#xB5;</text>
            <!-- VOUT -->
            <line x1="180" y1="72" x2="220" y2="72" stroke="#00e5ff" stroke-width="1.2" />
            <text x="224" y="75" fill="#00ff80" font-family="JetBrains Mono" font-size="7" font-weight="700">OUT</text>
            <!-- Feedback components R4, R6 -->
            <rect x="58" y="95" width="18" height="7" rx="1" fill="none" stroke="#00e5ff" stroke-width="1" />
            <text x="67" y="112" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="5"
              opacity=".6">R4=220k</text>
            <rect x="158" y="95" width="18" height="7" rx="1" fill="none" stroke="#00e5ff" stroke-width="1" />
            <text x="167" y="112" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="5"
              opacity=".6">R6=100k</text>
            <!-- LEDs row -->
            <circle cx="30" cy="128" r="4" fill="rgba(255,50,50,0.7)" stroke="#ff3232" stroke-width="1" />
            <circle cx="48" cy="128" r="4" fill="rgba(255,200,0,0.7)" stroke="#ffc800" stroke-width="1" />
            <circle cx="66" cy="128" r="4" fill="rgba(0,255,100,0.7)" stroke="#00ff64" stroke-width="1" />
            <!-- KiCad label -->
            <text x="160" y="132" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">KiCad · 4-layer PCB</text>
            <text x="130" y="16" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">4th ORDER BANDPASS · PCB</text>
          </svg>`
  },
  {
    id: "healthcare",
    visible: true,
    title: "Point-of-Care Healthcare Device",
    description: "Firmware for a low-cost diagnostic device built at IIT Indore DRISHTI CPS Foundation. Deployed to rural clinics — the innovation has <span class=\"accent\">saved lives</span> while cutting diagnostic cost.",
    tags: ["C", "Medical", "STM32", "SPI/I&#xB2;C"],
    meta: [{ label: "role", value: "embedded eng." }, { label: "impact", value: "high · deployed" }],
    codeUrl: "https://github.com/dikshant-agrawal",
    codeLabel: "Code",
    caseStudy: "healthcare",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="200" height="70" rx="6" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <rect x="40" y="55" width="110" height="40" rx="3" fill="#02080e" stroke="#00e5ff" stroke-width="1" />
            <path d="M45 75 L 60 75 L 65 60 L 70 90 L 75 50 L 80 75 L 100 75 L 105 65 L 115 85 L 120 75 L 145 75"
              stroke="#00e5ff" stroke-width="1.8" fill="none" filter="drop-shadow(0 0 3px #00e5ff)">
              <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2.5s" repeatCount="indefinite" />
            </path>
            <circle cx="175" cy="75" r="10" fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <circle cx="205" cy="75" r="10" fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <text x="175" y="79" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="8">&#x25B6;</text>
            <text x="205" y="79" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="8">&#x25A0;</text>
            <text x="130" y="30" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">POINT-OF-CARE</text>
            <text x="130" y="130" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">72 BPM · SpO&#x2082; 98%</text>
          </svg>`
  },
  {
    id: "carrycot",
    visible: true,
    title: "Smart Carrycot — Infant Monitoring System",
    description: "B.Tech major project: IoT-enabled smart carrycot with real-time infant monitoring — temperature, heart rate, and motion (IMU) sensors connected via ESP32, with BLE/WiFi alerts to a parent dashboard.",
    tags: ["C", "ESP32", "IoT", "B.Tech"],
    meta: [{ label: "role", value: "lead" }, { label: "mcu", value: "ESP32" }],
    codeUrl: "https://github.com/dikshant-agrawal",
    codeLabel: "Code",
    caseStudy: "carrycot",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90 Q 50 60 130 55 Q 210 60 210 90 L 220 115 L 40 115 Z" fill="#0a1a2a" stroke="#00e5ff"
              stroke-width="2" />
            <circle cx="90" cy="85" r="6" fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <text x="90" y="89" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6">T</text>
            <circle cx="130" cy="78" r="6" fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <text x="130" y="82" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="6">IMU</text>
            <circle cx="170" cy="85" r="6" fill="none" stroke="#00e5ff" stroke-width="1.5" />
            <text x="170" y="89" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="6">HR</text>
            <path d="M195 55 Q 210 40 225 55" stroke="#00e5ff" stroke-width="1.2" fill="none" opacity=".7">
              <animate attributeName="opacity" values=".7;0.2;.7" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M190 50 Q 210 30 230 50" stroke="#00e5ff" stroke-width="1" fill="none" opacity=".4">
              <animate attributeName="opacity" values=".4;0.1;.4" dur="1.5s" repeatCount="indefinite" />
            </path>
            <rect x="90" y="20" width="80" height="25" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.5" />
            <text x="130" y="30" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              font-weight="700">ESP32 + Sensors</text>
            <text x="130" y="40" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6"
              opacity=".7">BLE · WiFi</text>
            <text x="130" y="140" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">Smart Carrycot · B.Tech Major</text>
          </svg>`
  },
  {
    id: "energy",
    visible: true,
    title: "Wireless Energy-Monitoring Boards",
    description: "Hands-on teaching kits for Scientech Technologies combining LoRa / BLE / Zigbee radios with real-time energy metering, deployed at universities across India.",
    tags: ["C", "LoRa", "Energy"],
    meta: [{ label: "role", value: "R&amp;D engineer" }, { label: "users", value: "50+ colleges" }],
    codeUrl: "https://github.com/dikshant-agrawal",
    codeLabel: "Code",
    caseStudy: "energy",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="200" height="80" rx="5" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <rect x="70" y="65" width="50" height="30" rx="2" fill="#02080e" stroke="#00e5ff" stroke-width="1" />
            <text x="95" y="84" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="8">LoRa</text>
            <path d="M95 65 q0 -15 20 -15" stroke="#00e5ff" stroke-width="1.5" fill="none" />
            <circle cx="115" cy="50" r="2" fill="#00e5ff" />
            <rect x="140" y="65" width="70" height="30" rx="2" fill="#02080e" stroke="#00e5ff" stroke-width="1" />
            <text x="175" y="79" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="9">3.14</text>
            <text x="175" y="90" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">kWh</text>
            <path d="M115 45 Q 130 25 145 45" stroke="#00e5ff" stroke-width="1.2" fill="none" opacity=".6" />
            <path d="M110 45 Q 130 15 150 45" stroke="#00e5ff" stroke-width="1" fill="none" opacity=".4" />
            <g fill="#00e5ff">
              <circle cx="50" cy="105" r="2" />
              <circle cx="60" cy="105" r="2" />
              <circle cx="70" cy="105" r="2" />
              <circle cx="80" cy="105" r="2" />
            </g>
            <text x="130" y="30" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">WIRELESS + ENERGY KIT</text>
          </svg>`
  },
  {
    id: "weighing",
    visible: true,
    title: "IoT Smart Weighing Machine",
    description: "Smart weighing system with real-time IoT connectivity via MQTT, deployed for a waste management team to track hotel waste output. Weight readings from HX711 load cell stream live to an IoT dashboard for analytics.",
    tags: ["C", "IoT", "MQTT", "HX711"],
    meta: [{ label: "mcu", value: "ESP32" }, { label: "protocol", value: "MQTT" }],
    codeUrl: "https://github.com/dikshant-agrawal",
    codeLabel: "Code",
    caseStudy: "weighing",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="85" width="120" height="12" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="2" />
            <rect x="110" y="97" width="40" height="20" rx="2" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.5" />
            <rect x="80" y="50" width="100" height="30" rx="3" fill="#02080e" stroke="#00e5ff" stroke-width="1.5" />
            <text x="130" y="63" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">24.6 kg</text>
            <text x="130" y="75" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">WASTE LOAD</text>
            <path d="M190 60 Q205 45 220 60" stroke="#00e5ff" stroke-width="1.2" fill="none" opacity=".8">
              <animate attributeName="opacity" values=".8;0.2;.8" dur="1.4s" repeatCount="indefinite" />
            </path>
            <path d="M185 55 Q205 35 225 55" stroke="#00e5ff" stroke-width="1" fill="none" opacity=".5">
              <animate attributeName="opacity" values=".5;0.1;.5" dur="1.4s" repeatCount="indefinite" />
            </path>
            <text x="207" y="35" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".7">MQTT</text>
            <rect x="185" y="90" width="55" height="30" rx="3" fill="#0a1a2a" stroke="#00e5ff" stroke-width="1.2" />
            <text x="212" y="103" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="6">IoT</text>
            <text x="212" y="113" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="6"
              opacity=".7">Dashboard</text>
            <text x="130" y="20" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">IoT WEIGHING MACHINE</text>
            <text x="130" y="140" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">MQTT · WiFi · Waste Management</text>
          </svg>`
  },
  {
    id: "buck",
    visible: true,
    title: "DC-DC Buck Converter Design",
    description: "Hardware design of a DC-DC buck converter during bachelor's internship at Einfochips (an Arrow company). Focused on efficiency targets, EMI compliance, thermal design, and schematic review in KiCad.",
    tags: ["PCB", "Power Electronics", "KiCad"],
    meta: [{ label: "role", value: "HW intern · B.Tech" }, { label: "&#x3B7;", value: "92%" }],
    codeUrl: "https://github.com/dikshant-agrawal",
    codeLabel: "Files",
    caseStudy: "buck",
    image: "",
    svg: `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="50" width="60" height="50" rx="3" fill="none" stroke="#00e5ff" stroke-width="2" />
            <text x="50" y="78" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="11">V_IN</text>
            <text x="50" y="92" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">28V</text>
            <rect x="180" y="50" width="60" height="50" rx="3" fill="none" stroke="#00e5ff" stroke-width="2" />
            <text x="210" y="78" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono"
              font-size="11">V_OUT</text>
            <text x="210" y="92" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="7"
              opacity=".6">5V · 3A</text>
            <line x1="80" y1="75" x2="105" y2="75" stroke="#00e5ff" stroke-width="1.5" />
            <path d="M105 75 q5 -12 10 0 q5 -12 10 0 q5 -12 10 0 q5 -12 10 0" stroke="#00e5ff" stroke-width="1.8"
              fill="none" />
            <line x1="145" y1="75" x2="180" y2="75" stroke="#00e5ff" stroke-width="1.5" />
            <line x1="120" y1="65" x2="120" y2="85" stroke="#00e5ff" stroke-width="2" />
            <line x1="126" y1="65" x2="126" y2="85" stroke="#00e5ff" stroke-width="2" />
            <line x1="155" y1="85" x2="155" y2="110" stroke="#00e5ff" stroke-width="1.5" />
            <line x1="145" y1="110" x2="165" y2="110" stroke="#00e5ff" stroke-width="2" />
            <line x1="148" y1="115" x2="162" y2="115" stroke="#00e5ff" stroke-width="1.5" />
            <line x1="152" y1="120" x2="158" y2="120" stroke="#00e5ff" stroke-width="1" />
            <text x="130" y="30" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="10"
              font-weight="700">BUCK CONVERTER</text>
            <text x="130" y="140" fill="#00e5ff" text-anchor="middle" font-family="JetBrains Mono" font-size="8"
              opacity=".7">DC · DC · &#x3B7; 92%</text>
          </svg>`
  }
];

/* ------------------------------------------------------------
   MORE REPOS — the small buttons near the bottom of the page.
   Same rules: order = order here, visible: false hides one.
   ------------------------------------------------------------ */
const MORE_REPOS = [
  { visible: true, label: "tictactoe-cpp — unbeatable AI", url: "https://github.com/dikshant-agrawal/tictactoe-cpp" },
  { visible: true, label: "student-database-cpp", url: "https://github.com/dikshant-agrawal/student-database-cpp" },
  { visible: true, label: "uart-can-gateway — ISR ring buffers", url: "https://github.com/dikshant-agrawal/uart-can-gateway" },
  { visible: true, label: "modulo-counter-cpp", url: "https://github.com/dikshant-agrawal/modulo-counter-cpp" }
];
