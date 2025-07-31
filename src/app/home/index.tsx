"use client";

import { scrollAnimations } from "@/lib/animations/scrollAnimations";
import { useEffect, useRef } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Banner } from "./components/sections/banner";
import { FAQ } from "./components/sections/faq";
import { QuemSomos } from "./components/sections/quem-somos";
import { TestimonialCarousel } from "./components/sections/testimonial";

export function Home() {
  // Refs para cada seção
  const headerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicializar elementos como invisíveis
    if (quemSomosRef.current) {
      quemSomosRef.current.style.opacity = "0";
    }
    if (testimonialRef.current) {
      testimonialRef.current.style.opacity = "0";
    }
    if (faqRef.current) {
      faqRef.current.style.opacity = "0";
    }

    // Banner não precisa de animação (já tem animações próprias)
    // Header também não precisa (sempre visível)
    // Footer não precisa de animação

    // Animar seções conforme o scroll
    scrollAnimations.fadeInUp(quemSomosRef, 0.1);
    scrollAnimations.fadeInLeft(testimonialRef, 0.2);
    scrollAnimations.scaleIn(faqRef, 0.1);

    // Cleanup
    return () => {
      scrollAnimations.killAll();
    };
  }, []);
  return (
    <div>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={quemSomosRef}>
        <QuemSomos />
      </div>
      <div ref={testimonialRef}>
        <TestimonialCarousel />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
