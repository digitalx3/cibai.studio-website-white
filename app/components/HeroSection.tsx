"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    headline: ["DISEÑO", "QUE ROMPE", "SISTEMAS"],
    glitchWord: "QUE ROMPE",
    tagline: "// Creamos experiencias digitales que no se olvidan_",
    cta1: "[ INICIAR_PROYECTO.exe ]",
    cta2: "[ VER_PORTFOLIO ]",
    accentColor: "#00FFD1",
    label: "[ CIBAI.STUDIO // INICIO_SESIÓN ]",
  },
  {
    headline: ["TU NEGOCIO", "MERECE", "IMPACTAR"],
    glitchWord: "MERECE",
    tagline: "// Webs que convierten. Webapps que escalan. Código que dura_",
    cta1: "[ HABLEMOS_AHORA.exe ]",
    cta2: "[ NUESTROS_SERVICIOS ]",
    accentColor: "#FF00A8",
    label: "[ CIBAI.STUDIO // NUEVA_SESIÓN ]",
  },
];

const TYPING_STRINGS = [
  "// Bienvenido al futuro del diseño digital_",
  "// Construimos webs que rompen esquemas_",
  "// Código limpio. Diseño brutal. Resultados reales_",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideVisible, setSlideVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setSlideVisible(false);
      setTimeout(() => {
        setCurrentSlide((s) => (s + 1) % SLIDES.length);
        setSlideVisible(true);
        setIsTransitioning(false);
      }, 400);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide || isTransitioning) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsTransitioning(true);
    setSlideVisible(false);
    setTimeout(() => {
      setCurrentSlide(idx);
      setSlideVisible(true);
      setIsTransitioning(false);
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setSlideVisible(false);
        setTimeout(() => {
          setCurrentSlide((s) => (s + 1) % SLIDES.length);
          setSlideVisible(true);
          setIsTransitioning(false);
        }, 400);
      }, 5000);
    }, 400);
  };

  // Typing effect
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

  const slide = SLIDES[currentSlide];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "88px",
        paddingBottom: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid lines neon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,209,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,209,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Decorative neon line top-left cyan */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: 0,
          width: "180px",
          height: "2px",
          backgroundColor: "#00FFD1",
          boxShadow: "0 0 16px rgba(0,255,209,0.7)",
        }}
        aria-hidden="true"
      />

      {/* Decorative neon line bottom-right magenta */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: 0,
          width: "120px",
          height: "2px",
          backgroundColor: "#FF00A8",
          boxShadow: "0 0 16px rgba(255,0,168,0.7)",
        }}
        aria-hidden="true"
      />

      {/* Big decorative number — neon outline */}
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
          WebkitTextStroke: `1px rgba(0,255,209,0.07)`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
          transition: "all 0.5s ease",
        }}
        aria-hidden="true"
      >
        {String(currentSlide + 1).padStart(2, "0")}
      </div>

      {/* Glitch corner accents */}
      <div
        style={{
          position: "absolute",
          top: "88px",
          left: "32px",
          width: "20px",
          height: "20px",
          borderTop: "2px solid #00FFD1",
          borderLeft: "2px solid #00FFD1",
          boxShadow: "0 0 8px rgba(0,255,209,0.5)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "32px",
          width: "20px",
          height: "20px",
          borderBottom: "2px solid #FF00A8",
          borderRight: "2px solid #FF00A8",
          boxShadow: "0 0 8px rgba(255,0,168,0.5)",
        }}
        aria-hidden="true"
      />

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
            color: slide.accentColor,
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textShadow: `0 0 8px ${slide.accentColor}80`,
            opacity: slideVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <span className="blink" style={{ color: slide.accentColor }}>▶</span>
          <span>{slide.label}</span>
        </div>

        {/* Main headline — slide content */}
        <div
          style={{
            marginBottom: "32px",
            opacity: slideVisible ? 1 : 0,
            transform: slideVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(56px, 10vw, 148px)",
              fontWeight: 800,
              color: "#EDEDED",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {slide.headline[0]}
            <br />
            <span
              className="glitch-text"
              data-text={slide.glitchWord}
              style={{
                color: slide.accentColor,
                position: "relative",
                textShadow: `0 0 20px ${slide.accentColor}60`,
              }}
            >
              {slide.glitchWord}
            </span>
            <br />
            {slide.headline[2]}
          </h1>
        </div>

        {/* Typing subtitle */}
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "clamp(12px, 1.8vw, 18px)",
            color: "#888888",
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
              backgroundColor: "#00FFD1",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.05s",
              boxShadow: "0 0 6px rgba(0,255,209,0.8)",
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
            opacity: slideVisible ? 1 : 0,
            transform: slideVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
          }}
        >
          <a
            href="#contacto"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 700,
              color: "#0A0A0A",
              backgroundColor: slide.accentColor,
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: `2px solid ${slide.accentColor}`,
              transition: "all 0.2s",
              willChange: "transform",
              boxShadow: `0 0 20px ${slide.accentColor}50`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = slide.accentColor;
              el.style.boxShadow = `4px 4px 0 ${slide.accentColor}, 0 0 30px ${slide.accentColor}60`;
              el.style.transform = "translate(-2px, -2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = slide.accentColor;
              el.style.color = "#0A0A0A";
              el.style.boxShadow = `0 0 20px ${slide.accentColor}50`;
              el.style.transform = "translate(0,0)";
            }}
          >
            {slide.cta1}
          </a>

          <a
            href={currentSlide === 0 ? "#portfolio" : "#servicios"}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 600,
              color: "#888888",
              backgroundColor: "transparent",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "2px solid rgba(237,237,237,0.15)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#00FFD1";
              el.style.color = "#00FFD1";
              el.style.boxShadow = "0 0 16px rgba(0,255,209,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(237,237,237,0.15)";
              el.style.color = "#888888";
              el.style.boxShadow = "none";
            }}
          >
            {slide.cta2}
          </a>
        </div>

        {/* Slide indicators */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: i === currentSlide ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === currentSlide ? s.accentColor : "#333",
                  boxShadow: i === currentSlide ? `0 0 10px ${s.accentColor}` : "none",
                  transition: "all 0.3s ease",
                  animation: i === currentSlide ? "pulse-neon-cyan 1.5s ease-in-out infinite" : "none",
                }}
              />
            </button>
          ))}
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "9px",
              color: "#444",
              letterSpacing: "0.12em",
              marginLeft: "8px",
            }}
          >
            {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "0",
            borderTop: "1px solid rgba(237,237,237,0.07)",
            paddingTop: "24px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "+120", label: "Proyectos completados", accent: "#00FFD1" },
            { value: "8+", label: "Años de experiencia", accent: "#FF00A8" },
            { value: "100%", label: "Código en producción", accent: "#00FFD1" },
            { value: "∞", label: "Café consumido", accent: "#FF00A8" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 160px",
                padding: "16px 24px",
                borderRight: i < 3 ? "1px solid rgba(237,237,237,0.06)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: stat.accent,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  textShadow: `0 0 20px ${stat.accent}50`,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#555555",
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
