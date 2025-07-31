"use client";

import { Button } from "@/app/ui/button";
import { BolinhasIcon } from "@/app/ui/icons/bolinhas-banner";
import CircleIcon from "@/app/ui/icons/circle-banner";
import { bannerAnimations } from "@/lib/animations/bannerAnimations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Container from "../../container";
import { CardAssociados } from "./components/card-associados";
import { CardSinistro } from "./components/card-sinistro";
import { CardTempo } from "./components/card-tempo";

export function Banner() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Refs apenas para Image e CircleIcon
  const carImageRef = useRef<HTMLImageElement>(null);
  const circleIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animar seção de texto
    const textTimeline = bannerAnimations.animateTextSection(
      titleRef,
      subtitleRef,
      buttonRef
    );

    // Animar apenas Image e CircleIcon
    const imageCircleTimeline = bannerAnimations.animateImageAndCircle(
      carImageRef,
      circleIconRef
    );

    // Setup hover do botão
    const cleanupHover = bannerAnimations.setupButtonHover(buttonRef);

    // Highlight das palavras amarelas
    bannerAnimations.highlightWords(titleRef);

    // Pulse do botão após delay
    bannerAnimations.pulseButton(buttonRef);

    // Cleanup
    return () => {
      textTimeline.kill();
      imageCircleTimeline.kill();
      cleanupHover?.();
    };
  }, []);

  return (
    <Container className="mb-16 border-b border-black">
      <div className="mr-14 flex items-center justify-between">
        <div>
          <h1
            ref={titleRef}
            className="max-w-[530px] text-7xl leading-20 font-extrabold"
          >
            A <span className="text-yellow-dark">proteção</span> <br />
            que o seu <br />
            veículo <span className="text-yellow-dark">merece!</span>
          </h1>
          <p ref={subtitleRef} className="max-w-[442px] text-xl">
            Seja <b>PROTCAR</b> e tenha a proteção veicular completa que cabe no
            seu bolso!
          </p>
          <Button
            ref={buttonRef}
            variant="default"
            className="mt-12 w-[492px] py-6 text-xl font-bold"
          >
            <ArrowRight size={20} /> Cotar agora
          </Button>
        </div>
        <div className="relative">
          <Image
            ref={carImageRef}
            src="/images/card-car.png"
            alt="Banner"
            width={378}
            height={527}
            className="pt-14 pb-24"
          />
          <CardTempo />
          <BolinhasIcon className="absolute top-10 right-20 duration-500 hover:scale-103" />
          <CardAssociados />
          <CardSinistro />
          <div ref={circleIconRef} className="absolute bottom-24 -left-12">
            <CircleIcon />
          </div>
        </div>
      </div>
    </Container>
  );
}
