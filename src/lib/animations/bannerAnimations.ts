"use client";

import { gsap } from "gsap";
import type { RefObject } from "react";

// Animações específicas para o banner
export const bannerAnimations = {
  // Animação para o texto principal do banner
  animateTextSection: (
    titleRef: RefObject<HTMLHeadingElement | null>,
    subtitleRef: RefObject<HTMLParagraphElement | null>,
    buttonRef: RefObject<HTMLButtonElement | null>
  ) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    // Timeline principal
    const timeline = gsap.timeline();

    // Animação sequencial elegante usando fromTo para controle total
    timeline
      // Título aparece primeiro - fromTo para começar invisível
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
      // Subtítulo segue com delay suave
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.7"
      )
      // Botão aparece com efeito bounce
      .fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.5"
      );

    return timeline;
  },

  // Animação específica para Image e CircleIcon
  animateImageAndCircle: (
    carImageRef: RefObject<HTMLImageElement | null>,
    circleIconRef: RefObject<HTMLDivElement | null>
  ) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    const timeline = gsap.timeline({ delay: 0.3 }); // Delay para sincronizar com o texto

    // Animação profissional da imagem do carro - entrada dramática (SEM animação contínua)
    timeline.fromTo(
      carImageRef.current,
      {
        opacity: 0,
        scale: 0.7,
        y: 80,
        rotation: -15,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power4.out",
      }
    );

    // Animação de entrada elegante para o CircleIcon
    timeline.fromTo(
      circleIconRef.current,
      {
        opacity: 0,
        scale: 0.3,
        x: -60,
        y: 30,
        rotation: -90,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      },
      "-=1.0" // Sobrepõe com a animação da imagem
    );

    return timeline;
  },

  // Animação para a seção da imagem e cards
  animateImageSection: (
    carImageRef: RefObject<HTMLImageElement | null>,
    cardTempoRef: RefObject<HTMLDivElement | null>,
    cardAssociadosRef: RefObject<HTMLDivElement | null>,
    cardSinistroRef: RefObject<HTMLDivElement | null>,
    bolinhasIconRef: RefObject<HTMLDivElement | null>,
    circleIconRef: RefObject<HTMLDivElement | null>
  ) => {
    const timeline = gsap.timeline({ delay: 0.3 }); // Pequeno delay para sincronizar com o texto

    // Animação da imagem principal do carro
    timeline.fromTo(
      carImageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      }
    );

    // Animação dos cards com efeito staggered elegante
    timeline.fromTo(
      [
        cardTempoRef.current,
        cardAssociadosRef.current,
        cardSinistroRef.current,
      ],
      {
        opacity: 0,
        scale: 0.6,
        y: 40,
        rotation: 15,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.6)",
      },
      "-=1"
    );

    // Animação dos ícones com efeitos únicos
    timeline.fromTo(
      bolinhasIconRef.current,
      {
        opacity: 0,
        scale: 0.3,
        rotation: 180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.6"
    );

    timeline.fromTo(
      circleIconRef.current,
      {
        opacity: 0,
        scale: 0.4,
        x: -30,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    return timeline;
  },

  // Animações contínuas para os ícones
  setupContinuousAnimations: (
    bolinhasIconRef: RefObject<HTMLDivElement | null>,
    circleIconRef: RefObject<HTMLDivElement | null>
  ) => {
    // Flutuação suave para bolinhas
    if (bolinhasIconRef.current) {
      gsap.to(bolinhasIconRef.current, {
        y: -8,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }

    // Rotação lenta contínua para o círculo
    if (circleIconRef.current) {
      gsap.to(circleIconRef.current, {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
        delay: 2.5,
      });
    }
  },

  // Animação de hover para o botão
  setupButtonHover: (buttonRef: RefObject<HTMLButtonElement | null>) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        y: -3,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  },

  // Animação de highlight para palavras específicas
  highlightWords: (titleRef: RefObject<HTMLHeadingElement | null>) => {
    if (
      !titleRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    const yellowSpans = titleRef.current.querySelectorAll(".text-yellow-dark");

    gsap.fromTo(
      yellowSpans,
      {
        scale: 1,
        textShadow: "0 0 0px rgba(255, 193, 7, 0.5)",
      },
      {
        scale: 1.02,
        textShadow: "0 0 20px rgba(255, 193, 7, 0.3)",
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      }
    );
  },

  // Animação de typing effect para o título
  typingEffect: (titleRef: RefObject<HTMLHeadingElement | null>) => {
    if (!titleRef.current) return;

    const title = titleRef.current;
    const text = title.innerHTML;
    title.innerHTML = "";
    title.style.opacity = "1";

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  },

  // Animação de pulse para chamar atenção no botão
  pulseButton: (buttonRef: RefObject<HTMLButtonElement | null>) => {
    if (
      !buttonRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.to(buttonRef.current, {
      scale: 1.02,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 3,
    });
  },
};
