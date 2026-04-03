import StatusBar from './components/StatusBar';
import CRTOverlay from './components/CRTOverlay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiciosSection from './components/ServiciosSection';

export default function HomePage() {
  return (
    <>
      {/* Global overlays */}
      <CRTOverlay />
      <StatusBar />
      <Navbar />

      {/* Page content */}
      <main style={{ paddingTop: '0' }}>
        <HeroSection />
        <ServiciosSection />

        {/* Placeholder sections para CIB-11 */}
        <div id="proceso" style={{ minHeight: '80px' }} />
        <div id="portfolio" style={{ minHeight: '80px' }} />
        <div id="contacto" style={{ minHeight: '80px' }} />
      </main>
    </>
  );
}
