"use client";

import { gsap } from "gsap";
import { CalendarHeart, Plus } from "lucide-react";
import { useEffect, useRef } from "react";

export function CardTempo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Timeline para coordenar todas as animações
    const timeline = gsap.timeline({ delay: 1.2 }); // Delay para aparecer após a imagem

    // Entrada do card
    timeline.fromTo(
      cardRef.current,
      {
        opacity: 0,
        scale: 0.6,
        y: 40,
        rotation: -10,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    // Animação do ícone
    timeline.fromTo(
      iconRef.current,
      {
        scale: 0,
        rotation: -180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.7"
    );

    // Animação do número com efeito contador
    timeline.fromTo(
      numberRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Animação do texto
    timeline.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Efeito de counter no número
    timeline.to(
      {},
      {
        duration: 1.5,
        onUpdate: function () {
          const progress = this.progress();
          const currentNumber = Math.round(15 * progress);
          if (numberRef.current) {
            numberRef.current.innerHTML = `${currentNumber} <span class="text-dark pl-3 text-3xl tracking-tight">Anos</span>`;
          }
        },
        ease: "power2.out",
      },
      "-=1.2"
    );

    // Animações contínuas
    // Pulsação sutil do ícone
    timeline.to(
      iconRef.current,
      {
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      },
      "+=0.5"
    );

    // Hover effect para o card
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      timeline.kill();
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute top-20 -left-28 rounded-2xl bg-white p-4 shadow-2xl"
    >
      <CalendarHeart ref={iconRef} className="text-primary h-6 w-6" />
      <div>
        <div className="flex items-center">
          <Plus className="stroke-3 pt-1" />
          <p
            ref={numberRef}
            className="font-pt-serif text-primary flex items-end text-5xl font-extrabold -tracking-widest"
          >
            0{" "}
            <span className="text-dark pl-3 text-3xl tracking-tight">Anos</span>
          </p>
        </div>
        <p ref={textRef} className="font-semibold">
          Atuando no <b>mercado</b>
        </p>
      </div>
    </div>
  );
}
