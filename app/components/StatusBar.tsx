"use client";

import { useState, useEffect } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [pingVal, setPingVal] = useState(12);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingVal(Math.floor(Math.random() * 8) + 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#050505",
        borderBottom: "1px solid rgba(0,255,209,0.4)",
        boxShadow: "0 0 12px rgba(0,255,209,0.15)",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#AAAAAA",
        willChange: "transform",
        overflowX: "hidden",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
        <span style={{ color: "#00FFD1", fontWeight: 700 }} className="neon-flicker">
          CIBAI.STUDIO
        </span>
        <span style={{ color: "#333" }}>|</span>
        <span style={{ color: "#555" }}>v3.0</span>
        <span style={{ color: "#333" }}>|</span>
        <span
          style={{ color: "#00FFD1", display: "flex", alignItems: "center", gap: "5px" }}
          className="blink"
        >
          <span className="status-dot-cyan" />
          ONLINE
        </span>
      </div>

      {/* Center */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#444",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span>
          [ CIBAI.STUDIO v3.0{" "}
          <span style={{ color: "#555" }}>//</span>{" "}
          <span style={{ color: "#00FFD1" }}>BERGA, BARCELONA, SPAIN</span>{" "}
          <span style={{ color: "#555" }}>//</span>{" "}
          <span style={{ color: "#FF00A8" }} className="blink-slow">STATUS: ONLINE</span>{" "}
          ]
        </span>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#555", flexShrink: 0 }}>
        <span style={{ color: "#333" }}>|</span>
        <span style={{ color: "#00FFD1" }}>SYS_OK</span>
        <span style={{ color: "#333" }}>|</span>
        <span style={{ color: "#FF00A8" }} className="blink-slow">
          PING: {mounted ? pingVal : "12"}ms
        </span>
        <span style={{ color: "#333" }}>|</span>
        <span
          style={{
            fontVariantNumeric: "tabular-nums",
            color: "#AAAAAA",
          }}
        >
          {mounted ? time : "00:00:00"}
        </span>
      </div>
    </div>
  );
}
