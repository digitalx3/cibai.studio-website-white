'use client';

import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState('');
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 4);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const loadingChars = ['|', '/', '—', '\\'];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #FF2D00',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '16px',
        paddingRight: '16px',
        fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", monospace',
        fontSize: '11px',
        letterSpacing: '0.05em',
        color: '#0A0A0A',
      }}
    >
      {/* Left: system identifier */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ color: '#FF2D00', fontWeight: 700 }}>
          &gt; CIBAI_STUDIO
        </span>
        <span style={{ color: '#7A7A7A' }}>v3.0</span>
        <span
          style={{
            color: '#0A0A0A',
            backgroundColor: '#F5F5F5',
            border: '1px solid rgba(10,10,10,0.15)',
            padding: '0 6px',
            borderRadius: '2px',
            fontSize: '10px',
            letterSpacing: '0.1em',
          }}
        >
          [LIGHT_MODE]
        </span>
      </div>

      {/* Center: hidden on small screens */}
      <div
        className="hidden md:flex"
        style={{ alignItems: 'center', gap: '24px', color: '#7A7A7A' }}
      >
        <span>
          <span style={{ color: '#FF2D00' }}>{loadingChars[frame]}</span>
          {' '}PROCESS: <span style={{ color: '#00C9B4' }}>CREATIVE_ENGINE</span>
        </span>
        <span>SYS: <span style={{ color: '#0A0A0A' }}>READY</span></span>
      </div>

      {/* Right: status + time */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="status-dot" />
          <span className="blink-fast" style={{ color: '#00C9B4', fontWeight: 600 }}>
            STATUS: ONLINE
          </span>
        </span>
        <span style={{ color: '#7A7A7A', fontSize: '10px' }}>{time}</span>
      </div>
    </div>
  );
}
