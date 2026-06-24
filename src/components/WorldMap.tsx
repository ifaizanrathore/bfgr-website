"use client";

import { motion } from "framer-motion";

// Mercator: x = (lon+180)*(800/360), y = (90-lat)*(400/180)
const continents = [
  {
    id: "north-america",
    d: "M105,55 L125,40 L155,38 L180,42 L210,52 L240,65 L260,80 L265,105 L255,130 L235,155 L215,175 L200,188 L185,192 L165,185 L145,172 L125,158 L110,140 L100,115 L98,88 Z",
  },
  {
    id: "south-america",
    d: "M210,192 L240,183 L270,190 L290,210 L300,238 L305,272 L298,315 L280,355 L260,378 L238,370 L220,348 L210,315 L208,278 L210,245 L208,218 Z",
  },
  {
    id: "europe",
    d: "M368,78 L385,68 L410,62 L440,60 L465,65 L488,75 L498,90 L492,108 L472,118 L448,124 L420,122 L395,115 L375,105 L365,92 Z",
  },
  {
    id: "africa",
    d: "M372,128 L405,118 L448,118 L488,128 L510,148 L518,175 L515,210 L508,255 L498,300 L478,332 L448,342 L415,335 L388,308 L372,272 L368,230 L368,183 L370,155 Z",
  },
  {
    id: "asia-main",
    d: "M488,72 L535,58 L590,48 L650,48 L705,52 L758,60 L792,75 L800,95 L792,115 L765,132 L730,145 L695,155 L658,160 L620,162 L585,158 L552,150 L522,138 L498,118 L488,98 Z",
  },
  {
    id: "asia-south",
    d: "M522,138 L558,150 L575,162 L578,182 L568,198 L548,205 L528,198 L515,182 L515,165 Z",
  },
  {
    id: "sea",
    d: "M620,162 L655,162 L678,172 L688,192 L682,212 L662,220 L640,215 L625,198 L618,180 Z",
  },
  {
    id: "australia",
    d: "M640,288 L678,272 L718,275 L748,288 L758,312 L752,342 L730,358 L698,362 L665,352 L645,332 L638,308 Z",
  },
];

// Key market locations [lon, lat] → x,y
const mkx = (lon: number) => (lon + 180) * (800 / 360);
const mky = (lat: number) => (90 - lat) * (400 / 180);

const locations = [
  { id: "pk",  label: "Pakistan",      lon: 70,  lat: 30,  primary: true  },
  { id: "uae", label: "UAE",           lon: 55,  lat: 25,  primary: false },
  { id: "cn",  label: "China",         lon: 104, lat: 34,  primary: false },
  { id: "kz",  label: "Central Asia",  lon: 63,  lat: 48,  primary: false },
  { id: "sa",  label: "Saudi Arabia",  lon: 45,  lat: 24,  primary: false },
  { id: "my",  label: "SE Asia",       lon: 101, lat: 4,   primary: false },
  { id: "gb",  label: "Europe",        lon: 10,  lat: 52,  primary: false },
];

// Arc path between two points (quadratic bezier curving upward)
function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - 40;
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

export function WorldMap() {
  const pk = locations.find((l) => l.id === "pk")!;
  const pkX = mkx(pk.lon);
  const pkY = mky(pk.lat);

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Continent fills */}
      {continents.map((c) => (
        <path
          key={c.id}
          d={c.d}
          fill="rgba(201,162,39,0.07)"
          stroke="rgba(201,162,39,0.22)"
          strokeWidth="0.8"
        />
      ))}

      {/* Connection arcs from Pakistan */}
      {locations
        .filter((l) => l.id !== "pk")
        .map((loc, i) => (
          <motion.path
            key={loc.id}
            d={arcPath(pkX, pkY, mkx(loc.lon), mky(loc.lat))}
            fill="none"
            stroke="rgba(201,162,39,0.3)"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: "easeInOut" }}
          />
        ))}

      {/* Location dots */}
      {locations.map((loc, i) => {
        const x = mkx(loc.lon);
        const y = mky(loc.lat);
        return (
          <motion.g
            key={loc.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
          >
            {/* Pulse ring for Pakistan */}
            {loc.primary && (
              <motion.circle
                cx={x} cy={y} r={10}
                fill="none"
                stroke="rgba(201,162,39,0.4)"
                strokeWidth="1"
                animate={{ r: [8, 16], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            {/* Dot */}
            <circle
              cx={x} cy={y}
              r={loc.primary ? 4 : 2.5}
              fill={loc.primary ? "#c9a227" : "rgba(201,162,39,0.6)"}
            />
            {/* Label */}
            <text
              x={x}
              y={y - (loc.primary ? 10 : 8)}
              textAnchor="middle"
              fontSize={loc.primary ? "8" : "7"}
              fill={loc.primary ? "rgba(201,162,39,0.9)" : "rgba(201,162,39,0.6)"}
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              {loc.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
