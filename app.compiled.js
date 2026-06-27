// ====== STORAGE ADAPTER ======
window.storage = {
  async get(key) {
    const v = localStorage.getItem(key);
    if (v === null) throw new Error('Key not found');
    return {
      key,
      value: v
    };
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return {
      key,
      value
    };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return {
      key,
      deleted: true
    };
  },
  async list(prefix = '') {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) keys.push(k);
    }
    return {
      keys,
      prefix
    };
  }
};
const {
  useState: _useState,
  useEffect: _useEffect,
  useRef: _useRef
} = React;
const useState = _useState;
const useEffect = _useEffect;
const useRef = _useRef;
function Icon({
  size = 20,
  color = 'currentColor',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children);
}
const Search = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const Wrench = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
}));
const FileText = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 9H8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 13H8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 17H8"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
}));
const ChevronLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m15 18-6-6 6-6"
}));
const Save = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 21v-8H7v8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 3v5h8"
}));
const Trash2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17"
}));
const AlertTriangle = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 9v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 17h.01"
}));
const Shield = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}));
const Zap = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
}));
const Key = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 2-9.6 9.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "15.5",
  r: "5.5"
}));
const Camera = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "3"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6 6 12 12"
}));
const Settings = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));
const DollarSign = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
}));
const Phone = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const User = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "7",
  r: "4"
}));
const Hash = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  x2: "20",
  y1: "9",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  x2: "20",
  y1: "15",
  y2: "15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  x2: "8",
  y1: "3",
  y2: "21"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  x2: "14",
  y1: "3",
  y2: "21"
}));
const Calculator = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  x2: "16",
  y1: "6",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  x2: "16",
  y1: "14",
  y2: "18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 14h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 18h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 18h.01"
}));

// ====== VEHICLE DATABASE — US MARKET YEAR RANGES ======
const VEHICLES = [
// ===== BMW (US market) =====
{
  brand: 'BMW',
  model: '3 Series',
  sub: 'E36',
  years: [1992, 1999],
  immo: 'EWS2',
  immoTier: 'classic',
  keyBlank: 'HU58',
  freq: '315 MHz',
  estHours: 0.75,
  tools: ['INPA', 'Lonsdor K518 Pro'],
  software: ['INPA / NCS Expert'],
  obd: 'OBD via K518 or bench EWS2',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'EWS2 — K518 OBD or pull module and bench read.'
}, {
  brand: 'BMW',
  model: '3 Series',
  sub: 'E46',
  years: [1999, 2006],
  immo: 'EWS3',
  immoTier: 'classic',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'Lonsdor K518 Pro', 'CGDI BMW'],
  software: ['INPA / NCS Expert'],
  obd: 'OBD or bench EWS3',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'EWS3 module. CGDI BMW handles OBD cleanly.'
}, {
  brand: 'BMW',
  model: '3 Series',
  sub: 'E90/E91/E92/E93',
  years: [2006, 2013],
  immo: 'CAS3 / CAS3+',
  immoTier: 'cas',
  keyBlank: 'HU92 / HU100R',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'K518 Pro', 'XPROG3'],
  software: ['ISTA via AOS', 'INPA'],
  obd: 'CAS3 OBD Key Match or BDM bench',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS3+ may need ISN from DME for AKL.'
}, {
  brand: 'BMW',
  model: '3 Series',
  sub: 'F30/F31/F34',
  years: [2012, 2018],
  immo: 'CAS4 / CAS4+',
  immoTier: 'cas',
  keyBlank: 'HU100R',
  freq: '434 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS'],
  obd: 'CAS4+ ISN read + Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS4+ requires ISN from CAS EEPROM for AKL.'
}, {
  brand: 'BMW',
  model: '3 Series',
  sub: 'G20/G21',
  years: [2019, 2026],
  immo: 'FEM/BDC (later: BDC)',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS (required)'],
  obd: 'BDC ISN + Key Match via ISTA',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'BDC. AOS recommended for legitimate flash trail.'
}, {
  brand: 'BMW',
  model: '5 Series',
  sub: 'E39',
  years: [1997, 2003],
  immo: 'EWS3',
  immoTier: 'classic',
  keyBlank: 'HU58 / HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'K518 Pro', 'CGDI BMW'],
  software: ['INPA'],
  obd: 'OBD or bench',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'EWS3 — proven flow.'
}, {
  brand: 'BMW',
  model: '5 Series',
  sub: 'E60/E61',
  years: [2004, 2010],
  immo: 'CAS2 / CAS3',
  immoTier: 'cas',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'K518 Pro'],
  software: ['ISTA via AOS', 'INPA'],
  obd: 'OBD Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS2 early, CAS3 later — confirm via VIN.'
}, {
  brand: 'BMW',
  model: '5 Series',
  sub: 'F10/F11',
  years: [2011, 2017],
  immo: 'CAS4 / CAS4+',
  immoTier: 'cas',
  keyBlank: 'HU100R',
  freq: '434 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS'],
  obd: 'CAS4+ ISN + Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS4+ — same as F30 flow.'
}, {
  brand: 'BMW',
  model: '5 Series',
  sub: 'G30/G31',
  years: [2017, 2024],
  immo: 'FEM/BDC',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS (required)'],
  obd: 'BDC Key Match via ISTA',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'AOS recommended for G30.'
}, {
  brand: 'BMW',
  model: '7 Series',
  sub: 'E38',
  years: [1995, 2001],
  immo: 'EWS3',
  immoTier: 'classic',
  keyBlank: 'HU58 / HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'K518 Pro'],
  software: ['INPA'],
  obd: 'OBD or bench',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'EWS3 era. K518 handles it.'
}, {
  brand: 'BMW',
  model: '7 Series',
  sub: 'E65/E66',
  years: [2002, 2008],
  immo: 'CAS1 (often CAS3 internals)',
  immoTier: 'cas',
  keyBlank: 'RK-BM-LX8',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'K518 Pro', 'XPROG3'],
  software: ['ISTA via AOS', 'INPA'],
  obd: 'CAS1 Key Match with engine running',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'Your 750Li. Engine on for 14.4V. CAS1 housing may have CAS3 internals (P/N 9109214).'
}, {
  brand: 'BMW',
  model: '7 Series',
  sub: 'F01/F02',
  years: [2009, 2015],
  immo: 'CAS4 / CAS4+',
  immoTier: 'cas',
  keyBlank: 'HU100R',
  freq: '434 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS'],
  obd: 'CAS4+ ISN + Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS4+ same flow as F30/F10.'
}, {
  brand: 'BMW',
  model: '7 Series',
  sub: 'G11/G12',
  years: [2016, 2022],
  immo: 'FEM/BDC',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS (required)'],
  obd: 'BDC via ISTA',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'AOS recommended for G11/G12.'
}, {
  brand: 'BMW',
  model: 'X3',
  sub: 'E83',
  years: [2004, 2010],
  immo: 'EWS3 (early) / CAS1 (late)',
  immoTier: 'classic',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'K518 Pro', 'CGDI BMW'],
  software: ['INPA'],
  obd: 'OBD or bench',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'EWS3 in GM5 module P/N 61.35 6 963 338.'
}, {
  brand: 'BMW',
  model: 'X3',
  sub: 'F25',
  years: [2011, 2017],
  immo: 'CAS4 / CAS4+',
  immoTier: 'cas',
  keyBlank: 'HU100R',
  freq: '434 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3'],
  software: ['ISTA via AOS'],
  obd: 'CAS4+ ISN + Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'Your F25 bench rig (D-002).'
}, {
  brand: 'BMW',
  model: 'X3',
  sub: 'G01',
  years: [2018, 2026],
  immo: 'BDC',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS (required)'],
  obd: 'BDC Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'AOS strongly recommended.'
}, {
  brand: 'BMW',
  model: 'X5',
  sub: 'E53',
  years: [2000, 2006],
  immo: 'EWS3 / CAS1',
  immoTier: 'classic',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'K518 Pro', 'CGDI BMW'],
  software: ['INPA'],
  obd: 'OBD or bench',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Transition era. Confirm module before quoting.'
}, {
  brand: 'BMW',
  model: 'X5',
  sub: 'E70',
  years: [2007, 2013],
  immo: 'CAS3 / CAS3+',
  immoTier: 'cas',
  keyBlank: 'HU92 / HU100R',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3'],
  software: ['ISTA via AOS', 'INPA'],
  obd: 'CAS3 OBD Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'Solid platform.'
}, {
  brand: 'BMW',
  model: 'X5',
  sub: 'F15',
  years: [2014, 2018],
  immo: 'CAS4+',
  immoTier: 'cas',
  keyBlank: 'HU100R',
  freq: '434 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'XPROG3'],
  software: ['ISTA via AOS'],
  obd: 'CAS4+ ISN + Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'Standard CAS4+ flow.'
}, {
  brand: 'BMW',
  model: 'X5',
  sub: 'G05',
  years: [2019, 2026],
  immo: 'BDC',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS (required)'],
  obd: 'BDC via ISTA',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'AOS required for proper trail.'
},
// ===== MINI (US market) =====
{
  brand: 'MINI',
  model: 'Cooper',
  sub: 'R50/R52/R53',
  years: [2002, 2008],
  immo: 'EWS3',
  immoTier: 'classic',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1,
  tools: ['INPA', 'K518 Pro', 'CGDI BMW'],
  software: ['INPA'],
  obd: 'OBD or bench',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'BMW EWS3. Same flow as E46.'
}, {
  brand: 'MINI',
  model: 'Cooper',
  sub: 'R55/R56/R57',
  years: [2007, 2015],
  immo: 'CAS3',
  immoTier: 'cas',
  keyBlank: 'HU92',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'CGDI BMW', 'K518 Pro'],
  software: ['ISTA via AOS', 'INPA'],
  obd: 'CAS3 OBD Key Match',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'CAS3 BMW flow.'
}, {
  brand: 'MINI',
  model: 'Cooper',
  sub: 'F55/F56',
  years: [2014, 2024],
  immo: 'FEM/BDC',
  immoTier: 'fem',
  keyBlank: 'HU100R smart',
  freq: '434 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'XPROG3', 'Autel MaxiFlash'],
  software: ['ISTA via AOS'],
  obd: 'FEM/BDC via ISTA',
  nastf: false,
  aos: true,
  erwin: false,
  notes: 'BMW FEM/BDC. AOS for newer.'
},
// ===== AUDI (US market — A3 8L Mk1 never sold US) =====
{
  brand: 'Audi',
  model: 'A3',
  sub: '8P (Mk2)',
  years: [2006, 2013],
  immo: 'Immo4',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '315/433 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro', 'CGDI'],
  software: ['ODIS + GeKo', 'VCDS'],
  obd: 'OBD Key Match',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US launch 2006. Megamos 8E crypto. CS pin needed for AKL.'
}, {
  brand: 'Audi',
  model: 'A3',
  sub: '8V (Mk3)',
  years: [2015, 2020],
  immo: 'Immo5 / SFD1 (MY20+)',
  immoTier: 'sfd1',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS Online via GeKo',
  nastf: true,
  aos: false,
  erwin: true,
  notes: '4F EEPROM. MY20 has SFD1.'
}, {
  brand: 'Audi',
  model: 'A3',
  sub: '8Y (Mk4)',
  years: [2022, 2026],
  immo: 'SFD1 → SFD2 (MY25+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS only'],
  software: ['ODIS + Active GeKo (required)'],
  obd: 'ODIS only — no aftermarket',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US launch 2022. SFD2 from MY25. Quote 1.5-2x or refer out.'
}, {
  brand: 'Audi',
  model: 'A4',
  sub: 'B6/B7',
  years: [2002, 2008],
  immo: 'Immo3 / Immo4',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '315/433 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['VCDS', 'ODIS'],
  obd: 'OBD Key Match',
  nastf: false,
  aos: false,
  erwin: true,
  notes: 'Pre-2006 = Immo3. 2006+ = Immo4.'
}, {
  brand: 'Audi',
  model: 'A4',
  sub: 'B8',
  years: [2009, 2016],
  immo: 'Immo5',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online via GeKo',
  nastf: true,
  aos: false,
  erwin: true,
  notes: '4F EEPROM extraction for AKL.'
}, {
  brand: 'Audi',
  model: 'A4',
  sub: 'B9',
  years: [2017, 2023],
  immo: 'Immo5 → SFD1 (MY20+)',
  immoTier: 'sfd1',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Autel MaxiFlash'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'MY20+ has SFD1. Audi paused A4 sedan in US after 2024 MY.'
}, {
  brand: 'Audi',
  model: 'A4',
  sub: 'B9 (8W) MY24',
  years: [2024, 2024],
  immo: 'SFD2',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['ODIS only'],
  software: ['ODIS + Active GeKo (required)'],
  obd: 'ODIS only',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'Final US year for A4 sedan. SFD2.'
}, {
  brand: 'Audi',
  model: 'S7 / A7',
  sub: 'C7 (4G)',
  years: [2012, 2018],
  immo: 'Immo5',
  immoTier: 'classic',
  keyBlank: 'HU162T (8-track)',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online via GeKo',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'Your 2016 S7 job. erWin + 1hr GeKo. NASTF for gateway.'
}, {
  brand: 'Audi',
  model: 'A7',
  sub: 'C8 (4K)',
  years: [2019, 2026],
  immo: 'SFD1 → SFD2 (MY24+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'MY24+ = SFD2.'
}, {
  brand: 'Audi',
  model: 'Q5',
  sub: '8R (Mk1)',
  years: [2009, 2017],
  immo: 'Immo5',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'Standard Immo5 flow.'
}, {
  brand: 'Audi',
  model: 'Q5',
  sub: 'FY (Mk2)',
  years: [2018, 2026],
  immo: 'Immo5 → SFD1 → SFD2 (MY24+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS only for SFD2',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'MY24+ = SFD2. Verify build date.'
}, {
  brand: 'Audi',
  model: 'Q7',
  sub: '4L (Mk1)',
  years: [2007, 2015],
  immo: 'Immo4 / Immo5',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online or VCDS',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'Transition era — confirm build date.'
}, {
  brand: 'Audi',
  model: 'Q7',
  sub: '4M (Mk2)',
  years: [2017, 2026],
  immo: 'Immo5 → SFD2 (MY24+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS only post-MY24',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'SFD2 from MY24.'
}, {
  brand: 'Audi',
  model: 'Q8',
  sub: '4M',
  years: [2019, 2026],
  immo: 'Immo5 → SFD2 (MY24+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS only post-MY24',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'SFD2 from MY24.'
},
// ===== VW (US market) =====
{
  brand: 'VW',
  model: 'Jetta',
  sub: 'Mk5/Mk6',
  years: [2005, 2018],
  immo: 'Immo3 / Immo4',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '315/433 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['VCDS', 'ODIS + GeKo'],
  obd: 'OBD via VCDS or K518',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'Confirm Immo gen by year.'
}, {
  brand: 'VW',
  model: 'Jetta',
  sub: 'Mk7',
  years: [2019, 2024],
  immo: 'Immo5 / SFD1',
  immoTier: 'sfd1',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'SFD1 on later Mk7.'
}, {
  brand: 'VW',
  model: 'Golf / GTI',
  sub: 'Mk7',
  years: [2015, 2021],
  immo: 'Immo5',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US gets GTI & Golf R primarily.'
}, {
  brand: 'VW',
  model: 'Golf GTI / Golf R',
  sub: 'Mk8',
  years: [2022, 2026],
  immo: 'SFD1 → SFD2 (MY25+)',
  immoTier: 'sfd2',
  keyBlank: 'HU66 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['Autel MaxiFlash + ODIS'],
  software: ['ODIS + GeKo (required)'],
  obd: 'ODIS only post-MY25',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US only gets GTI / Golf R in Mk8.'
}, {
  brand: 'VW',
  model: 'Atlas',
  sub: 'CA1',
  years: [2018, 2026],
  immo: 'Immo5 / SFD1',
  immoTier: 'sfd1',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US-market vehicle. MY20+ likely SFD1.'
}, {
  brand: 'VW',
  model: 'Tiguan',
  sub: 'Mk2',
  years: [2018, 2024],
  immo: 'Immo5 / SFD1',
  immoTier: 'sfd1',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'MQB platform. SFD1 later builds.'
}, {
  brand: 'VW',
  model: 'Passat',
  sub: 'NMS (US-only)',
  years: [2012, 2022],
  immo: 'Immo4 / Immo5',
  immoTier: 'classic',
  keyBlank: 'HU66',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro', 'Autel MaxiFlash'],
  software: ['ODIS + GeKo'],
  obd: 'ODIS Online or VCDS',
  nastf: true,
  aos: false,
  erwin: true,
  notes: 'US-only NMS Passat (Chattanooga built).'
},
// ===== MERCEDES (US market) =====
{
  brand: 'Mercedes',
  model: 'C-Class',
  sub: 'W203',
  years: [2001, 2007],
  immo: 'FBS3',
  immoTier: 'classic',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'CGDI MB', 'XPROG3'],
  software: ['Xentry / DAS'],
  obd: 'EIS bench read + key generation',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'IR key. Bench EIS with CGDI MB.'
}, {
  brand: 'Mercedes',
  model: 'C-Class',
  sub: 'W204',
  years: [2008, 2014],
  immo: 'FBS3',
  immoTier: 'classic',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench or OBD with CGDI MB',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'FBS3 stable. CGDI MB AKL via bench.'
}, {
  brand: 'Mercedes',
  model: 'C-Class',
  sub: 'W205',
  years: [2015, 2021],
  immo: 'FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['CGDI MB', 'Autel MaxiIM', 'Autel MaxiFlash'],
  software: ['Xentry + NASTF'],
  obd: 'FBS4 password calc + key gen',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FBS4. Password calc + token. Multi-hour AKL.'
}, {
  brand: 'Mercedes',
  model: 'C-Class',
  sub: 'W206',
  years: [2022, 2026],
  immo: 'FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 3.5,
  tools: ['CGDI MB', 'Autel MaxiIM'],
  software: ['Xentry + NASTF'],
  obd: 'FBS4 password calc',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Latest C-Class. FBS4 with newer protections.'
}, {
  brand: 'Mercedes',
  model: 'E-Class',
  sub: 'W211',
  years: [2003, 2009],
  immo: 'FBS3',
  immoTier: 'classic',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2,
  tools: ['CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench read',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'IR key. Bench EIS standard.'
}, {
  brand: 'Mercedes',
  model: 'E-Class',
  sub: 'W212',
  years: [2010, 2016],
  immo: 'FBS3',
  immoTier: 'classic',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2,
  tools: ['CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench or OBD',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'FBS3 reliable.'
}, {
  brand: 'Mercedes',
  model: 'E-Class',
  sub: 'W213',
  years: [2017, 2023],
  immo: 'FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 3,
  tools: ['CGDI MB', 'Autel MaxiIM'],
  software: ['Xentry + NASTF'],
  obd: 'FBS4 password calc',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FBS4. Multi-hour with calc.'
}, {
  brand: 'Mercedes',
  model: 'S-Class',
  sub: 'W221',
  years: [2007, 2013],
  immo: 'FBS3',
  immoTier: 'classic',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2,
  tools: ['CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench read',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'FBS3 IR key.'
}, {
  brand: 'Mercedes',
  model: 'S-Class',
  sub: 'W222',
  years: [2014, 2020],
  immo: 'FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 3.5,
  tools: ['CGDI MB', 'Autel MaxiIM'],
  software: ['Xentry + NASTF'],
  obd: 'FBS4 password calc + token',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium platform. Long AKL.'
}, {
  brand: 'Mercedes',
  model: 'ML / GLE / GL / GLS',
  sub: 'W164/W166/W167',
  years: [2006, 2026],
  immo: 'FBS3 → FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64',
  freq: '315/433 MHz',
  estHours: 2.5,
  tools: ['CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench or OBD',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'W164 FBS3, W166 transitional, W167 FBS4.'
}, {
  brand: 'Mercedes',
  model: 'Sprinter',
  sub: 'NCV3 / VS30',
  years: [2007, 2026],
  immo: 'FBS3 → FBS4',
  immoTier: 'modern',
  keyBlank: 'HU64',
  freq: '433 MHz',
  estHours: 2.5,
  tools: ['CGDI MB', 'XPROG3'],
  software: ['Xentry'],
  obd: 'EIS bench or OBD',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Common fleet vehicle. Verify FBS gen.'
}, {
  brand: 'Mercedes',
  model: 'S-Class',
  sub: 'W223',
  years: [2021, 2026],
  immo: 'FBS4+ / NCD (online)',
  immoTier: 'merc_locked',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 4,
  tools: ['Xentry only — aftermarket limited'],
  software: ['Xentry + Active Mercedes Online Auth'],
  obd: 'Xentry online required',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Newest S-Class. NCD online dependency. Refer unless you have Xentry.'
}, {
  brand: 'Mercedes',
  model: 'E-Class',
  sub: 'W214',
  years: [2024, 2026],
  immo: 'FBS4+ / NCD (online)',
  immoTier: 'merc_locked',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 4,
  tools: ['Xentry only'],
  software: ['Xentry + Active Mercedes Online Auth'],
  obd: 'Xentry online required',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'New W214 E. Online auth required. Refer unless you have Xentry.'
}, {
  brand: 'Mercedes',
  model: 'EQS / EQE',
  sub: 'MMA / EVA2',
  years: [2022, 2026],
  immo: 'FBS4+ / NCD (online)',
  immoTier: 'merc_locked',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 4,
  tools: ['Xentry only'],
  software: ['Xentry + Active Mercedes Online Auth'],
  obd: 'Xentry online required',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'EV platform. MMA architecture. Refer unless you have Xentry.'
}, {
  brand: 'Mercedes',
  model: 'GLC',
  sub: 'X254',
  years: [2023, 2026],
  immo: 'FBS4+ / NCD (online)',
  immoTier: 'merc_locked',
  keyBlank: 'HU64 smart',
  freq: '433 MHz',
  estHours: 4,
  tools: ['Xentry only'],
  software: ['Xentry + Active Mercedes Online Auth'],
  obd: 'Xentry online required',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'New GLC. Online auth required.'
},
// ===== TOYOTA (US market) =====
{
  brand: 'Toyota',
  model: 'Camry',
  sub: '4C/4D era',
  years: [1997, 2011],
  immo: '4C → 4D chip',
  immoTier: 'classic',
  keyBlank: 'TOY43 / TOY44D',
  freq: 'N/A',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream'],
  obd: 'Techstream OBD Key Reg',
  nastf: false,
  aos: false,
  erwin: false,
  notes: '4C through ~2003, 4D 2004+. Master may be required.'
}, {
  brand: 'Toyota',
  model: 'Camry',
  sub: 'G chip / Smart Key (XV50)',
  years: [2012, 2017],
  immo: 'G chip + smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBA smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream + NASTF VSP'],
  obd: 'OBD smart key registration',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'G chip smart key. NASTF passcode.'
}, {
  brand: 'Toyota',
  model: 'Camry',
  sub: '8A smart key (XV70)',
  years: [2018, 2026],
  immo: '8A H8 smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC smart',
  freq: '315 MHz',
  estHours: 2,
  tools: ['XTOOL AnyToyo SK1', 'Launch X431 Pro 5'],
  software: ['Techstream / GTS+ + NASTF'],
  obd: 'OBD via GTS+ or specialized',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A chip. AKL needs specialized tool or dealer.'
}, {
  brand: 'Toyota',
  model: 'Corolla',
  sub: '4D / G chip',
  years: [2003, 2018],
  immo: '4D → G chip',
  immoTier: 'classic',
  keyBlank: 'TOY43 / TOY44D',
  freq: 'N/A → 315 MHz',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream'],
  obd: 'Techstream OBD',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Verify chip type by year.'
}, {
  brand: 'Toyota',
  model: 'Corolla',
  sub: '8A (E210)',
  years: [2019, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream + NASTF'],
  obd: 'Standard add via Techstream, AKL specialized',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A. NASTF required.'
}, {
  brand: 'Toyota',
  model: 'RAV4',
  sub: '4D / G chip',
  years: [2006, 2018],
  immo: '4D → G chip',
  immoTier: 'classic',
  keyBlank: 'TOY44D',
  freq: 'N/A',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream'],
  obd: 'Techstream OBD',
  nastf: false,
  aos: false,
  erwin: false,
  notes: '4D pre-2014, G 2014+.'
}, {
  brand: 'Toyota',
  model: 'RAV4',
  sub: '8A (XA50)',
  years: [2019, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream / GTS+ + NASTF'],
  obd: 'GTS+ may be needed for AKL',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A. Premium quote for AKL.'
}, {
  brand: 'Toyota',
  model: 'Highlander',
  sub: '4D / G chip',
  years: [2008, 2019],
  immo: '4D → G smart',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBA smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream + NASTF'],
  obd: 'Techstream OBD reg',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Smart key 2014+.'
}, {
  brand: 'Toyota',
  model: 'Highlander',
  sub: '8A (XU70)',
  years: [2020, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream / GTS+ + NASTF'],
  obd: 'AKL via GTS+ or specialized',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A. NASTF required.'
}, {
  brand: 'Toyota',
  model: '4Runner',
  sub: '4D / G / 8A',
  years: [2010, 2024],
  immo: '4D → G → 8A smart',
  immoTier: 'modern',
  keyBlank: 'TOY44D / HYQ14F smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'XTOOL'],
  software: ['Techstream + NASTF'],
  obd: 'Verify chip by year',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Long production run. Confirm chip type.'
}, {
  brand: 'Toyota',
  model: 'Tacoma',
  sub: '4D era',
  years: [2005, 2015],
  immo: '4D chip',
  immoTier: 'classic',
  keyBlank: 'TOY44D',
  freq: 'N/A',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream'],
  obd: 'Techstream OBD',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Master may be required.'
}, {
  brand: 'Toyota',
  model: 'Tacoma',
  sub: '8A smart',
  years: [2016, 2026],
  immo: '8A H8 smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream/GTS+ + NASTF'],
  obd: 'Specialized tool for AKL',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A smart key.'
}, {
  brand: 'Toyota',
  model: 'Tundra',
  sub: '4D / G',
  years: [2007, 2021],
  immo: '4D → G smart',
  immoTier: 'modern',
  keyBlank: 'TOY44D / HYQ14F',
  freq: 'N/A → 315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream + NASTF'],
  obd: 'Techstream + NASTF for smart',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Smart key 2014+. Verify.'
}, {
  brand: 'Toyota',
  model: 'Tundra',
  sub: '8A (XK70)',
  years: [2022, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBC',
  freq: '315 MHz',
  estHours: 2,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream / GTS+ + NASTF'],
  obd: 'AKL via GTS+ or specialized',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '8A. Premium quote.'
}, {
  brand: 'Toyota',
  model: 'Sienna',
  sub: '4D / G / 8A',
  years: [2011, 2026],
  immo: '4D → G → 8A',
  immoTier: 'modern',
  keyBlank: 'HYQ14F smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'XTOOL'],
  software: ['Techstream + NASTF'],
  obd: 'Confirm chip by year',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Family van. Common AKL job.'
},
// ===== LEXUS (US market) =====
{
  brand: 'Lexus',
  model: 'IS / GS / LS',
  sub: '4D / G chip',
  years: [2006, 2017],
  immo: '4D → G chip + smart',
  immoTier: 'modern',
  keyBlank: 'HYQ14ACX smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techstream + NASTF VSP'],
  obd: 'OBD smart key registration',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF passcode for gateway.'
}, {
  brand: 'Lexus',
  model: 'RX',
  sub: '4D / G / 8A',
  years: [2010, 2026],
  immo: 'G / 8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBA / FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream / GTS+ + NASTF'],
  obd: '2018+ may need GTS+ for AKL',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'G pre-2018, 8A 2018+.'
}, {
  brand: 'Lexus',
  model: 'ES',
  sub: 'G / 8A',
  years: [2013, 2026],
  immo: 'G → 8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14FBA / FBC',
  freq: '315 MHz',
  estHours: 1.75,
  tools: ['XTOOL AnyToyo', 'Launch X431 Pro 5'],
  software: ['Techstream + NASTF'],
  obd: 'Standard smart key reg',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Same flow as Camry by year.'
},
// ===== GM — CHEVROLET (US market) =====
{
  brand: 'Chevrolet',
  model: 'Cruze',
  sub: '1st gen',
  years: [2011, 2019],
  immo: 'HSM (Z-keyway warded)',
  immoTier: 'modern',
  keyBlank: 'B111-PT / B106',
  freq: '315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect / ACDelco TDS'],
  obd: 'OBD via SPS2 or aftermarket',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'B111-PT for warded version. NASTF required.'
}, {
  brand: 'Chevrolet',
  model: 'Malibu',
  sub: 'HSM era',
  years: [2010, 2024],
  immo: 'HSM',
  immoTier: 'modern',
  keyBlank: 'B111-PT',
  freq: '315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'SPS2 programming',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'GM HSM standard. Last year MY2024 — Chevy discontinued the Malibu after Nov 2024 production.'
}, {
  brand: 'Chevrolet',
  model: 'Equinox',
  sub: 'HSM era',
  years: [2010, 2026],
  immo: 'HSM + smart key (2018+)',
  immoTier: 'modern',
  keyBlank: 'B111-PT / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline SPS2',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Smart key 2018+.'
}, {
  brand: 'Chevrolet',
  model: 'Impala',
  sub: 'HSM era',
  years: [2014, 2020],
  immo: 'HSM',
  immoTier: 'modern',
  keyBlank: 'B111-PT',
  freq: '315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline SPS2',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Standard GM HSM.'
}, {
  brand: 'Chevrolet',
  model: 'Silverado',
  sub: 'GMT900',
  years: [2007, 2013],
  immo: 'PassKey III+',
  immoTier: 'classic',
  keyBlank: 'B111',
  freq: 'N/A',
  estHours: 0.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['ACDelco TDS'],
  obd: '10-min relearn or scan tool',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'PassKey III+ — relearn is quick.'
}, {
  brand: 'Chevrolet',
  model: 'Silverado',
  sub: 'K2XX / T1XX',
  years: [2014, 2026],
  immo: 'HSM + smart (2019+)',
  immoTier: 'modern',
  keyBlank: 'B119 / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline SPS2 + GDS2',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '2019+ smart key. NASTF required.'
}, {
  brand: 'Chevrolet',
  model: 'Tahoe / Suburban',
  sub: 'GMT900',
  years: [2007, 2014],
  immo: 'PassKey III+',
  immoTier: 'classic',
  keyBlank: 'B111',
  freq: 'N/A',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['ACDelco TDS'],
  obd: '10-min relearn',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Same flow as Silverado GMT900.'
}, {
  brand: 'Chevrolet',
  model: 'Tahoe / Suburban',
  sub: 'K2XX / T1XX',
  years: [2015, 2026],
  immo: 'HSM + smart (2018+)',
  immoTier: 'modern',
  keyBlank: 'B119 / smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline + NASTF',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Same as Silverado K2XX. Smart key from 2018+.'
}, {
  brand: 'Chevrolet',
  model: 'Traverse',
  sub: 'HSM era',
  years: [2009, 2026],
  immo: 'HSM + smart (2018+)',
  immoTier: 'modern',
  keyBlank: 'B119 / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline SPS2',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Common family SUV.'
},
// ===== GMC (US market) =====
{
  brand: 'GMC',
  model: 'Sierra',
  sub: 'GMT900',
  years: [2007, 2013],
  immo: 'PassKey III+',
  immoTier: 'classic',
  keyBlank: 'B111',
  freq: 'N/A',
  estHours: 0.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['ACDelco TDS'],
  obd: '10-min relearn',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Same as Silverado.'
}, {
  brand: 'GMC',
  model: 'Sierra',
  sub: 'K2XX / T1XX',
  years: [2014, 2026],
  immo: 'HSM + smart (2019+)',
  immoTier: 'modern',
  keyBlank: 'B119 / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline + NASTF',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Same as Silverado K2XX.'
}, {
  brand: 'GMC',
  model: 'Yukon / Yukon XL',
  sub: 'GMT900 / K2XX',
  years: [2007, 2026],
  immo: 'PassKey III+ → HSM + smart',
  immoTier: 'modern',
  keyBlank: 'B111 → B119 smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Verify gen by year',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Sister to Tahoe/Suburban.'
}, {
  brand: 'GMC',
  model: 'Acadia / Terrain',
  sub: 'HSM era',
  years: [2010, 2026],
  immo: 'HSM + smart (2018+)',
  immoTier: 'modern',
  keyBlank: 'B119 / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline SPS2',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Common GMC SUVs.'
},
// ===== CADILLAC (US market) =====
{
  brand: 'Cadillac',
  model: 'Escalade',
  sub: 'GMT900 / K2XX / T1XX',
  years: [2007, 2026],
  immo: 'HSM + smart',
  immoTier: 'modern',
  keyBlank: 'B119 smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline + NASTF',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium Tahoe/Yukon.'
}, {
  brand: 'Cadillac',
  model: 'CTS / ATS / XT5',
  sub: 'HSM era',
  years: [2008, 2026],
  immo: 'HSM + smart',
  immoTier: 'modern',
  keyBlank: 'B119 smart',
  freq: '315 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Techline Connect + NASTF'],
  obd: 'Techline + NASTF',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Smart key throughout.'
},
// ===== FORD / LINCOLN (US market) =====
{
  brand: 'Ford',
  model: 'F-150',
  sub: 'PATS Gen 3',
  years: [2009, 2014],
  immo: 'PATS / 80-bit Hitag Pro',
  immoTier: 'classic',
  keyBlank: 'HU101',
  freq: '315 MHz',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['FDRS'],
  obd: 'OBD PATS programming',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Two-key relearn possible without tool.'
}, {
  brand: 'Ford',
  model: 'F-150',
  sub: '13th gen (P552)',
  years: [2015, 2020],
  immo: '80-bit Hitag Pro',
  immoTier: 'modern',
  keyBlank: 'HU101 / smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF VSP'],
  obd: 'FDRS PMI for newer trims',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF for Smart Access trims.'
}, {
  brand: 'Ford',
  model: 'F-150',
  sub: '14th gen',
  years: [2021, 2026],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 2,
  tools: ['Autel MaxiFlash'],
  software: ['FDRS + NASTF VSP (required)'],
  obd: 'FDRS only with PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FDRS required. Internet mandatory.'
}, {
  brand: 'Ford',
  model: 'F-250/F-350 Super Duty',
  sub: 'PATS',
  years: [2011, 2026],
  immo: 'PATS → Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / M3N smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Heavy-duty trucks. FDRS required for newer.'
}, {
  brand: 'Ford',
  model: 'Escape',
  sub: 'PATS',
  years: [2008, 2026],
  immo: 'PATS / Hitag Pro',
  immoTier: 'modern',
  keyBlank: 'HU101',
  freq: '315/902 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Year-dependent. Confirm before quoting.'
}, {
  brand: 'Ford',
  model: 'Edge',
  sub: 'PATS / 2nd gen',
  years: [2007, 2024],
  immo: 'PATS → Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / smart',
  freq: '315/902 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Last year MY2024 — Ford discontinued Edge in April 2024. NASTF for newer trims.'
}, {
  brand: 'Ford',
  model: 'Explorer',
  sub: 'PATS Gen 3+',
  years: [2011, 2026],
  immo: '80-bit Hitag Pro',
  immoTier: 'modern',
  keyBlank: 'HU101 / smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF for newer.'
}, {
  brand: 'Ford',
  model: 'Mustang',
  sub: 'S550 / S650',
  years: [2015, 2026],
  immo: '80-bit Hitag Pro',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FDRS required for newer trims.'
}, {
  brand: 'Ford',
  model: 'Bronco',
  sub: '6th gen (U725)',
  years: [2021, 2026],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 1.75,
  tools: ['Autel MaxiFlash'],
  software: ['FDRS + NASTF VSP (required)'],
  obd: 'FDRS only with PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'New Bronco. FDRS required.'
}, {
  brand: 'Lincoln',
  model: 'MKZ',
  sub: '1st gen',
  years: [2006, 2012],
  immo: 'PATS / 4D-63',
  immoTier: 'classic',
  keyBlank: 'HU101',
  freq: '315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['FDRS / IDS'],
  obd: 'OBD PATS via IDS or aftermarket',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Originally Zephyr (2006), renamed MKZ in 2007. Standard Ford PATS flow.'
}, {
  brand: 'Lincoln',
  model: 'MKZ',
  sub: '2nd gen',
  years: [2013, 2020],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Push-button smart. NASTF for newer trims.'
}, {
  brand: 'Lincoln',
  model: 'Navigator',
  sub: 'U228 / U326 / U554',
  years: [2007, 2026],
  immo: 'PATS → 80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / M3N smart',
  freq: '315/902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Full-size SUV. Premium FDRS path for 2018+.'
}, {
  brand: 'Lincoln',
  model: 'MKX / Nautilus',
  sub: '1st-3rd gen',
  years: [2007, 2026],
  immo: 'PATS → Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / M3N smart',
  freq: '315/902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'MKX renamed Nautilus for 2019. FDRS for newer.'
}, {
  brand: 'Lincoln',
  model: 'MKC / Corsair',
  sub: 'CD536 / CX482',
  years: [2015, 2026],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'MKC renamed Corsair for 2020. NASTF required.'
}, {
  brand: 'Lincoln',
  model: 'Aviator',
  sub: '2nd gen (U611)',
  years: [2020, 2026],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 1.75,
  tools: ['Autel MaxiFlash'],
  software: ['FDRS + NASTF (required)'],
  obd: 'FDRS only with PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium 3-row SUV. FDRS required.'
}, {
  brand: 'Lincoln',
  model: 'Continental',
  sub: '10th gen',
  years: [2017, 2020],
  immo: '80-bit Hitag Pro + smart',
  immoTier: 'modern',
  keyBlank: 'M3N-A2C smart',
  freq: '902 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['FDRS + NASTF'],
  obd: 'FDRS PMI',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Flagship sedan, US production 2017-2020.'
},
// ===== HONDA / ACURA (US market) =====
{
  brand: 'Honda',
  model: 'Civic',
  sub: 'HISS era',
  years: [1998, 2017],
  immo: 'HISS',
  immoTier: 'classic',
  keyBlank: 'HO01 / HO03',
  freq: 'N/A → 315 MHz',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['HDS'],
  obd: 'OBD via HDS or aftermarket',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Master may be required for early.'
}, {
  brand: 'Honda',
  model: 'Civic',
  sub: 'Smart key era',
  years: [2016, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS / serviceexpress.honda.com + NASTF'],
  obd: 'OBD via NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF required.'
}, {
  brand: 'Honda',
  model: 'Accord',
  sub: 'HISS era',
  years: [1998, 2017],
  immo: 'HISS',
  immoTier: 'classic',
  keyBlank: 'HO01 / HO03',
  freq: 'N/A → 315 MHz',
  estHours: 0.75,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['HDS'],
  obd: 'OBD via HDS',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Same as Civic.'
}, {
  brand: 'Honda',
  model: 'Accord',
  sub: 'Smart key era',
  years: [2018, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF required for AKL.'
}, {
  brand: 'Honda',
  model: 'CR-V',
  sub: 'HISS era',
  years: [2002, 2016],
  immo: 'HISS',
  immoTier: 'classic',
  keyBlank: 'HO01 / HO03',
  freq: 'N/A → 315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['HDS'],
  obd: 'OBD via HDS',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Standard HISS.'
}, {
  brand: 'Honda',
  model: 'CR-V',
  sub: 'Smart key era',
  years: [2017, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF required.'
}, {
  brand: 'Honda',
  model: 'Pilot',
  sub: 'HISS / Smart',
  years: [2009, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Family SUV. Smart key 2016+.'
}, {
  brand: 'Honda',
  model: 'Odyssey',
  sub: 'HISS / Smart',
  years: [2011, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Common minivan.'
}, {
  brand: 'Acura',
  model: 'MDX / RDX / TLX',
  sub: 'Smart key',
  years: [2014, 2026],
  immo: 'HISS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5V2X smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['HDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium Honda. NASTF required.'
},
// ===== NISSAN / INFINITI (US market) =====
{
  brand: 'Nissan',
  model: 'Altima / Maxima',
  sub: 'BCM era',
  years: [2007, 2018],
  immo: 'NATS + BCM',
  immoTier: 'modern',
  keyBlank: 'CWTWB1U415 smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Nissan Consult + NASTF'],
  obd: 'OBD via Consult or aftermarket',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'BCM PIN required for AKL.'
}, {
  brand: 'Nissan',
  model: 'Altima',
  sub: 'L34',
  years: [2019, 2026],
  immo: 'NATS6 smart',
  immoTier: 'modern',
  keyBlank: 'KR5TXN7 smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['Consult III Plus + NASTF'],
  obd: 'NASTF + BCM PIN',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Modern NATS. NASTF required.'
}, {
  brand: 'Nissan',
  model: 'Rogue',
  sub: 'T32/T33',
  years: [2014, 2026],
  immo: 'NATS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5S180144014 smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['Consult + NASTF'],
  obd: 'NASTF + BCM PIN',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Standard Nissan smart flow.'
}, {
  brand: 'Nissan',
  model: 'Pathfinder',
  sub: 'R52 / R53',
  years: [2013, 2026],
  immo: 'NATS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5S smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['Consult + NASTF'],
  obd: 'NASTF + BCM PIN',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Common family SUV.'
}, {
  brand: 'Nissan',
  model: 'Frontier / Titan',
  sub: 'NATS era',
  years: [2009, 2026],
  immo: 'NATS + smart (newer)',
  immoTier: 'modern',
  keyBlank: 'CWTWB1U / KR5S',
  freq: '315/433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['Consult + NASTF'],
  obd: 'NASTF + BCM PIN',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Trucks. Verify chip by year.'
}, {
  brand: 'Infiniti',
  model: 'Q50 / QX60',
  sub: 'Smart key',
  years: [2013, 2026],
  immo: 'NATS + smart',
  immoTier: 'modern',
  keyBlank: 'KR5S smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['Consult III Plus + NASTF'],
  obd: 'NASTF + BCM PIN',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium Nissan. Same flow.'
},
// ===== HYUNDAI / KIA / GENESIS (US market) =====
{
  brand: 'Hyundai',
  model: 'Sonata / Elantra',
  sub: '46/8A era',
  years: [2011, 2019],
  immo: '46 chip → 8A smart',
  immoTier: 'modern',
  keyBlank: 'HY18 / smart',
  freq: '433 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['GDS / hmaservice.com'],
  obd: 'OBD via Hyundai gateway',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'NASTF Diagnostic Tech Access (free opt-in).'
}, {
  brand: 'Hyundai',
  model: 'Sonata',
  sub: 'DN8',
  years: [2020, 2026],
  immo: '8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['GDS-Mobile / hmaservice.com'],
  obd: 'Hyundai gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF opt-in for gateway. Theft surge means tighter security.'
}, {
  brand: 'Hyundai',
  model: 'Tucson / Santa Fe',
  sub: 'Smart key',
  years: [2016, 2026],
  immo: '46/8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB / HY18 smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['GDS / hmaservice.com'],
  obd: 'Hyundai gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Same as Sonata flow.'
}, {
  brand: 'Hyundai',
  model: 'Palisade',
  sub: 'LX2',
  years: [2020, 2026],
  immo: '8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['GDS-Mobile / hmaservice.com'],
  obd: 'Hyundai gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '3-row SUV. Common AKL job.'
}, {
  brand: 'Kia',
  model: 'Optima / Forte',
  sub: '46/8A era',
  years: [2011, 2019],
  immo: '46 → 8A smart',
  immoTier: 'modern',
  keyBlank: 'HY18 / smart',
  freq: '433 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['KDS / hmaservice.com'],
  obd: 'Kia gateway code',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Kia gateway opt-in via NASTF.'
}, {
  brand: 'Kia',
  model: 'Soul / Sportage',
  sub: 'Smart key',
  years: [2016, 2026],
  immo: '46/8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['KDS / hmaservice.com'],
  obd: 'Kia gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Kia gateway code.'
}, {
  brand: 'Kia',
  model: 'Telluride',
  sub: 'ON',
  years: [2020, 2026],
  immo: '8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['KDS / hmaservice.com'],
  obd: 'Kia gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '3-row SUV. Sister to Palisade.'
}, {
  brand: 'Genesis',
  model: 'G70 / G80',
  sub: 'Smart key',
  years: [2017, 2026],
  immo: '8A smart',
  immoTier: 'modern',
  keyBlank: 'TQ8-FOB smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['GDS / hmaservice.com'],
  obd: 'Genesis gateway code',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium HMA. Same flow.'
},
// ===== SUBARU (US market) =====
{
  brand: 'Subaru',
  model: 'Outback / Legacy',
  sub: '4D / G chip',
  years: [2005, 2019],
  immo: '4D → G chip',
  immoTier: 'classic',
  keyBlank: 'DAT17 / smart',
  freq: '315 MHz',
  estHours: 1.25,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['SSM3/SSM4'],
  obd: 'OBD via SSM or aftermarket',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Confirm chip by year.'
}, {
  brand: 'Subaru',
  model: 'Outback',
  sub: 'Smart key era',
  years: [2020, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'HYQ14AHC smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['XTOOL', 'Launch X431 Pro 5'],
  software: ['SSM4 + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Modern smart key. NASTF.'
}, {
  brand: 'Subaru',
  model: 'Forester / Crosstrek',
  sub: 'Smart key',
  years: [2014, 2026],
  immo: 'G → 8A smart',
  immoTier: 'modern',
  keyBlank: 'HYQ14AHC smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5'],
  software: ['SSM4 + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Standard Subaru smart.'
}, {
  brand: 'Subaru',
  model: 'WRX / STI',
  sub: '4D / smart',
  years: [2008, 2026],
  immo: '4D → G → 8A smart',
  immoTier: 'modern',
  keyBlank: 'DAT17 / smart',
  freq: '315/433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5'],
  software: ['SSM3/SSM4 + NASTF'],
  obd: 'Chip-dependent',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Verify chip first.'
},
// ===== MAZDA (US market) =====
{
  brand: 'Mazda',
  model: 'Mazda3',
  sub: '4D / 8A',
  years: [2010, 2026],
  immo: '4D → 8A smart',
  immoTier: 'modern',
  keyBlank: 'MAZ24 / smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['IDS / Mazda M-MDS'],
  obd: 'OBD via IDS or aftermarket',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Mazda uses Ford-style PATS variant.'
}, {
  brand: 'Mazda',
  model: 'CX-5 / CX-30',
  sub: 'Smart key',
  years: [2013, 2026],
  immo: '8A smart key',
  immoTier: 'modern',
  keyBlank: 'WAZSKE13D smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['IDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'NASTF required.'
}, {
  brand: 'Mazda',
  model: 'CX-9 / CX-90',
  sub: 'Smart key',
  years: [2007, 2026],
  immo: '4D → 8A smart',
  immoTier: 'modern',
  keyBlank: 'WAZSKE13D smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['IDS + NASTF'],
  obd: 'NASTF passcode',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '3-row SUV.'
}, {
  brand: 'Mazda',
  model: 'Mazda6',
  sub: '4D / smart',
  years: [2009, 2021],
  immo: '4D → 8A smart',
  immoTier: 'modern',
  keyBlank: 'MAZ24 / smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5'],
  software: ['IDS'],
  obd: 'OBD via IDS',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'Pre-2014 4D, 2014+ smart.'
},
// ===== DODGE / CHRYSLER / JEEP / RAM (US market) =====
{
  brand: 'Dodge / Chrysler',
  model: 'Caravan / 300',
  sub: 'SKIM era',
  years: [2005, 2014],
  immo: 'SKIM',
  immoTier: 'classic',
  keyBlank: 'Y170 / smart',
  freq: '315 MHz',
  estHours: 1,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['witech + NASTF'],
  obd: 'OBD via witech or aftermarket',
  nastf: false,
  aos: false,
  erwin: false,
  notes: 'SKIM PIN required for AKL.'
}, {
  brand: 'Dodge',
  model: 'Charger / Challenger',
  sub: 'LX / LD',
  years: [2006, 2023],
  immo: 'SKIM → SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'M3N smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech 2.0 + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '2018+ needs AutoAuth.'
}, {
  brand: 'Jeep',
  model: 'Grand Cherokee',
  sub: 'WK2',
  years: [2011, 2021],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'M3N40821302 smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech 2.0 + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FCA AutoAuth subscription for SGW.'
}, {
  brand: 'Jeep',
  model: 'Grand Cherokee',
  sub: 'WL',
  years: [2022, 2026],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'M3N smart',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Autel MaxiFlash'],
  software: ['witech 2.0 + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FCA AutoAuth required.'
}, {
  brand: 'Jeep',
  model: 'Wrangler',
  sub: 'JK / JL',
  years: [2007, 2026],
  immo: 'SKIM → SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'OHT692427AA / M3N smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech + FCA AutoAuth + NASTF'],
  obd: 'OBD via witech or AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '2018+ JL needs AutoAuth for SGW.'
}, {
  brand: 'Jeep',
  model: 'Cherokee',
  sub: 'KL',
  years: [2014, 2023],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'M3N40821302 smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'AutoAuth for 2018+.'
}, {
  brand: 'Jeep',
  model: 'Compass / Renegade',
  sub: 'MP / BU',
  years: [2017, 2026],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'M3N smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'FCA AutoAuth required.'
}, {
  brand: 'Ram',
  model: '1500',
  sub: 'DS / DT',
  years: [2013, 2026],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'GQ4-54T smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech 2.0 + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: '2018+ DT needs AutoAuth.'
}, {
  brand: 'Ram',
  model: '2500 / 3500 HD',
  sub: 'DJ / D2',
  years: [2013, 2026],
  immo: 'SKREEM + smart',
  immoTier: 'modern',
  keyBlank: 'GQ4-54T smart',
  freq: '433 MHz',
  estHours: 1.75,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['witech 2.0 + FCA AutoAuth + NASTF'],
  obd: 'FCA SGW via AutoAuth',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'HD trucks. Same flow as 1500.'
},
// ===== MITSUBISHI / VOLVO / LAND ROVER (US market) =====
{
  brand: 'Mitsubishi',
  model: 'Outlander',
  sub: 'MUT era',
  years: [2007, 2026],
  immo: '46 chip → smart',
  immoTier: 'modern',
  keyBlank: 'MIT9 / smart',
  freq: '433 MHz',
  estHours: 1.5,
  tools: ['Launch X431 Pro 5', 'K518 Pro'],
  software: ['MUT-III + NASTF'],
  obd: 'OBD via MUT or aftermarket',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Confirm chip by year. NASTF for newer.'
}, {
  brand: 'Volvo',
  model: 'XC60 / XC90',
  sub: 'CEM era',
  years: [2008, 2026],
  immo: 'CEM + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / smart',
  freq: '433 MHz',
  estHours: 2,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['VIDA + NASTF'],
  obd: 'VIDA via NASTF gateway',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Volvo VIDA required. Premium quote.'
}, {
  brand: 'Land Rover',
  model: 'Discovery / Range Rover',
  sub: 'L494 / L405 / L462',
  years: [2010, 2026],
  immo: 'KVM + smart',
  immoTier: 'modern',
  keyBlank: 'HU101 / smart',
  freq: '433 MHz',
  estHours: 2.5,
  tools: ['Launch X431 Pro 5', 'Autel MaxiFlash'],
  software: ['JLR SDD / Pathfinder + NASTF'],
  obd: 'KVM bench or OBD via Pathfinder',
  nastf: true,
  aos: false,
  erwin: false,
  notes: 'Premium platform. KVM bench may be required.'
}];

// ====== STYLE TOKENS ======
const BRAND_BLUE = '#101A69';
const BRAND_BLUE_DEEP = '#0A1147';
const BRAND_GOLD = '#E8B33C';
const BG = '#F5F5F7';
const CARD = '#FFFFFF';
const INK = '#1A1A1A';
const INK_MUTED = '#666666';
const RAIL = '#E5E5EA';
const TIER_STYLES = {
  classic: {
    bg: '#E8F0FE',
    ink: '#1A4D9E',
    label: 'CLASSIC'
  },
  cas: {
    bg: '#FFF4E5',
    ink: '#A35A00',
    label: 'CAS / EWS'
  },
  fem: {
    bg: '#FCE8FF',
    ink: '#7A1FA2',
    label: 'FEM / BDC'
  },
  modern: {
    bg: '#E8F8F0',
    ink: '#1A6B3E',
    label: 'MODERN'
  },
  sfd1: {
    bg: '#FFF1F0',
    ink: '#9E1A1A',
    label: 'SFD1'
  },
  sfd2: {
    bg: '#1A0A0A',
    ink: '#FFCCCC',
    label: 'SFD2 — REFER'
  },
  sfd_capable: {
    bg: BRAND_BLUE,
    ink: BRAND_GOLD,
    label: 'PREMIUM — SFD CAPABLE'
  },
  merc_locked: {
    bg: '#1A0A0A',
    ink: '#FFCCCC',
    label: 'MERC ONLINE — REFER'
  },
  xentry_capable: {
    bg: BRAND_BLUE,
    ink: BRAND_GOLD,
    label: 'PREMIUM — XENTRY CAPABLE'
  }
};
const DEFAULT_SETTINGS = {
  laborRate: 125,
  mobileFee: 50,
  aosTicket: 32,
  erwinTicket: 35,
  nastfSurcharge: 25,
  defaultKeyBlankCost: 35,
  partsMarkup: 50,
  hasOdisGeko: false,
  gekoTokenCost: 25,
  hasXentry: false,
  xentryTokenCost: 35
};
function getEffectiveTier(immoTier, settings) {
  if ((immoTier === 'sfd1' || immoTier === 'sfd2') && settings && settings.hasOdisGeko) {
    return 'sfd_capable';
  }
  if (immoTier === 'merc_locked' && settings && settings.hasXentry) {
    return 'xentry_capable';
  }
  return immoTier;
}
async function compressImage(file, maxDim = 900, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let {
          width,
          height
        } = img;
        if (width > height && width > maxDim) {
          height = height * maxDim / width;
          width = maxDim;
        } else if (height > maxDim) {
          width = width * maxDim / height;
          height = maxDim;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function PhantomKeyTool() {
  const [tab, setTab] = useState('lookup');
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [showSaveSheet, setShowSaveSheet] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedToast, setSavedToast] = useState(false);
  const [viewJob, setViewJob] = useState(null);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  useEffect(() => {
    (async () => {
      try {
        const setRes = await window.storage.get('settings:default').catch(() => null);
        if (setRes && setRes.value) {
          try {
            setSettings({
              ...DEFAULT_SETTINGS,
              ...JSON.parse(setRes.value)
            });
          } catch (e) {}
        }
      } catch (e) {}
      try {
        const keys = await window.storage.list('job:');
        const jobs = [];
        if (keys && keys.keys) {
          for (const k of keys.keys) {
            try {
              const r = await window.storage.get(k);
              if (r) jobs.push(JSON.parse(r.value));
            } catch (e) {}
          }
        }
        jobs.sort((a, b) => b.savedAt - a.savedAt);
        setSavedJobs(jobs);
      } catch (e) {}
      setLoading(false);
    })();
  }, []);
  const brands = [...new Set(VEHICLES.map(v => v.brand))].sort();
  const models = brand ? [...new Set(VEHICLES.filter(v => v.brand === brand).map(v => v.model))].sort() : [];
  function findResult() {
    if (!brand || !model || !year) return;
    const y = parseInt(year);
    if (isNaN(y)) return;
    const match = VEHICLES.find(v => v.brand === brand && v.model === model && y >= v.years[0] && y <= v.years[1]);
    setResult(match || {
      notFound: true
    });
  }
  function reset() {
    setBrand(null);
    setModel(null);
    setYear('');
    setResult(null);
    setShowSaveSheet(false);
  }
  async function saveJob(jobData) {
    try {
      await window.storage.set(`job:${jobData.id}`, JSON.stringify(jobData));
      setSavedJobs([jobData, ...savedJobs]);
      setShowSaveSheet(false);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 1800);
    } catch (e) {
      alert('Could not save — storage unavailable or job too large.');
    }
  }
  async function deleteJob(id) {
    try {
      await window.storage.delete(`job:${id}`);
      setSavedJobs(savedJobs.filter(j => j.id !== id));
      setViewJob(null);
    } catch (e) {}
  }
  async function saveSettings(newSettings) {
    setSettings(newSettings);
    try {
      await window.storage.set('settings:default', JSON.stringify(newSettings));
    } catch (e) {}
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: BG,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      color: INK,
      paddingBottom: '90px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: BRAND_BLUE,
      color: '#fff',
      padding: '18px 18px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: BRAND_GOLD,
      fontWeight: 700
    }
  }, "PHANTOM KEY & ECU"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      fontWeight: 700,
      marginTop: '2px',
      letterSpacing: '-0.01em'
    }
  }, tab === 'lookup' && 'Field Identifier', tab === 'saved' && 'Job History', tab === 'settings' && 'Settings', tab === 'lishi' && 'Lishi Ref')), /*#__PURE__*/React.createElement(Key, {
    size: 22,
    color: BRAND_GOLD
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '3px',
      background: BRAND_GOLD,
      marginTop: '14px',
      marginLeft: '-18px',
      marginRight: '-18px'
    }
  })), tab === 'lookup' && /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '20px 16px'
    }
  }, !result && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "01",
    text: "Brand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
      marginBottom: '24px'
    }
  }, brands.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => {
      setBrand(b);
      setModel(null);
    },
    style: {
      padding: '14px 12px',
      borderRadius: '10px',
      border: brand === b ? `2px solid ${BRAND_BLUE}` : `1px solid ${RAIL}`,
      background: brand === b ? BRAND_BLUE : CARD,
      color: brand === b ? '#fff' : INK,
      fontWeight: 600,
      fontSize: '13px',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, b))), brand && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "02",
    text: "Model"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '24px'
    }
  }, models.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setModel(m),
    style: {
      padding: '14px 16px',
      borderRadius: '10px',
      border: model === m ? `2px solid ${BRAND_BLUE}` : `1px solid ${RAIL}`,
      background: model === m ? BRAND_BLUE : CARD,
      color: model === m ? '#fff' : INK,
      fontWeight: 600,
      fontSize: '15px',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, m), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 18,
    color: model === m ? '#fff' : INK_MUTED
  }))))), brand && model && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "03",
    text: "Year"
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    value: year,
    onChange: e => setYear(e.target.value),
    placeholder: "e.g. 2008",
    style: {
      width: '100%',
      padding: '16px',
      fontSize: '20px',
      fontWeight: 600,
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      background: CARD,
      marginBottom: '16px',
      fontFamily: 'monospace',
      letterSpacing: '0.05em',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: findResult,
    disabled: !year,
    style: {
      width: '100%',
      padding: '16px',
      background: year ? BRAND_GOLD : RAIL,
      color: year ? BRAND_BLUE : INK_MUTED,
      border: 'none',
      borderRadius: '10px',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.05em',
      cursor: year ? 'pointer' : 'not-allowed',
      textTransform: 'uppercase'
    }
  }, "Identify Vehicle"))), result && !result.notFound && !showSaveSheet && /*#__PURE__*/React.createElement(ResultCard, {
    result: result,
    year: year,
    settings: settings,
    onReset: reset,
    onQuote: () => setShowSaveSheet(true)
  }), result && result.notFound && /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 32,
    color: BRAND_GOLD,
    style: {
      margin: '0 auto 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '16px',
      marginBottom: '6px'
    }
  }, "No match for that year"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: INK_MUTED,
      marginBottom: '20px'
    }
  }, brand, " ", model, " (", year, ") isn't covered. May not have been sold in US that year."), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    style: {
      padding: '12px 24px',
      background: BRAND_BLUE,
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '14px',
      cursor: 'pointer'
    }
  }, "Start over")), result && showSaveSheet && /*#__PURE__*/React.createElement(SaveSheet, {
    result: result,
    year: parseInt(year),
    settings: settings,
    onCancel: () => setShowSaveSheet(false),
    onSave: saveJob
  })), tab === 'saved' && !viewJob && /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: INK_MUTED,
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, "JOB HISTORY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, savedJobs.length, " saved")), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      color: INK_MUTED,
      fontSize: '14px'
    }
  }, "Loading\u2026"), !loading && savedJobs.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px dashed ${RAIL}`,
      borderRadius: '12px',
      padding: '32px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 32,
    color: INK_MUTED,
    style: {
      margin: '0 auto 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '15px',
      marginBottom: '4px'
    }
  }, "No saved jobs yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: INK_MUTED
    }
  }, "Save a lookup and it shows up here.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, savedJobs.map(j => {
    const t = TIER_STYLES[getEffectiveTier(j.immoTier, settings)] || TIER_STYLES.classic;
    return /*#__PURE__*/React.createElement("button", {
      key: j.id,
      onClick: () => setViewJob(j),
      style: {
        background: CARD,
        border: `1px solid ${RAIL}`,
        borderRadius: '12px',
        padding: '14px',
        textAlign: 'left',
        cursor: 'pointer',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: '15px'
      }
    }, j.year, " ", j.brand, " ", j.model), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        color: INK_MUTED,
        fontFamily: 'monospace',
        marginTop: '2px'
      }
    }, j.sub), j.customer && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '13px',
        color: INK,
        marginTop: '4px',
        fontWeight: 600
      }
    }, j.customer)), j.quotedPrice > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        background: BRAND_BLUE,
        color: '#fff',
        padding: '4px 10px',
        borderRadius: '6px',
        fontWeight: 700,
        fontSize: '13px',
        fontFamily: 'monospace'
      }
    }, "$", j.quotedPrice)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '3px 8px',
        background: t.bg,
        color: t.ink,
        borderRadius: '4px',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.08em'
      }
    }, t.label), j.photos && j.photos.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: INK_MUTED,
        display: 'flex',
        alignItems: 'center',
        gap: '3px'
      }
    }, /*#__PURE__*/React.createElement(Camera, {
      size: 11
    }), " ", j.photos.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: INK_MUTED,
        marginLeft: 'auto'
      }
    }, new Date(j.savedAt).toLocaleDateString())));
  }))), tab === 'saved' && viewJob && /*#__PURE__*/React.createElement(JobDetail, {
    job: viewJob,
    settings: settings,
    onBack: () => setViewJob(null),
    onDelete: () => deleteJob(viewJob.id)
  }), tab === 'lishi' && React.createElement(LishiTab, null), tab === 'settings' && /*#__PURE__*/React.createElement(SettingsTab, {
    settings: settings,
    onSave: saveSettings
  }), savedToast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '110px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: BRAND_BLUE,
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '999px',
      fontSize: '13px',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 100
    }
  }, "\u2713 Saved to history"), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: `1px solid ${RAIL}`,
      display: 'flex',
      padding: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(NavBtn, {
    active: tab === 'lookup',
    onClick: () => {
      setTab('lookup');
    },
    icon: /*#__PURE__*/React.createElement(Search, {
      size: 20
    }),
    label: "Lookup"
  }), /*#__PURE__*/React.createElement(NavBtn, {
    active: tab === 'saved',
    onClick: () => {
      setTab('saved');
      setViewJob(null);
    },
    icon: /*#__PURE__*/React.createElement(FileText, {
      size: 20
    }),
    label: `History (${savedJobs.length})`
  }), /*#__PURE__*/React.createElement(NavBtn, {
    active: tab === 'lishi',
    onClick: () => setTab('lishi'),
    icon: /*#__PURE__*/React.createElement('span', {style:{fontSize:'18px', lineHeight:1}}, '\uD83D\uDD11'),
    label: "Lishi"
  }), /*#__PURE__*/React.createElement(NavBtn, {
    active: tab === 'settings',
    onClick: () => setTab('settings'),
    icon: /*#__PURE__*/React.createElement(Settings, {
      size: 20
    }),
    label: "Settings"
  })));
}
function SectionLabel({
  num,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontSize: '11px',
      color: BRAND_GOLD,
      fontWeight: 700,
      letterSpacing: '0.05em'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '0.16em',
      fontWeight: 700,
      color: INK_MUTED,
      textTransform: 'uppercase'
    }
  }, text));
}
function NavBtn({
  active,
  onClick,
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      color: active ? BRAND_BLUE : INK_MUTED,
      padding: '6px',
      cursor: 'pointer',
      fontWeight: active ? 700 : 500,
      fontSize: '10px'
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, label));
}
function ResultCard({
  result,
  year,
  settings,
  onReset,
  onQuote
}) {
  const effectiveTier = getEffectiveTier(result.immoTier, settings);
  const t = TIER_STYLES[effectiveTier] || TIER_STYLES.classic;
  const isSfdCapable = effectiveTier === 'sfd_capable';
  const isXentryCapable = effectiveTier === 'xentry_capable';
  const isCapable = isSfdCapable || isXentryCapable;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    style: {
      background: 'transparent',
      border: 'none',
      color: BRAND_BLUE,
      fontSize: '14px',
      fontWeight: 600,
      padding: '4px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 18
  }), " New lookup")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: BRAND_BLUE,
      color: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '12px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: BRAND_GOLD
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.18em',
      color: BRAND_GOLD,
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, "IDENTIFIED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.1
    }
  }, year, " ", result.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      fontWeight: 500,
      marginTop: '2px',
      opacity: 0.9
    }
  }, result.model)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'monospace',
      fontSize: '11px',
      background: 'rgba(232, 179, 60, 0.15)',
      color: BRAND_GOLD,
      padding: '6px 10px',
      border: `1px solid ${BRAND_GOLD}`,
      borderRadius: '4px',
      letterSpacing: '0.05em',
      fontWeight: 700
    }
  }, result.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.ink,
      padding: '14px 16px',
      borderRadius: '12px',
      marginBottom: '12px',
      border: result.immoTier === 'sfd2' ? `2px solid ${t.ink}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.18em',
      fontWeight: 700,
      marginBottom: '4px',
      opacity: 0.7
    }
  }, "IMMOBILIZER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '18px',
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, result.immo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '3px 8px',
      background: t.ink,
      color: t.bg,
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      marginTop: '4px'
    }
  }, t.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement(InfoTile, {
    label: "Key Blank",
    value: result.keyBlank,
    mono: true
  }), /*#__PURE__*/React.createElement(InfoTile, {
    label: "Frequency",
    value: result.freq,
    mono: true
  })), /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(Wrench, {
      size: 16
    }),
    title: "Tools (from your stack)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    }
  }, result.tools.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 10px',
      background: BG,
      border: `1px solid ${RAIL}`,
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: 600
    }
  }, t)))), /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(Zap, {
      size: 16
    }),
    title: "Software"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, result.software.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: '13px',
      color: INK
    }
  }, "\u2022 ", s)))), isCapable && /*#__PURE__*/React.createElement("div", {
    style: {
      background: BRAND_GOLD,
      color: BRAND_BLUE_DEEP,
      padding: '12px 14px',
      borderRadius: '10px',
      marginBottom: '12px',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Zap, {
    size: 18,
    style: {
      flexShrink: 0,
      marginTop: '1px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.05em',
      marginBottom: '2px'
    }
  }, "WITHIN YOUR CAPABILITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      lineHeight: 1.4
    }
  }, isSfdCapable && 'Your ODIS + GeKo stack handles this. Quote premium tier — GeKo token cost auto-added.', isXentryCapable && 'Your Xentry stack handles this. Quote premium tier — Xentry token cost auto-added.'))), result.nastf && /*#__PURE__*/React.createElement("div", {
    style: {
      background: BRAND_GOLD,
      color: BRAND_BLUE_DEEP,
      padding: '12px 14px',
      borderRadius: '10px',
      marginBottom: '12px',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Shield, {
    size: 18,
    style: {
      flexShrink: 0,
      marginTop: '1px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.05em',
      marginBottom: '2px'
    }
  }, "NASTF PASSCODE REQUIRED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      lineHeight: 1.4
    }
  }, "Authy / VSP login for security gateway functions."))), /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(FileText, {
      size: 16
    }),
    title: "Workflow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      lineHeight: 1.5,
      color: INK
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "OBD path:"), " ", result.obd), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Est. time:"), " ", result.estHours, " hr"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: INK_MUTED
    }
  }, result.notes))), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      width: '100%',
      padding: '16px',
      background: BRAND_BLUE,
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Calculator, {
    size: 16
  }), " Build Quote & Save"));
}
function SaveSheet({
  result,
  year,
  settings,
  onCancel,
  onSave
}) {
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [vin, setVin] = useState('');
  const [notes, setNotes] = useState('');
  const [photos, setPhotos] = useState([]);
  const [hours, setHours] = useState(result.estHours);
  const [partsCost, setPartsCost] = useState(settings.defaultKeyBlankCost);
  const [mobileFee, setMobileFee] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef(null);
  const labor = hours * settings.laborRate;
  const partsWithMarkup = partsCost * (1 + settings.partsMarkup / 100);
  const softwarePass = (result.aos ? settings.aosTicket : 0) + (result.erwin ? settings.erwinTicket : 0);
  const isSfdJob = result.immoTier === 'sfd1' || result.immoTier === 'sfd2';
  const isMercLocked = result.immoTier === 'merc_locked';
  const gekoCost = isSfdJob && settings.hasOdisGeko ? settings.gekoTokenCost : 0;
  const xentryCost = isMercLocked && settings.hasXentry ? settings.xentryTokenCost : 0;
  const nastf = result.nastf ? settings.nastfSurcharge : 0;
  const mobile = mobileFee ? settings.mobileFee : 0;
  const subtotal = labor + partsWithMarkup + softwarePass + gekoCost + xentryCost + nastf + mobile;
  const total = Math.max(0, subtotal - Number(discount || 0));
  async function handlePhotos(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setUploading(true);
    try {
      const newPhotos = [...photos];
      for (const f of files) {
        if (newPhotos.length >= 4) break;
        const compressed = await compressImage(f, 900, 0.65);
        newPhotos.push(compressed);
      }
      setPhotos(newPhotos);
    } catch (e) {
      alert('Could not process photo.');
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = '';
  }
  function removePhoto(idx) {
    setPhotos(photos.filter((_, i) => i !== idx));
  }
  function handleSave() {
    const job = {
      id: Date.now().toString(),
      savedAt: Date.now(),
      brand: result.brand,
      model: result.model,
      sub: result.sub,
      year,
      immo: result.immo,
      immoTier: result.immoTier,
      keyBlank: result.keyBlank,
      freq: result.freq,
      tools: result.tools,
      software: result.software,
      nastf: result.nastf,
      aos: result.aos,
      erwin: result.erwin,
      obd: result.obd,
      notes: result.notes,
      customer,
      phone,
      vin,
      customerNotes: notes,
      photos,
      hours,
      partsCost,
      mobileFee,
      discount: Number(discount || 0),
      labor,
      partsWithMarkup,
      softwarePass,
      gekoCost,
      xentryCost,
      nastfSurcharge: nastf,
      mobile,
      quotedPrice: Math.round(total)
    };
    onSave(job);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      background: 'transparent',
      border: 'none',
      color: BRAND_BLUE,
      fontSize: '14px',
      fontWeight: 600,
      padding: '4px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 18
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.16em',
      fontWeight: 700,
      color: INK_MUTED,
      textTransform: 'uppercase'
    }
  }, "Quote & Save")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: BRAND_BLUE,
      color: '#fff',
      borderRadius: '10px',
      padding: '12px 14px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.15em',
      color: BRAND_GOLD,
      fontWeight: 700
    }
  }, "VEHICLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 700
    }
  }, year, " ", result.brand, " ", result.model), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontFamily: 'monospace',
      opacity: 0.85
    }
  }, result.sub, " \xB7 ", result.immo)), /*#__PURE__*/React.createElement(SectionLabel, {
    num: "A",
    text: "Customer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(InputRow, {
    icon: /*#__PURE__*/React.createElement(User, {
      size: 16
    }),
    placeholder: "Customer name",
    value: customer,
    onChange: setCustomer
  }), /*#__PURE__*/React.createElement(InputRow, {
    icon: /*#__PURE__*/React.createElement(Phone, {
      size: 16
    }),
    placeholder: "Phone (optional)",
    value: phone,
    onChange: setPhone,
    type: "tel"
  }), /*#__PURE__*/React.createElement(InputRow, {
    icon: /*#__PURE__*/React.createElement(Hash, {
      size: 16
    }),
    placeholder: "VIN (optional)",
    value: vin,
    onChange: v => setVin(v.toUpperCase()),
    mono: true
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    num: "B",
    text: "Photos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '6px',
      marginBottom: '8px'
    }
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      aspectRatio: '1',
      borderRadius: '8px',
      overflow: 'hidden',
      border: `1px solid ${RAIL}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => removePhoto(i),
    style: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '22px',
      height: '22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 14
  })))), photos.length < 4 && /*#__PURE__*/React.createElement("button", {
    onClick: () => fileRef.current?.click(),
    disabled: uploading,
    style: {
      aspectRatio: '1',
      border: `1px dashed ${RAIL}`,
      background: CARD,
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      color: INK_MUTED,
      fontSize: '10px',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, uploading ? '…' : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Camera, {
    size: 20
  }), " ADD"))), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    multiple: true,
    onChange: handlePhotos,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: INK_MUTED
    }
  }, "Up to 4 photos. Compressed automatically.")), /*#__PURE__*/React.createElement(SectionLabel, {
    num: "C",
    text: "Pricing"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '12px',
      padding: '14px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(PriceRow, {
    label: "Hours",
    right: /*#__PURE__*/React.createElement("input", {
      type: "number",
      inputMode: "decimal",
      step: "0.25",
      value: hours,
      onChange: e => setHours(Number(e.target.value)),
      style: {
        width: '70px',
        padding: '6px 8px',
        border: `1px solid ${RAIL}`,
        borderRadius: '6px',
        textAlign: 'right',
        fontFamily: 'monospace',
        fontSize: '13px'
      }
    })
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: `Labor (@ $${settings.laborRate}/hr)`,
    value: labor,
    muted: true
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: "Parts cost",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: INK_MUTED,
        fontSize: '13px'
      }
    }, "$"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      inputMode: "decimal",
      value: partsCost,
      onChange: e => setPartsCost(Number(e.target.value)),
      style: {
        width: '65px',
        padding: '6px 8px',
        border: `1px solid ${RAIL}`,
        borderRadius: '6px',
        textAlign: 'right',
        fontFamily: 'monospace',
        fontSize: '13px'
      }
    }))
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: `Parts (+${settings.partsMarkup}% markup)`,
    value: partsWithMarkup,
    muted: true
  }), softwarePass > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: result.aos && result.erwin ? 'AOS + erWin pass-through' : result.aos ? 'BMW AOS pass-through' : 'erWin pass-through',
    value: softwarePass
  }), gekoCost > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "GeKo token (SFD session)",
    value: gekoCost
  }), xentryCost > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "Xentry token (Merc session)",
    value: xentryCost
  }), nastf > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "NASTF gateway",
    value: nastf
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: "Mobile / travel fee",
    right: /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        fontFamily: 'monospace',
        color: mobileFee ? INK : INK_MUTED
      }
    }, "$", mobileFee ? settings.mobileFee : 0), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: mobileFee,
      onChange: e => setMobileFee(e.target.checked),
      style: {
        width: '18px',
        height: '18px'
      }
    }))
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: "Discount",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: INK_MUTED,
        fontSize: '13px'
      }
    }, "-$"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      inputMode: "decimal",
      value: discount,
      onChange: e => setDiscount(e.target.value),
      style: {
        width: '65px',
        padding: '6px 8px',
        border: `1px solid ${RAIL}`,
        borderRadius: '6px',
        textAlign: 'right',
        fontFamily: 'monospace',
        fontSize: '13px'
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${RAIL}`,
      marginTop: '10px',
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.16em',
      fontWeight: 700,
      color: BRAND_BLUE,
      textTransform: 'uppercase'
    }
  }, "Quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '28px',
      fontWeight: 700,
      color: BRAND_BLUE,
      fontFamily: 'monospace'
    }
  }, "$", Math.round(total)))), /*#__PURE__*/React.createElement(SectionLabel, {
    num: "D",
    text: "Notes"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    rows: "3",
    placeholder: "Job-specific notes, customer instructions, etc.",
    style: {
      width: '100%',
      padding: '12px',
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      fontSize: '14px',
      fontFamily: 'inherit',
      resize: 'vertical',
      marginBottom: '20px',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      width: '100%',
      padding: '16px',
      background: BRAND_GOLD,
      color: BRAND_BLUE,
      border: 'none',
      borderRadius: '10px',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Save, {
    size: 16
  }), " Save Job"));
}
function PriceRow({
  label,
  value,
  right,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 0',
      minHeight: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: muted ? INK_MUTED : INK,
      fontWeight: muted ? 400 : 500
    }
  }, label), right ? right : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'monospace',
      fontSize: '13px',
      fontWeight: 600,
      color: muted ? INK_MUTED : INK
    }
  }, "$", Math.round(value)));
}
function InputRow({
  icon,
  placeholder,
  value,
  onChange,
  type = 'text',
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: INK_MUTED,
      marginRight: '8px'
    }
  }, icon), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      padding: '14px 0',
      fontSize: '15px',
      background: 'transparent',
      fontFamily: mono ? 'monospace' : 'inherit',
      letterSpacing: mono ? '0.05em' : 'normal',
      outline: 'none'
    }
  }));
}
function InfoTile({
  label,
  value,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.16em',
      color: INK_MUTED,
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, label.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      color: INK,
      fontFamily: mono ? 'monospace' : 'inherit',
      letterSpacing: mono ? '0.02em' : 'normal'
    }
  }, value));
}
function SectionCard({
  icon,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '12px',
      padding: '14px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '10px',
      color: BRAND_BLUE
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.16em',
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, title)), children);
}
function JobDetail({
  job,
  onBack,
  onDelete,
  settings
}) {
  const effectiveTier = getEffectiveTier(job.immoTier, settings);
  const t = TIER_STYLES[effectiveTier] || TIER_STYLES.classic;
  const [confirmDelete, setConfirmDelete] = useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '20px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'transparent',
      border: 'none',
      color: BRAND_BLUE,
      fontSize: '14px',
      fontWeight: 600,
      padding: '4px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 18
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: BRAND_BLUE,
      color: '#fff',
      borderRadius: '12px',
      padding: '18px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: BRAND_GOLD,
      fontWeight: 700
    }
  }, "SAVED JOB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      fontWeight: 700,
      marginTop: '2px'
    }
  }, job.year, " ", job.brand, " ", job.model), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontFamily: 'monospace',
      opacity: 0.85
    }
  }, job.sub), job.quotedPrice > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingTop: '10px',
      borderTop: '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.16em',
      color: BRAND_GOLD,
      fontWeight: 700
    }
  }, "QUOTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '24px',
      fontWeight: 700,
      fontFamily: 'monospace',
      color: BRAND_GOLD
    }
  }, "$", job.quotedPrice))), (job.customer || job.phone || job.vin) && /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(User, {
      size: 16
    }),
    title: "Customer"
  }, job.customer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '4px'
    }
  }, job.customer), job.phone && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: INK,
      fontFamily: 'monospace'
    }
  }, job.phone), job.vin && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: INK_MUTED,
      fontFamily: 'monospace',
      marginTop: '4px',
      letterSpacing: '0.05em'
    }
  }, "VIN: ", job.vin)), job.photos && job.photos.length > 0 && /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(Camera, {
      size: 16
    }),
    title: `Photos (${job.photos.length})`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '6px'
    }
  }, job.photos.map((p, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: p,
    alt: "",
    style: {
      width: '100%',
      borderRadius: '8px',
      border: `1px solid ${RAIL}`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.ink,
      padding: '14px 16px',
      borderRadius: '12px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.18em',
      fontWeight: 700,
      marginBottom: '4px',
      opacity: 0.7
    }
  }, "IMMOBILIZER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      fontWeight: 700
    }
  }, job.immo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '3px 8px',
      background: t.ink,
      color: t.bg,
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      marginTop: '6px'
    }
  }, t.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement(InfoTile, {
    label: "Key Blank",
    value: job.keyBlank,
    mono: true
  }), /*#__PURE__*/React.createElement(InfoTile, {
    label: "Frequency",
    value: job.freq,
    mono: true
  })), job.quotedPrice > 0 && /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(DollarSign, {
      size: 16
    }),
    title: "Quote Breakdown"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement(PriceRow, {
    label: `Labor (${job.hours} hr)`,
    value: job.labor,
    muted: true
  }), /*#__PURE__*/React.createElement(PriceRow, {
    label: "Parts",
    value: job.partsWithMarkup,
    muted: true
  }), job.softwarePass > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "Software pass-through",
    value: job.softwarePass,
    muted: true
  }), job.gekoCost > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "GeKo token",
    value: job.gekoCost,
    muted: true
  }), job.xentryCost > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "Xentry token",
    value: job.xentryCost,
    muted: true
  }), job.nastfSurcharge > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "NASTF",
    value: job.nastfSurcharge,
    muted: true
  }), job.mobile > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "Mobile fee",
    value: job.mobile,
    muted: true
  }), job.discount > 0 && /*#__PURE__*/React.createElement(PriceRow, {
    label: "Discount",
    value: -job.discount,
    muted: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${RAIL}`,
      marginTop: '8px',
      paddingTop: '8px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontFamily: 'monospace'
    }
  }, "$", job.quotedPrice)))), /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(Wrench, {
      size: 16
    }),
    title: "Tools Used"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    }
  }, job.tools.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 10px',
      background: BG,
      border: `1px solid ${RAIL}`,
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: 600
    }
  }, t)))), job.customerNotes && /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(FileText, {
      size: 16
    }),
    title: "Notes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      whiteSpace: 'pre-wrap'
    }
  }, job.customerNotes)), /*#__PURE__*/React.createElement(SectionCard, {
    icon: /*#__PURE__*/React.createElement(FileText, {
      size: 16
    }),
    title: "Workflow Reference"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "OBD:"), " ", job.obd), /*#__PURE__*/React.createElement("div", {
    style: {
      color: INK_MUTED
    }
  }, job.notes))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: INK_MUTED,
      textAlign: 'center',
      marginBottom: '14px'
    }
  }, "Saved ", new Date(job.savedAt).toLocaleString()), !confirmDelete && /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmDelete(true),
    style: {
      width: '100%',
      padding: '14px',
      background: 'transparent',
      color: '#9E1A1A',
      border: `1px solid #9E1A1A`,
      borderRadius: '10px',
      fontWeight: 600,
      fontSize: '13px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement(Trash2, {
    size: 14
  }), " Delete Job"), confirmDelete && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmDelete(false),
    style: {
      flex: 1,
      padding: '14px',
      background: CARD,
      color: INK,
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      fontWeight: 600,
      fontSize: '13px',
      cursor: 'pointer'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      flex: 1,
      padding: '14px',
      background: '#9E1A1A',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontWeight: 700,
      fontSize: '13px',
      cursor: 'pointer'
    }
  }, "Confirm Delete")));
}
function SettingsTab({
  settings,
  onSave
}) {
  const [local, setLocal] = useState(settings);
  const [saved, setSaved] = useState(false);
  function update(key, val) {
    const newSettings = {
      ...local,
      [key]: typeof val === 'boolean' ? val : Number(val) || 0
    };
    setLocal(newSettings);
    onSave(newSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: INK_MUTED,
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: INK_MUTED
    }
  }, "Toggle on as your stack expands. Affects what shows as \"refer\" vs. \"premium tier\".")), /*#__PURE__*/React.createElement(SettingToggleRow, {
    label: "ODIS Service + GeKo",
    sub: "Audi/VW SFD1 + SFD2 jobs become premium tier",
    value: local.hasOdisGeko,
    onChange: v => update('hasOdisGeko', v)
  }), local.hasOdisGeko && /*#__PURE__*/React.createElement(SettingRow, {
    label: "GeKo token cost (per job)",
    value: local.gekoTokenCost,
    onChange: v => update('gekoTokenCost', v)
  }), /*#__PURE__*/React.createElement(SettingToggleRow, {
    label: "Mercedes Xentry + Online Auth",
    sub: "W223, W214, EQS/EQE, GLC X254 become premium tier",
    value: local.hasXentry,
    onChange: v => update('hasXentry', v)
  }), local.hasXentry && /*#__PURE__*/React.createElement(SettingRow, {
    label: "Xentry token cost (per job)",
    value: local.xentryTokenCost,
    onChange: v => update('xentryTokenCost', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: INK_MUTED,
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, "SHOP RATES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: INK_MUTED
    }
  }, "Used by the quote calculator. Saves as you edit.")), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Labor rate",
    suffix: "/ hr",
    value: local.laborRate,
    onChange: v => update('laborRate', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Mobile / travel fee",
    value: local.mobileFee,
    onChange: v => update('mobileFee', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "BMW AOS pass-through",
    value: local.aosTicket,
    onChange: v => update('aosTicket', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "erWin / GeKo pass-through",
    value: local.erwinTicket,
    onChange: v => update('erwinTicket', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "NASTF surcharge",
    value: local.nastfSurcharge,
    onChange: v => update('nastfSurcharge', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Default key blank cost",
    value: local.defaultKeyBlankCost,
    onChange: v => update('defaultKeyBlankCost', v)
  }), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Parts markup",
    suffix: "%",
    value: local.partsMarkup,
    onChange: v => update('partsMarkup', v),
    isPercent: true
  }), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '110px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: BRAND_BLUE,
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 100
    }
  }, "\u2713 Saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px',
      padding: '14px',
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '12px',
      fontSize: '12px',
      color: INK_MUTED,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: INK
    }
  }, "Phantom Key & ECU"), /*#__PURE__*/React.createElement("br", null), "Where Every Key Has A Code", /*#__PURE__*/React.createElement("br", null), "phantomkeyecu.com \xB7 (574) 367-5775"));
}
function SettingToggleRow({
  label,
  sub,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!value),
    style: {
      background: value ? BRAND_BLUE : CARD,
      border: `1px solid ${value ? BRAND_BLUE : RAIL}`,
      borderRadius: '10px',
      padding: '14px',
      marginBottom: '8px',
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      color: value ? '#fff' : INK,
      marginBottom: '2px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: value ? 'rgba(255,255,255,0.8)' : INK_MUTED
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '26px',
      borderRadius: '999px',
      background: value ? BRAND_GOLD : RAIL,
      position: 'relative',
      flexShrink: 0,
      transition: 'background 0.15s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '3px',
      left: value ? '21px' : '3px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      transition: 'left 0.15s'
    }
  })));
}
function SettingRow({
  label,
  value,
  onChange,
  suffix,
  isPercent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      border: `1px solid ${RAIL}`,
      borderRadius: '10px',
      padding: '14px',
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, !isPercent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: INK_MUTED,
      fontSize: '14px'
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      width: '80px',
      padding: '8px 10px',
      border: `1px solid ${RAIL}`,
      borderRadius: '6px',
      textAlign: 'right',
      fontFamily: 'monospace',
      fontSize: '14px',
      fontWeight: 600
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: INK_MUTED,
      fontSize: '12px',
      marginLeft: '4px'
    }
  }, suffix)));
}
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(/*#__PURE__*/React.createElement(PhantomKeyTool, null));

// ====== LISHI REFERENCE DATABASE ======
const LISHI_TOOLS = [
  { tool:'HU92', name:'HU92 Twin Lifter', owned:true, makes:['BMW','MINI'], years:[1992,2013], models:'E36, E46, E39, E53, E60, E65, E83, E87, E90, MINI R50/R52/R53/R55/R56', notes:'E-chassis BMW. Pick and decode door lock cylinder for AKL bitting. HU92 blank for CAS1/EWS2/EWS3. Do NOT pick ignition cylinder.' },
  { tool:'HU100R', name:'HU100R V.3', owned:true, makes:['BMW','MINI'], years:[2011,2026], models:'F10/F20/F22/F25/F30/F32/F48/F15/F16/F01, MINI F55/F56, G20/G30/G01/G05', notes:'F and G chassis BMW. V.3 picks and reads simultaneously. Required for CAS4+/FEM/BDC AKL door decode. Verify 315MHz (US) vs 434MHz (EU) before ordering blank.' },
  { tool:'HU66', name:'HU66 Twin Lifter', owned:true, makes:['Audi','VW','Porsche'], years:[1997,2026], models:'Audi A3/A4/A5/A6/A7/A8/Q3/Q5/Q7/Q8, VW Golf/Jetta/Passat/Tiguan/Atlas, Porsche Cayenne/Panamera', notes:'All VAG HU66 blade vehicles. Twin lifter picks and reads simultaneously. Use on door cylinder for Immo3/Immo4/Immo5 AKL decode.' },
  { tool:'TOY2014', name:'TOY2014', owned:true, makes:['Toyota','Lexus','Scion'], years:[2003,2018], models:'Camry, Corolla, RAV4, Highlander, Tacoma, Tundra, 4Runner, Sienna, Lexus ES/IS/RX/GS/LS', notes:'Toyota/Lexus 4D and G chip blade key vehicles. Pick and decode door lock for AKL bitting. Not for smart key vehicles.' },
  { tool:'HU101', name:'HU101', owned:false, makes:['Ford','Lincoln','Volvo','Land Rover'], years:[2000,2022], models:'F-150, Explorer, Escape, Ranger, Transit, Lincoln MKZ/Navigator, Volvo XC60/XC90, Land Rover', notes:'Main Ford/Lincoln blade profile. Very high volume — essential for Ford PATS work.' },
  { tool:'B111', name:'B111 (GM)', owned:false, makes:['Chevrolet','GMC','Cadillac'], years:[2003,2026], models:'Silverado, Sierra, Malibu, Equinox, Impala, Tahoe, Yukon, Escalade', notes:'Most common GM key profile. B111-PT is transponder version (HSM/PassKey III+). Extremely high volume.' },
  { tool:'HY18', name:'HY18 (Hyundai/Kia)', owned:false, makes:['Hyundai','Kia','Genesis'], years:[2006,2022], models:'Sonata, Elantra, Tucson, Santa Fe, Optima, Forte, Soul, Sportage', notes:'Standard Hyundai/Kia blade profile. High volume in Michiana market.' },
  { tool:'NSN14', name:'NSN14 (Nissan)', owned:false, makes:['Nissan','Infiniti'], years:[2000,2018], models:'Altima, Maxima, Sentra, Frontier, Titan, Pathfinder, Rogue, Q50/QX60', notes:'Main Nissan NATS 4/5 blade profile. High volume platform.' }
];

function LishiTab() {
  const [search, setSearch] = React.useState('');
  const [owned, setOwned] = React.useState(false);
  const filtered = LISHI_TOOLS.filter(t => {
    const q = search.toLowerCase();
    const matchQ = !q || t.tool.toLowerCase().includes(q) || t.name.toLowerCase().includes(q) || t.makes.some(m => m.toLowerCase().includes(q)) || t.models.toLowerCase().includes(q);
    return matchQ && (!owned || t.owned);
  });
  return React.createElement('main', {style:{padding:'16px'}},
    React.createElement('div', {style:{background:'#fff', border:'1px solid #E5E5EA', borderRadius:'10px', padding:'0 12px', display:'flex', alignItems:'center', gap:'8px', marginBottom:'12px'}},
      React.createElement('span', {style:{color:'#666', fontSize:'16px'}}, '\uD83D\uDD0D'),
      React.createElement('input', {type:'text', value:search, onChange:function(e){setSearch(e.target.value);}, placeholder:'Search tool, make, or model...', style:{flex:1, border:'none', padding:'12px 0', fontSize:'14px', background:'transparent', outline:'none'}})
    ),
    React.createElement('div', {style:{display:'flex', gap:'8px', marginBottom:'16px'}},
      React.createElement('button', {onClick:function(){setOwned(false);}, style:{padding:'6px 14px', borderRadius:'999px', border:'1px solid '+(!owned ? '#101A69' : '#E5E5EA'), background:!owned ? '#101A69' : '#fff', color:!owned ? '#fff' : '#666', fontSize:'12px', fontWeight:600, cursor:'pointer'}}, 'All Tools'),
      React.createElement('button', {onClick:function(){setOwned(true);}, style:{padding:'6px 14px', borderRadius:'999px', border:'1px solid '+(owned ? '#101A69' : '#E5E5EA'), background:owned ? '#101A69' : '#fff', color:owned ? '#fff' : '#666', fontSize:'12px', fontWeight:600, cursor:'pointer'}}, 'In My Stack')
    ),
    filtered.length === 0
      ? React.createElement('div', {style:{textAlign:'center', color:'#666', padding:'40px 0', fontSize:'14px'}}, 'No tools match.')
      : filtered.map(function(t) { return React.createElement('div', {key:t.tool, style:{background:'#fff', border:'2px solid '+(t.owned ? '#101A69' : '#E5E5EA'), borderRadius:'12px', padding:'14px', marginBottom:'10px'}},
          React.createElement('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px'}},
            React.createElement('div', null,
              React.createElement('div', {style:{fontWeight:700, fontSize:'16px', color:'#1A1A1A'}}, t.name),
              React.createElement('div', {style:{fontFamily:'monospace', fontSize:'11px', color:'#E8B33C', fontWeight:700, letterSpacing:'0.05em', marginTop:'2px'}}, 'PROFILE: '+t.tool)
            ),
            t.owned
              ? React.createElement('span', {style:{background:'#101A69', color:'#fff', padding:'3px 8px', borderRadius:'4px', fontSize:'10px', fontWeight:700}}, 'IN STACK')
              : React.createElement('span', {style:{background:'#F5F5F7', color:'#666', padding:'3px 8px', borderRadius:'4px', fontSize:'10px', fontWeight:700, border:'1px solid #E5E5EA'}}, 'NOT OWNED')
          ),
          React.createElement('div', {style:{display:'flex', flexWrap:'wrap', gap:'5px', marginBottom:'8px'}},
            t.makes.map(function(m) { return React.createElement('span', {key:m, style:{background:'#F5F5F7', border:'1px solid #E5E5EA', borderRadius:'4px', padding:'2px 8px', fontSize:'11px', fontWeight:600}}, m); })
          ),
          React.createElement('div', {style:{fontSize:'12px', color:'#666', marginBottom:'6px'}},
            React.createElement('strong', {style:{color:'#1A1A1A'}}, 'Years: '), t.years[0]+'\u2013'+t.years[1]
          ),
          React.createElement('div', {style:{fontSize:'12px', color:'#1A1A1A', marginBottom:'8px', lineHeight:1.4}},
            React.createElement('strong', null, 'Models: '), t.models
          ),
          React.createElement('div', {style:{background:'#F5F5F7', borderRadius:'8px', padding:'10px', fontSize:'12px', color:'#666', lineHeight:1.5}}, t.notes)
        ); })
  );
}
