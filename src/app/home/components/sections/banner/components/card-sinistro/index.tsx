"use client";

import { gsap } from "gsap";
import { Car, Plus } from "lucide-react";
import { useEffect, useRef } from "react";

export function CardSinistro() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Timeline com delay ainda maior para sequência escalonada
    const timeline = gsap.timeline({ delay: 2.0 }); // Último a aparecer

    // Entrada épica "caindo do céu" com rotação
    timeline.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: -150,
        scale: 0.5,
        rotation: 180,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "bounce.out",
      }
    );

    // Ícone com efeito "aceleração" do carro
    timeline.fromTo(
      iconRef.current,
      {
        x: -50,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=1"
    );

    // Efeito de "freada" no ícone
    timeline
      .to(iconRef.current, {
        x: 5,
        duration: 0.1,
        ease: "power2.out",
      })
      .to(iconRef.current, {
        x: 0,
        duration: 0.2,
        ease: "elastic.out(2, 0.3)",
      });

    // Número com efeito "explosão"
    timeline.fromTo(
      numberRef.current,
      {
        opacity: 0,
        scale: 2,
        rotation: 45,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(2)",
      },
      "-=0.8"
    );

    // Counter mais dramático e rápido
    timeline.to(
      {},
      {
        duration: 1.8,
        onUpdate: function () {
          const progress = this.progress();
          const currentNumber = Math.round(75 * progress);
          if (numberRef.current) {
            numberRef.current.innerHTML = `${currentNumber} <span class="text-dark pl-3 text-3xl tracking-tight">Mil</span>`;
          }
        },
        ease: "power2.inOut",
      },
      "-=0.6"
    );

    // Texto com efeito "máquina de escrever"
    timeline.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=1.2"
    );

    // Animações contínuas exclusivas
    // Movimento pendular único
    timeline.to(
      cardRef.current,
      {
        rotation: 2,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      },
      "+=0.5"
    );

    // Ícone do carro "acelerando" ocasionalmente
    timeline.to(
      iconRef.current,
      {
        x: 10,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
        repeatDelay: 5,
      },
      "+=1"
    );

    // Hover effect mais impactante
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.12,
        rotation: -3,
        y: -8,
        boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      // Efeito de "turbo" no ícone
      gsap.to(iconRef.current, {
        scale: 1.2,
        x: 8,
        filter: "brightness(1.5)",
        duration: 0.3,
        ease: "power2.out",
      });

      // Número com efeito "destaque"
      gsap.to(numberRef.current, {
        scale: 1.15,
        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotation: 0,
        y: 0,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.to(iconRef.current, {
        scale: 1,
        x: 0,
        filter: "brightness(1)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(numberRef.current, {
        scale: 1,
        textShadow: "none",
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
      className="absolute -right-14 bottom-18 rounded-2xl bg-white p-4 shadow-2xl"
    >
      <Car ref={iconRef} className="text-primary h-6 w-6" />
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
          Acionamentos <b>resolvidos</b>
        </p>
      </div>
    </div>
  );
}
