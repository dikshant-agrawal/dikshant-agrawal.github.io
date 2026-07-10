/* ============================================================
   HOME PAGE DATA — edit THIS file, not index.html / script.js.
   ============================================================ */

/* Stat tiles under the hero. Order = order here; visible: false hides one. */
const STATS = [
  { visible: true, val: "3+",    key: "years.industry" },
  { visible: true, val: "5+",    key: "mcu.platforms" },
  { visible: true, val: "20+",   key: "featured.projects" },
  { visible: true, val: "M.Sc.", key: "current.degree(on-going)" }
];

/* SKILL.MONITOR panel bars. width: 0-100 (%), val: small right-hand label. */
const SKILLS_MONITOR = [
  { visible: true, name: "C",            width: 92, val: "core" },
  { visible: true, name: "C++",          width: 78, val: "proficient" },
  { visible: true, name: "RTOS",         width: 85, val: "proficient" },
  { visible: true, name: "ARM Cortex-M", width: 88, val: "core" },
  { visible: true, name: "CAN / UART",   width: 80, val: "proficient" },
  { visible: true, name: "Python",       width: 65, val: "scripting" },
  { visible: true, name: "Edge AI",      width: 55, val: "growing" },
  { visible: true, name: "PCB Design",   width: 72, val: "proficient" }
];

/* Hero terminal typewriter. prompt lines type slower; plain lines are answers. */
const TYPEWRITER_LINES = [
  { prompt: '$', text: 'whoami' },
  { text: 'dikshant.agrawal // embedded systems engineer', className: 'accent' },
  { prompt: '$', text: 'cat ./experience.log' },
  { text: '~4 yrs · IoT · wireless comms · research · AI', className: 'accent' },
  { prompt: '$', text: 'cat ./status.cfg' },
  { text: 'seeking internship · embedded firmware · device drivers', className: 'accent' },
  { prompt: '$', text: '' }
];

/* LOG.VALIDATOR serial panel.
   type: ''=blue system noise · 'ok'=green check · 'data'=white CV facts.
   null entries insert a random noise line. */
const SERIAL_SEQUENCE = [
  { msg: 'LOG.VALIDATOR — boot',                    type: '' },
  { msg: 'RTOS: scheduler verified',                type: 'ok' },
  { msg: 'DRV: device driver stack OK',             type: 'ok' },
  null,
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
  { msg: 'MCU: ARM · PSoC · ESP · Nordic',          type: 'data' },
  null,
  { msg: 'ENGLISH: professional · GERMAN: A2',      type: 'data' },
  null,
  { msg: 'SEEKING: firmware internship · DE',       type: 'data' },
  { msg: 'LOG.VALIDATOR: all checks passed ✓',      type: 'ok' }
];

const SERIAL_NOISE = [
  { msg: 'CAN1: TX 0x2A1 DLC=8 nominal', type: '' },
  { msg: 'I2C1: ACK @ 0x48 TMP102 OK',   type: '' },
  { msg: 'RTOS: tick 1000Hz nominal',    type: '' },
  { msg: 'WDT: kick counter reset',      type: '' },
  { msg: 'UART0: RX buffer clear',       type: '' },
  { msg: 'DMA: stream 0 transfer OK',    type: '' },
  { msg: 'ADC1: VREF 3.30V nominal',     type: '' },
  { msg: 'SPI2: CS deassert OK',         type: '' },
  { msg: 'GPIO: IRQ edge detected',      type: '' },
  { msg: 'CLK: PLL locked 168MHz',       type: '' }
];
