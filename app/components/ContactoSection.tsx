"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [logLines, setLogLines] = useState<string[]>([
    "> SISTEMA DE CONTACTO INICIALIZADO",
    "> ESPERANDO INPUT DEL USUARIO...",
  ]);

  const logRef = useRef<HTMLDivElement>(null);

  const addLog = (line: string) => {
    setLogLines((prev) => [...prev.slice(-6), line]);
  };

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logLines]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (value.length === 1) {
      addLog(`> CAMPO_${name.toUpperCase()}: INPUT_DETECTADO`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      addLog("> ERROR: CAMPOS REQUERIDOS VACÍOS");
      return;
    }
    setSending(true);
    addLog("> PROCESANDO: ENVIAR_MENSAJE.exe");
    addLog("> ESTABLECIENDO CONEXIÓN...");

    setTimeout(() => {
      addLog("> CONEXIÓN: OK");
      addLog("> DATOS ENCRIPTADOS Y ENVIADOS");
      addLog("> PROCESO COMPLETADO — STATUS: 200_OK");
      setSending(false);
      setSent(true);
    }, 2200);
  };

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#0A0A0A",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,45,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,45,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Neon accent lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "#FF2D00",
          boxShadow: "0 0 20px rgba(255,45,0,0.8)",
        }}
        aria-hidden="true"
      />

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
        <div style={{ marginBottom: "72px" }}>
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
            <span>// CONTACTO</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(36px, 6vw, 88px)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            INICIEMOS
            <br />
            <span style={{ color: "#FF2D00" }}>TU PROYECTO</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Form panel */}
          <div
            style={{
              backgroundColor: "#111111",
              padding: "48px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                color: "#555",
                letterSpacing: "0.12em",
                marginBottom: "40px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#FF2D00",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#FFE500",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#00C9B4",
                  display: "inline-block",
                }}
              />
              <span style={{ marginLeft: "8px" }}>
                cibai_contact.terminal — bash
              </span>
            </div>

            {sent ? (
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  color: "#00C9B4",
                  lineHeight: 2,
                }}
              >
                <div style={{ color: "#7A7A7A" }}>
                  $ ENVIAR_MENSAJE.exe --status
                </div>
                <div>
                  <span style={{ color: "#FF2D00" }}>✓</span> MENSAJE RECIBIDO
                  CORRECTAMENTE
                </div>
                <div>
                  <span style={{ color: "#FF2D00" }}>✓</span> TE CONTACTAREMOS
                  EN &lt; 24H
                </div>
                <div style={{ marginTop: "24px", color: "#FFFFFF" }}>
                  Gracias por contactar con CIBAI Studio.
                  <br />
                  Pronto nos pondremos en contacto.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Campo nombre */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="nombre"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color:
                        activeField === "nombre" ? "#FF2D00" : "#7A7A7A",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                    }}
                  >
                    &gt; nombre:
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={form.nombre}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("nombre");
                        addLog("> CAMPO_NOMBRE: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="Tu nombre completo"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "nombre"
                            ? "#FF2D00"
                            : "rgba(255,255,255,0.15)"
                        }`,
                        color: "#EDEDED",
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        transition: "border-color 0.2s",
                        boxShadow:
                          activeField === "nombre"
                            ? "0 2px 0 rgba(255,45,0,0.3)"
                            : "none",
                      }}
                    />
                    {activeField === "nombre" && (
                      <span
                        className="blink"
                        style={{
                          position: "absolute",
                          right: "0",
                          bottom: "8px",
                          fontFamily:
                            "var(--font-jetbrains-mono), monospace",
                          fontSize: "14px",
                          color: "#FF2D00",
                        }}
                      >
                        ▮
                      </span>
                    )}
                  </div>
                </div>

                {/* Campo email */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color:
                        activeField === "email" ? "#FF2D00" : "#7A7A7A",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                    }}
                  >
                    &gt; email:
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("email");
                        addLog("> CAMPO_EMAIL: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="tu@email.com"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "email"
                            ? "#FF2D00"
                            : "rgba(255,255,255,0.15)"
                        }`,
                        color: "#EDEDED",
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        transition: "border-color 0.2s",
                        boxShadow:
                          activeField === "email"
                            ? "0 2px 0 rgba(255,45,0,0.3)"
                            : "none",
                      }}
                    />
                    {activeField === "email" && (
                      <span
                        className="blink"
                        style={{
                          position: "absolute",
                          right: "0",
                          bottom: "8px",
                          fontFamily:
                            "var(--font-jetbrains-mono), monospace",
                          fontSize: "14px",
                          color: "#FF2D00",
                        }}
                      >
                        ▮
                      </span>
                    )}
                  </div>
                </div>

                {/* Campo mensaje */}
                <div style={{ marginBottom: "40px" }}>
                  <label
                    htmlFor="mensaje"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color:
                        activeField === "mensaje" ? "#FF2D00" : "#7A7A7A",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                    }}
                  >
                    &gt; mensaje:
                  </label>
                  <div style={{ position: "relative" }}>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("mensaje");
                        addLog("> CAMPO_MENSAJE: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="Cuéntanos tu proyecto..."
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "mensaje"
                            ? "#FF2D00"
                            : "rgba(255,255,255,0.15)"
                        }`,
                        color: "#EDEDED",
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        resize: "none",
                        lineHeight: 1.7,
                        transition: "border-color 0.2s",
                        boxShadow:
                          activeField === "mensaje"
                            ? "0 2px 0 rgba(255,45,0,0.3)"
                            : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    backgroundColor: sending ? "#333" : "#FF2D00",
                    border: "2px solid #FF2D00",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "16px 32px",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    willChange: "transform",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#FFFFFF";
                      el.style.color = "#FF2D00";
                      el.style.boxShadow = "0 0 20px rgba(255,45,0,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#FF2D00";
                      el.style.color = "#FFFFFF";
                      el.style.boxShadow = "none";
                    }
                  }}
                >
                  {sending ? "[ ENVIANDO... ]" : "[ ENVIAR_MENSAJE.exe ]"}
                </button>
              </form>
            )}
          </div>

          {/* Info + terminal log panel */}
          <div
            style={{
              backgroundColor: "#0D0D0D",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            {/* Contact info */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#555",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                // INFO_CONTACTO
              </div>

              {[
                {
                  icon: "✉",
                  label: "EMAIL",
                  value: "hola@cibai.studio",
                  accent: "#FF2D00",
                },
                {
                  icon: "◎",
                  label: "UBICACIÓN",
                  value: "Madrid, España / Remote",
                  accent: "#00C9B4",
                },
                {
                  icon: "⟳",
                  label: "RESPUESTA",
                  value: "< 24 horas laborables",
                  accent: "#7B00FF",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "24px",
                    paddingBottom: "24px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "18px",
                      color: item.accent,
                      lineHeight: 1,
                      minWidth: "24px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "9px",
                        color: item.accent,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "13px",
                        color: "#EDEDED",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal log */}
            <div
              style={{
                backgroundColor: "#080808",
                border: "1px solid rgba(255,45,0,0.2)",
                flex: 1,
              }}
            >
              <div
                style={{
                  backgroundColor: "#111",
                  padding: "8px 16px",
                  borderBottom: "1px solid rgba(255,45,0,0.15)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "9px",
                  color: "#555",
                  letterSpacing: "0.12em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>SYSTEM_LOG</span>
                <span className="blink" style={{ color: "#FF2D00" }}>
                  ● LIVE
                </span>
              </div>

              <div
                ref={logRef}
                style={{
                  padding: "16px",
                  maxHeight: "180px",
                  overflowY: "auto",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  lineHeight: 1.8,
                  color: "#00C9B4",
                  letterSpacing: "0.04em",
                }}
              >
                {logLines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      color:
                        line.includes("ERROR")
                          ? "#FF2D00"
                          : line.includes("OK") || line.includes("COMPLETADO")
                          ? "#00C9B4"
                          : "#7A7A7A",
                    }}
                  >
                    {line}
                  </div>
                ))}
                <span className="blink" style={{ color: "#00C9B4" }}>
                  ▮
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto > div > div:last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: #444;
          font-family: var(--font-jetbrains-mono), monospace;
        }
      `}</style>
    </section>
  );
}
