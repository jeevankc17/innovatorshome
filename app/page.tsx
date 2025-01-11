import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Resources from "@/components/Resources";
import YouTube from "@/components/YouTube";
import Documentation from "@/components/Documentation";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Resources />
      <YouTube />
      <Documentation />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
