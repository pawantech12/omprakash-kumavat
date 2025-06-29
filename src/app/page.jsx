import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import GoogleMaps from "@/components/google-maps";
import WhatsAppButton from "@/components/whatsapp-button";
import ScrollToTop from "@/components/scroll-to-top";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <GoogleMaps />
      <Footer />
      <TooltipProvider>
        <WhatsAppButton />

        <ScrollToTop />
      </TooltipProvider>
    </main>
  );
}
