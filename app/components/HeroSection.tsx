"use client";

import { useState, useEffect } from "react";

const TYPING_STRINGS = [
  "// Bienvenido al futuro del diseño digital_",
  "// Construimos webs que rompen esquemas_",
  "// Código limpio. Diseño brutal. Resultados reales_",
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = TYPING_STRINGS[stringIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < currentString.length) {
            setTypedText(currentString.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 2200);
          }
        } else {
          if (charIndex > 0) {
            setTypedText(currentString.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
          }
        }
      },
      deleting ? 38 : 58
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "88px",
        paddingBottom: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Decorative neon line top-left */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: 0,
          width: "180px",
          height: "2px",
          backgroundColor: "#FF2D00",
          boxShadow: "0 0 12px rgba(255,45,0,0.5)",
        }}
        aria-hidden="true"
      />

      {/* Decorative neon line bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: 0,
          width: "120px",
          height: "2px",
          backgroundColor: "#00C9B4",
          boxShadow: "0 0 12px rgba(0,201,180,0.5)",
        }}
        aria-hidden="true"
      />

      {/* Big decorative number */}
      <div
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(200px, 30vw, 420px)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(10,10,10,0.06)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
        aria-hidden="true"
      >
        01
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Terminal label */}
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#FF2D00",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className="blink">▶</span>
          <span>[ CIBAI.STUDIO // INICIO_SESIÓN ]</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(56px, 10vw, 148px)",
              fontWeight: 800,
              color: "#0A0A0A",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            DISEÑO
            <br />
            <span
              className="glitch-text"
              data-text="QUE ROMPE"
              style={{
                color: "#FF2D00",
                position: "relative",
              }}
            >
              QUE ROMPE
            </span>
            <br />
            SISTEMAS
          </h1>
        </div>

        {/* Typing subtitle */}
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "clamp(12px, 1.8vw, 18px)",
            color: "#3A3A3A",
            letterSpacing: "0.02em",
            marginBottom: "48px",
            minHeight: "28px",
          }}
        >
          {typedText}
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "1.1em",
              backgroundColor: "#FF2D00",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.05s",
            }}
          />
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contacto"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: "#FF2D00",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "2px solid #FF2D00",
              transition: "all 0.2s",
              willChange: "transform",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#0A0A0A";
              el.style.borderColor = "#0A0A0A";
              el.style.boxShadow = "4px 4px 0 #FF2D00";
              el.style.transform = "translate(-2px, -2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#FF2D00";
              el.style.borderColor = "#FF2D00";
              el.style.boxShadow = "none";
              el.style.transform = "translate(0,0)";
            }}
          >
            [ INICIAR_PROYECTO.exe ]
          </a>

          <a
            href="#portfolio"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 600,
              color: "#0A0A0A",
              backgroundColor: "transparent",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "2px solid rgba(10,10,10,0.2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#00C9B4";
              el.style.color = "#00C9B4";
              el.style.boxShadow = "0 0 16px rgba(0,201,180,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(10,10,10,0.2)";
              el.style.color = "#0A0A0A";
              el.style.boxShadow = "none";
            }}
          >
            [ VER_PORTFOLIO ]
          </a>
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            gap: "0",
            borderTop: "1px solid rgba(10,10,10,0.1)",
            paddingTop: "24px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "+120", label: "Proyectos completados" },
            { value: "8+", label: "Años de experiencia" },
            { value: "100%", label: "Código en producción" },
            { value: "∞", label: "Café consumido" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 160px",
                padding: "16px 24px",
                borderRight: i < 3 ? "1px solid rgba(10,10,10,0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: i % 2 === 0 ? "#FF2D00" : "#0A0A0A",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#7A7A7A",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
