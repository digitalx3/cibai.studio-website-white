"use client";

const SERVICIOS = [
  {
    id: "01",
    label: "DISEÑO_WEB",
    title: "Diseño Web Premium",
    desc: "Interfaces visuales que convierten. Diseño UI/UX con identidad de marca, tipografía de alto contraste y animaciones con propósito. Nada genérico.",
    accent: "#FF2D00",
    tags: ["UI/UX", "FIGMA", "MOTION", "BRANDING"],
  },
  {
    id: "02",
    label: "DESARROLLO_FRONTEND",
    title: "Frontend de Alto Rendimiento",
    desc: "Next.js, React, Tailwind. CSS con aceleración hardware. Código limpio, semántico y optimizado para el usuario real. Webs que cargan rápido y se ven perfectas.",
    accent: "#00C9B4",
    tags: ["NEXT.JS", "REACT", "TS", "FRAMER"],
  },
  {
    id: "03",
    label: "WEBAPP_FULLSTACK",
    title: "Webapps Completas",
    desc: "Desde el diseño hasta el deploy. APIs, bases de datos, autenticación, dashboards. Soluciones completas que escalan con tu negocio.",
    accent: "#7B00FF",
    tags: ["NODE.JS", "POSTGRES", "REST", "DEPLOY"],
  },
];

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: "#F5F5F5",
        padding: "120px 0",
        borderTop: "2px solid #FF2D00",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          WebkitTextStroke: "1px rgba(10,10,10,0.05)",
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
              color: "#FF2D00",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
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
              color: "#0A0A0A",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            NUESTROS
            <br />
            SISTEMAS
          </h2>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(10,10,10,0.1)",
          }}
        >
          {SERVICIOS.map((srv) => (
            <div
              key={srv.id}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "40px",
                position: "relative",
                transition: "transform 0.2s",
                cursor: "default",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.borderTop = `2px solid ${srv.accent}`;
                el.style.boxShadow = `0 0 20px ${srv.accent}22`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderTop = "none";
                el.style.boxShadow = "none";
              }}
            >
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
                }}
              >
                <span>{srv.label}</span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "48px",
                    fontWeight: 800,
                    color: `${srv.accent}18`,
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
                  opacity: 0.3,
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
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
                  color: "#5A5A5A",
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
                      border: `1px solid ${srv.accent}`,
                      padding: "3px 8px",
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
