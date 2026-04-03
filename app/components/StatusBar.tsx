"use client";

import { useState, useEffect } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#0A0A0A",
        borderBottom: "1px solid #FF2D00",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#EDEDED",
        willChange: "transform",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span style={{ color: "#FF2D00", fontWeight: 700 }}>CIBAI.STUDIO</span>
        <span style={{ color: "#555" }}>|</span>
        <span style={{ color: "#7A7A7A" }}>SYS v2.0</span>
        <span style={{ color: "#555" }}>|</span>
        <span
          style={{ color: "#00C9B4" }}
          className="blink"
        >
          ● ONLINE
        </span>
      </div>

      {/* Center */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#7A7A7A" }}>
        <span>[ CIBAI.STUDIO // SISTEMA OPERATIVO v2.0 // DISEÑO Y DESARROLLO WEB ]</span>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#7A7A7A" }}>
        <span style={{ color: "#00C9B4" }}>SYS_OK</span>
        <span style={{ color: "#555" }}>|</span>
        <span style={{ fontVariantNumeric: "tabular-nums", color: "#EDEDED" }}>
          {mounted ? time : "00:00:00"}
        </span>
      </div>
    </div>
  );
}
