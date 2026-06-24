"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "/world-110m.json";

const LOCATIONS = [
  { id: "pk",  label: "Pakistan",     coords: [70, 30]  as [number, number], primary: true  },
  { id: "uae", label: "UAE",          coords: [55, 25]  as [number, number], primary: false },
  { id: "cn",  label: "China",        coords: [104, 34] as [number, number], primary: false },
  { id: "kz",  label: "Central Asia", coords: [63, 48]  as [number, number], primary: false },
  { id: "sa",  label: "Saudi Arabia", coords: [45, 24]  as [number, number], primary: false },
  { id: "my",  label: "SE Asia",      coords: [101, 4]  as [number, number], primary: false },
  { id: "gb",  label: "Europe",       coords: [10, 52]  as [number, number], primary: false },
];

export function WorldMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [65, 25], scale: 175 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies
          geography={GEO_URL}
          onError={() => setLoaded(false)}
        >
          {({ geographies }) => {
            if (!loaded) setLoaded(true);
            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(201,162,39,0.06)"
                stroke="rgba(201,162,39,0.25)"
                strokeWidth={0.5}
                tabIndex={-1}
                style={{
                  default: { outline: "none" },
                  hover:   { outline: "none", fill: "rgba(201,162,39,0.10)" },
                  pressed: { outline: "none" },
                }}
              />
            ));
          }}
        </Geographies>

        {LOCATIONS.map((loc, i) => (
          <Marker key={loc.id} coordinates={loc.coords}>
            {/* Pulse ring — Pakistan only */}
            {loc.primary && (
              <motion.circle
                r={8}
                fill="none"
                stroke="rgba(201,162,39,0.45)"
                strokeWidth={1}
                animate={{ r: [6, 14], opacity: [0.6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            {/* Dot */}
            <motion.circle
              r={loc.primary ? 4 : 2.5}
              fill={loc.primary ? "#c9a227" : "rgba(201,162,39,0.65)"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            />
            {/* Label */}
            <motion.text
              y={loc.primary ? -10 : -7}
              textAnchor="middle"
              fontSize={loc.primary ? "8" : "7"}
              fill={loc.primary ? "rgba(201,162,39,0.95)" : "rgba(201,162,39,0.65)"}
              fontFamily="sans-serif"
              letterSpacing="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
            >
              {loc.label}
            </motion.text>
          </Marker>
        ))}
      </ComposableMap>
    </motion.div>
  );
}
