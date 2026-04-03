import StatusBar from "./components/StatusBar";
import CRTOverlay from "./components/CRTOverlay";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiciosSection from "./components/ServiciosSection";
import ProcesoSection from "./components/ProcesoSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <CRTOverlay />
      <StatusBar />
      <Navbar />
      <main>
        <HeroSection />
        <ServiciosSection />
        <ProcesoSection />
        <PortfolioSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
