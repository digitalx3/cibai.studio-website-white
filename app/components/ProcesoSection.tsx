"use client";

const PASOS = [
  {
    num: "01",
    label: "ANÁLISIS",
    title: "Diagnóstico del Sistema",
    desc: "Auditamos tu proyecto, competencia y objetivos. Definimos arquitectura, stack y deliverables exactos antes de escribir una línea de código.",
    icon: "◈",
    accent: "#FF2D00",
  },
  {
    num: "02",
    label: "DISEÑO",
    title: "Arquitectura Visual",
    desc: "Wireframes, sistema de diseño y componentes en alta fidelidad. Tipografía, paleta y motion con identidad de marca propia.",
    icon: "◎",
    accent: "#00C9B4",
  },
  {
    num: "03",
    label: "DESARROLLO",
    title: "Build & Código Limpio",
    desc: "Frontend con hardware acceleration, animaciones con propósito y código semántico optimizado para producción. Zero placeholders.",
    icon: "◆",
    accent: "#7B00FF",
  },
  {
    num: "04",
    label: "DEPLOY",
    title: "Lanzamiento y Soporte",
    desc: "Deploy, testing cross-device, optimización SEO y performance. Entrega con documentación y soporte post-lanzamiento.",
    icon: "◉",
    accent: "#FF2D00",
  },
];

export default function ProcesoSection() {
  return (
    <section
      id="proceso"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "120px 0",
        borderTop: "1px solid rgba(10,10,10,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          WebkitTextStroke: "1px rgba(10,10,10,0.04)",
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
                color: "#FF2D00",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
                color: "#0A0A0A",
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
              color: "#7A7A7A",
              letterSpacing: "0.06em",
              maxWidth: "300px",
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: "#00C9B4" }}>STATUS:</span> SISTEMA_ACTIVO
            <br />
            <span style={{ color: "#00C9B4" }}>PROTOCOLO:</span> AGILE_V2
            <br />
            <span style={{ color: "#00C9B4" }}>ITERACIONES:</span> CONTINUAS
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
              backgroundColor: "rgba(10,10,10,0.12)",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            {/* Animated progress */}
            <div
              style={{
                height: "100%",
                backgroundColor: "#FF2D00",
                boxShadow: "0 0 8px rgba(255,45,0,0.5)",
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
                borderRight: i < 3 ? "1px solid rgba(10,10,10,0.06)" : "none",
              }}
            >
              {/* Number circle */}
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
                  backgroundColor: "#FFFFFF",
                  boxShadow: `0 0 0 4px #FFFFFF`,
                }}
              >
                <span
                  className="blink"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: paso.accent,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    animationDelay: `${i * 0.25}s`,
                    animationDuration: "2s",
                  }}
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
                  color: "#0A0A0A",
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
                  color: "#5A5A5A",
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
            backgroundColor: "#0A0A0A",
            borderLeft: "3px solid #FF2D00",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            color: "#EDEDED",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ color: "#FF2D00" }}>$</span>
          <span>EJECUTANDO: cibai_deploy_protocol --full --optimized --on-time</span>
          <span className="blink" style={{ color: "#00C9B4" }}>
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
