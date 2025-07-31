"use client";

import { Button } from "@/app/ui/button";
import { Card } from "@/app/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Container from "../../container";
import { CarsProtection } from "./components/cars-protection";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function QuemSomos() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Refs para os cards
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    // Animação suave para o título
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação suave para a descrição
    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação individual para cada card conforme o scroll
    const cards = [
      { ref: card1Ref, delay: 0 },
      { ref: card2Ref, delay: 0 },
      { ref: card3Ref, delay: 0 },
      { ref: card4Ref, delay: 0 },
    ];

    cards.forEach(({ ref }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            x: 60,
            scale: 0.95,
            rotation: 3,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current, // Cada card tem seu próprio trigger
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Container className="border-primary mb-16 border-b">
      <div className="flex justify-between gap-[90px]">
        <div className="w-full max-w-[422px]">
          <div>
            <h2 ref={titleRef} className="text-5xl font-bold">
              Porque Protcar <span className="text-primary">?</span>
            </h2>
            <p
              ref={descriptionRef}
              className="py-8 font-semibold text-gray-500"
            >
              Somos uma associação de proteção e assistência veicular criada com
              o{" "}
              <span className="text-dark">
                objetivo de amparar e proteger pessoas nos momentos mais
                difíceis.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={24} className="text-primary" />
            <p className="text-sm font-bold">Protegemos</p>
          </div>
          <CarsProtection />
          <Button
            variant="default"
            className="mt-12 w-[415px] py-6 text-xl font-bold"
          >
            <ArrowRight size={20} /> Cotar agora
          </Button>
        </div>

        <div className="mb-16 flex flex-col gap-5">
          {/* Protecao */}
          <Card ref={card1Ref} className="max-h-[190px] px-8 py-6">
            <div className="flex gap-5">
              <div className="mt-1">
                <Image
                  src="/images/protecao.png"
                  alt="Proteção completa"
                  width={74}
                  height={39}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Proteção completa</h3>
                <p className="py-3 font-semibold text-gray-500">
                  Seu veículo sempre{" "}
                  <span className="text-dark">protegido</span> de qualquer
                  perigo
                </p>
                <p className="text-dark max-w-[317px] text-sm font-semibold">
                  Furto <span className="text-primary text-sm">• </span>
                  Roubo <span className="text-primary text-sm">• </span>
                  Proteção contra terceiros{" "}
                  <span className="text-primary text-sm">• </span>
                  Proteção de vidros{" "}
                  <span className="text-primary text-sm">• </span>
                  Incêndio <span className="text-primary text-sm">• </span>
                  Perda total <span className="text-primary text-sm">
                    •
                  </span>{" "}
                  Chuva de granizo{" "}
                  <span className="text-primary text-sm">• </span>
                  Enchente <span className="text-primary text-sm">• </span>
                  Queda de árvore
                </p>
              </div>
            </div>
          </Card>

          {/* Assistencia */}
          <Card ref={card2Ref} className="max-h-[190px] px-8 py-6">
            <div className="flex gap-5">
              <div className="mt-1">
                <Image
                  src="/images/assistencia.png"
                  alt="Proteção completa"
                  width={150}
                  height={69}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Assistência 24 horas </h3>
                <p className="py-3 font-semibold text-gray-500">
                  Sempre prontos pra te ajudar
                  <span className="text-dark">a qualquer hora</span>
                </p>
                <p className="text-dark max-w-[340 px] text-sm font-semibold">
                  Carro reserva <span className="text-primary text-sm">• </span>
                  Troca de pneu <span className="text-primary text-sm">• </span>
                  Auxílio Combustível
                  <span className="text-primary text-sm"> • </span>
                  Táxi <span className="text-primary text-sm">• </span>
                  Chaveiro <span className="text-primary text-sm">• </span>
                  Hospedagem <span className="text-primary text-sm">• </span>
                  Reboque 24h <span className="text-primary text-sm">• </span>
                  Carga de bateria
                  <span className="text-primary text-sm">• </span>
                  Clube certo
                </p>
              </div>
            </div>
          </Card>

          {/* Descontos */}
          <Card ref={card3Ref} className="max-h-[190px] px-8 py-6">
            <div className="flex gap-5">
              <div className="mt-1">
                <Image
                  src="/images/desconto.png"
                  alt="Proteção completa"
                  width={96}
                  height={39}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Clube de desconto</h3>
                <p className="font-semibold text-gray-500">
                  Faça parte da nossa rede e
                  <span className="text-dark"> receba descontos </span> em
                  estabelecimentos parceiros
                </p>
              </div>
            </div>
          </Card>

          {/* Custo de benefício */}
          <Card ref={card4Ref} className="max-h-[190px] px-8 py-6">
            <div className="flex gap-5">
              <div className="mt-1 -ml-4">
                <Image
                  src="/images/economia.png"
                  alt="Proteção completa"
                  width={80}
                  height={39}
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold">Custo e benefício</h3>
                <p className="font-semibold text-gray-500">
                  Oferecemos os
                  <span className="text-dark"> melhores valores </span> da
                  região!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
