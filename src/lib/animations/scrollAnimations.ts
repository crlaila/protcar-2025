"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const scrollAnimations = {
  // Animação de fade in com movimento vertical
  fadeInUp: (elementRef: RefObject<HTMLElement | null>, delay = 0) => {
    if (
      !elementRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Animação de fade in com movimento lateral (da esquerda)
  fadeInLeft: (elementRef: RefObject<HTMLElement | null>, delay = 0) => {
    if (
      !elementRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: -80,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Animação de fade in com movimento lateral (da direita)
  fadeInRight: (elementRef: RefObject<HTMLElement | null>, delay = 0) => {
    if (
      !elementRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Animação de scale up (zoom in)
  scaleIn: (elementRef: RefObject<HTMLElement | null>, delay = 0) => {
    if (
      !elementRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        scale: 0.7,
        rotation: -5,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.4,
        delay,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Animação de stagger para múltiplos elementos
  staggerAnimation: (
    elementsRef: RefObject<HTMLElement | null>[],
    animationType:
      | "fadeInUp"
      | "fadeInLeft"
      | "fadeInRight"
      | "scaleIn" = "fadeInUp"
  ) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    const elements = elementsRef
      .map(ref => ref.current)
      .filter(el => el !== null);

    if (elements.length === 0) return;

    const baseAnimation = {
      fadeInUp: {
        from: { opacity: 0, y: 60, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1 },
      },
      fadeInLeft: {
        from: { opacity: 0, x: -80, scale: 0.9 },
        to: { opacity: 1, x: 0, scale: 1 },
      },
      fadeInRight: {
        from: { opacity: 0, x: 80, scale: 0.9 },
        to: { opacity: 1, x: 0, scale: 1 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.7, rotation: -5 },
        to: { opacity: 1, scale: 1, rotation: 0 },
      },
    };

    const animation = baseAnimation[animationType];

    gsap.fromTo(elements, animation.from, {
      ...animation.to,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  },

  // Animação para headers/títulos com efeito especial
  animateHeader: (elementRef: RefObject<HTMLElement | null>, delay = 0) => {
    if (
      !elementRef.current ||
      (typeof window !== "undefined" && window.innerWidth <= 1180)
    )
      return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Refresh ScrollTrigger quando necessário
  refresh: () => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }
  },

  // Cleanup de todas as animações
  killAll: () => {
    if (typeof window !== "undefined") {
      ScrollTrigger.killAll();
    }
  },
};
