import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const HomePage = () => (
  <main className="relative min-h-screen bg-slate-100/50 pb-16">
    <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-primary/10 via-white to-transparent" />
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturedCars />
      <ContactSection />
    </div>
    <Footer />
  </main>
);

export default HomePage;
