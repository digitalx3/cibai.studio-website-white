"use client";

const PASOS = [
  {
    num: "01",
    label: "ANÁLISIS",
    title: "Diagnóstico del Sistema",
    desc: "Auditamos tu proyecto, competencia y objetivos. Definimos arquitectura, stack y deliverables exactos antes de escribir una línea de código.",
    icon: "◈",
    accent: "#00FFD1",
  },
  {
    num: "02",
    label: "DISEÑO",
    title: "Arquitectura Visual",
    desc: "Wireframes, sistema de diseño y componentes en alta fidelidad. Tipografía, paleta y motion con identidad de marca propia.",
    icon: "◎",
    accent: "#FF00A8",
  },
  {
    num: "03",
    label: "DESARROLLO",
    title: "Build & Código Limpio",
    desc: "Frontend con hardware acceleration, animaciones con propósito y código semántico optimizado para producción. Zero placeholders.",
    icon: "◆",
    accent: "#00FFD1",
  },
  {
    num: "04",
    label: "DEPLOY",
    title: "Lanzamiento y Soporte",
    desc: "Deploy, testing cross-device, optimización SEO y performance. Entrega con documentación y soporte post-lanzamiento.",
    icon: "◉",
    accent: "#FF00A8",
  },
];

export default function ProcesoSection() {
  return (
    <section
      id="proceso"
      style={{
        backgroundColor: "#080808",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,0,168,0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top neon accent line magenta */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #FF00A8, #00FFD1, transparent)",
          boxShadow: "0 0 20px rgba(255,0,168,0.4)",
        }}
        aria-hidden="true"
      />

      {/* Background number watermark */}
      <div
        style={{
          position: "absolute",
          left: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(150px, 25vw, 380px)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,0,168,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
        aria-hidden="true"
      >
        PRO
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FF00A8",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textShadow: "0 0 8px rgba(255,0,168,0.5)",
              }}
            >
              <span className="blink-fast">■</span>
              <span>// PROCESO</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(36px, 6vw, 88px)",
                fontWeight: 800,
                color: "#EDEDED",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              METODOLOGÍA
            </h2>
          </div>

          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.06em",
              maxWidth: "300px",
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: "#00FFD1", textShadow: "0 0 6px rgba(0,255,209,0.5)" }}>STATUS:</span> SISTEMA_ACTIVO
            <br />
            <span style={{ color: "#FF00A8", textShadow: "0 0 6px rgba(255,0,168,0.5)" }}>PROTOCOLO:</span> AGILE_V3
            <br />
            <span style={{ color: "#00FFD1", textShadow: "0 0 6px rgba(0,255,209,0.5)" }}>ITERACIONES:</span> CONTINUAS
          </div>
        </div>

        {/* Steps horizontal layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Circuit connector line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              backgroundColor: "rgba(237,237,237,0.06)",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            {/* Animated progress neon */}
            <div
              style={{
                height: "100%",
                background: "linear-gradient(to right, #00FFD1, #FF00A8)",
                boxShadow: "0 0 8px rgba(0,255,209,0.6), 0 0 16px rgba(255,0,168,0.4)",
                animation: "progress-fill 3s ease-out 0.5s both",
              }}
            />
          </div>

          {PASOS.map((paso, i) => (
            <div
              key={paso.num}
              style={{
                padding: "0 20px",
                position: "relative",
                zIndex: 1,
                borderRight: i < 3 ? "1px solid rgba(237,237,237,0.05)" : "none",
              }}
            >
              {/* Number box neon */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  border: `2px solid ${paso.accent}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  position: "relative",
                  backgroundColor: "#080808",
                  boxShadow: `0 0 0 4px #080808, 0 0 15px ${paso.accent}40`,
                  animation: `${paso.accent === "#00FFD1" ? "pulse-border-cyan" : "pulse-border-magenta"} ${2 + i * 0.3}s ease-in-out infinite`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: paso.accent,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    textShadow: `0 0 16px ${paso.accent}`,
                  }}
                  className="blink"
                >
                  {paso.num}
                </span>

                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "-3px",
                    width: "6px",
                    height: "6px",
                    backgroundColor: paso.accent,
                    boxShadow: `0 0 6px ${paso.accent}`,
                  }}
                />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: paso.accent,
                  marginBottom: "10px",
                  textShadow: `0 0 8px ${paso.accent}60`,
                }}
              >
                {paso.icon} {paso.label}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#EDEDED",
                  letterSpacing: "-0.02em",
                  margin: "0 0 12px 0",
                }}
              >
                {paso.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "13px",
                  color: "#666666",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {paso.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom terminal line */}
        <div
          style={{
            marginTop: "80px",
            padding: "20px 24px",
            backgroundColor: "#050505",
            borderLeft: "3px solid #00FFD1",
            boxShadow: "0 0 20px rgba(0,255,209,0.1), inset 0 0 20px rgba(0,255,209,0.03)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            color: "#AAAAAA",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ color: "#00FFD1", textShadow: "0 0 8px rgba(0,255,209,0.8)" }}>$</span>
          <span>EJECUTANDO: cibai_deploy_protocol --full --optimized --berga-bcn</span>
          <span className="blink" style={{ color: "#FF00A8", textShadow: "0 0 6px rgba(255,0,168,0.8)" }}>
            ▮
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #proceso .steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          #proceso .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
