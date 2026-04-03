"use client";

const SERVICIOS = [
  {
    id: "01",
    label: "DISEÑO_WEB",
    title: "Diseño Web Premium",
    desc: "Interfaces visuales que convierten. Diseño UI/UX con identidad de marca, tipografía de alto contraste y animaciones con propósito. Nada genérico, todo a medida.",
    accent: "#00FFD1",
    tags: ["UI/UX", "FIGMA", "MOTION", "BRANDING"],
  },
  {
    id: "02",
    label: "WEBAPPS_MEDIDA",
    title: "Webapps a Medida",
    desc: "Aplicaciones web completas desde cero. React, Next.js, APIs, autenticación y dashboards. Soluciones que escalan con tu negocio y se adaptan a tus procesos.",
    accent: "#FF00A8",
    tags: ["NEXT.JS", "REACT", "TS", "FRAMER"],
  },
  {
    id: "03",
    label: "COMERCIO_ELECTRÓNICO",
    title: "Comercio Electrónico",
    desc: "Tiendas online de alto rendimiento. Integración con pasarelas de pago, gestión de inventario, panel de administración y optimización para conversión máxima.",
    accent: "#00FFD1",
    tags: ["SHOPIFY", "STRIPE", "NEXT.JS", "PRISMA"],
  },
  {
    id: "04",
    label: "SOLUCIONES_MEDIDA",
    title: "Soluciones a Medida",
    desc: "Desde integraciones de terceros hasta sistemas complejos. Si tienes un problema técnico específico, lo resolvemos con el stack más adecuado para tu caso.",
    accent: "#FF00A8",
    tags: ["NODE.JS", "POSTGRES", "REST", "DEPLOY"],
  },
];

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: "#0D0D0D",
        padding: "120px 0",
        borderTop: "1px solid rgba(0,255,209,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top neon accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #00FFD1, #FF00A8, transparent)",
          boxShadow: "0 0 20px rgba(0,255,209,0.5)",
        }}
        aria-hidden="true"
      />

      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          bottom: "-60px",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(100px, 20vw, 280px)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,255,209,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
        aria-hidden="true"
      >
        SRV
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
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00FFD1",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textShadow: "0 0 8px rgba(0,255,209,0.5)",
            }}
          >
            <span className="blink-fast">■</span>
            <span>// SERVICIOS</span>
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
            NUESTROS
            <br />
            <span style={{ color: "#FF00A8", textShadow: "0 0 30px rgba(255,0,168,0.4)" }}>
              SISTEMAS
            </span>
          </h2>
        </div>

        {/* Services grid — 2x2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(237,237,237,0.05)",
          }}
        >
          {SERVICIOS.map((srv, idx) => (
            <div
              key={srv.id}
              style={{
                backgroundColor: "#0A0A0A",
                padding: "40px",
                position: "relative",
                transition: "transform 0.2s",
                cursor: "default",
                willChange: "transform",
                border: `1px solid rgba(${srv.accent === "#00FFD1" ? "0,255,209" : "255,0,168"},0.08)`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = srv.accent;
                el.style.boxShadow = `0 0 30px ${srv.accent}25, inset 0 0 20px ${srv.accent}05`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = `rgba(${srv.accent === "#00FFD1" ? "0,255,209" : "255,0,168"},0.08)`;
                el.style.boxShadow = "none";
              }}
            >
              {/* Animated corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: srv.accent,
                  boxShadow: `0 0 10px ${srv.accent}`,
                  animation: `blink-slow ${1.5 + idx * 0.3}s step-end infinite`,
                }}
                aria-hidden="true"
              />

              {/* Service ID */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: srv.accent,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textShadow: `0 0 8px ${srv.accent}60`,
                }}
              >
                <span>{srv.label}</span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "48px",
                    fontWeight: 800,
                    color: `${srv.accent}12`,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {srv.id}
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: srv.accent,
                  marginBottom: "24px",
                  opacity: 0.25,
                  boxShadow: `0 0 4px ${srv.accent}`,
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#EDEDED",
                  letterSpacing: "-0.02em",
                  margin: "0 0 16px 0",
                }}
              >
                {srv.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "14px",
                  color: "#777777",
                  lineHeight: 1.7,
                  margin: "0 0 28px 0",
                }}
              >
                {srv.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {srv.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: srv.accent,
                      border: `1px solid ${srv.accent}40`,
                      padding: "3px 8px",
                      boxShadow: `0 0 4px ${srv.accent}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
