'use client';

export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines fijas - fondo blanco */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9997,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(10,10,10,0.018) 2px, rgba(10,10,10,0.018) 3px)',
          willChange: 'transform',
        }}
      />

      {/* Vignette sutil en esquinas */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9996,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(10,10,10,0.04) 100%)',
        }}
      />

      {/* Línea de scan ocasional */}
      <style>{`
        @keyframes scan-sweep-crt {
          0%   { transform: translateY(-100%); opacity: 0; }
          5%   { opacity: 0.15; }
          95%  { opacity: 0.15; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .crt-scan-line {
          position: fixed;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(255,45,0,0.08), rgba(0,201,180,0.08), transparent);
          z-index: 9999;
          pointer-events: none;
          animation: scan-sweep-crt 8s linear infinite;
        }
      `}</style>
      <div className="crt-scan-line" aria-hidden="true" />
    </>
  );
}
