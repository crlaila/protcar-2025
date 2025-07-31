"use client";

import { gsap } from "gsap";
import { Plus, UserRound } from "lucide-react";
import { useEffect, useRef } from "react";

export function CardAssociados() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Timeline com delay diferente para criar sequência
    const timeline = gsap.timeline({ delay: 1.6 }); // Delay maior que o CardTempo

    // Entrada lateral dramática (vem da direita)
    timeline.fromTo(
      cardRef.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.8,
        rotationY: 45,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Ícone com efeito "pop" múltiplo
    timeline.fromTo(
      iconRef.current,
      {
        scale: 0,
        rotation: 90,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(3)",
      },
      "-=0.8"
    );

    // Efeito de "tremor" no ícone
    timeline.to(
      iconRef.current,
      {
        rotation: 5,
        duration: 0.1,
        yoyo: true,
        repeat: 3,
        ease: "power2.inOut",
      },
      "-=0.2"
    );

    // Número com efeito de máquina de escrever + counter
    timeline.fromTo(
      numberRef.current,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // Counter animado mais rápido que o CardTempo
    timeline.to(
      {},
      {
        duration: 2,
        onUpdate: function () {
          const progress = this.progress();
          const currentNumber = Math.round(45 * progress);
          if (numberRef.current) {
            numberRef.current.innerHTML = `${currentNumber} <span class="text-dark pl-3 text-3xl tracking-tight">Mil</span>`;
          }
        },
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Texto com efeito de digitação
    timeline.fromTo(
      textRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      },
      "-=1.5"
    );

    // Animações contínuas únicas
    // Flutuação vertical suave
    timeline.to(
      cardRef.current,
      {
        y: -5,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      },
      "+=0.5"
    );

    // Ícone permanece estático após a entrada

    // Hover effect diferenciado
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.08,
        rotationY: 5,
        z: 50,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power3.out",
      });

      // Efeito especial no número durante hover
      gsap.to(numberRef.current, {
        scale: 1.1,
        color: "#f59e0b", // amarelo
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        z: 0,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(numberRef.current, {
        scale: 1,
        color: "", // volta à cor original
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
      className="absolute top-6 -right-14 rounded-2xl bg-white p-4 shadow-2xl"
    >
      <UserRound ref={iconRef} className="text-primary h-6 w-6" />
      <div>
        <div className="flex items-center">
          <Plus className="stroke-3 pt-1" />
          <p
            ref={numberRef}
            className="font-pt-serif text-primary flex items-end text-5xl font-extrabold -tracking-widest"
          >
            0{" "}
            <span className="text-dark pl-3 text-3xl tracking-tight">Mil</span>
          </p>
        </div>
        <p ref={textRef} className="font-semibold">
          Pessoas <b>satisfeitas</b>
        </p>
      </div>
    </div>
  );
}
