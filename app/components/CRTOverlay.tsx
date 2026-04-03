"use client";

export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines sutiles sobre fondo blanco */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.018) 3px, rgba(0,0,0,0.018) 4px)",
        }}
        aria-hidden="true"
      />

      {/* Vignette perimetral */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9989,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Noise grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9988,
          pointerEvents: "none",
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />
    </>
  );
}
