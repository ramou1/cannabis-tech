import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Solucoes from "@/components/Solucoes";
import FluxoBase from "@/components/FluxoBase";
import EstruturaOperacional from "@/components/EstruturaOperacional";
import LegadoHumano from "@/components/LegadoHumano";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(33,82,53,0.20),transparent_55%),#0F0F0F]"
    >
      <Header />
      <Hero />
      <Sobre />
      <Solucoes />
      <FluxoBase />
      <EstruturaOperacional />
      <LegadoHumano />
      <Contato />
      <Footer />
    </div>
  );
}
