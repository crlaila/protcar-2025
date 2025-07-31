"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/accordion";
import { Button } from "@/app/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Container from "../../container";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const accordionItems = [
  {
    value: "item-1",
    trigger: "Quanto tempo demora para proteger meu veículo?",
    content:
      "O processo é bem simples, após a cotação e assinatura do contrato, você já está protegido.",
  },
  {
    value: "item-2",
    trigger: "Em caso de acidente, o que fazer?",
    content:
      "Entre em contato com a PROTCAR o mais rápido possível e siga as instruções fornecidas.",
  },
  {
    value: "item-3",
    trigger: "A PROTCAR oferece assistência 24 horas?",
    content:
      "Sim, a assistência 24 horas está disponível em todos os nossos planos.",
  },
  {
    value: "item-4",
    trigger: "Há quanto tempo a PROTCAR está no mercado?",
    content: "A PROTCAR está no mercado há mais de 15 anos.",
  },
];

export function FAQ() {
  // Refs para animações
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar se a tela é maior que 1180px
    if (typeof window === "undefined" || window.innerWidth <= 1180) {
      return;
    }

    // Animação do bloco inteiro da esquerda (título, descrição e botão juntos)
    const leftBlock = [
      titleRef.current,
      descriptionRef.current,
      buttonRef.current,
    ];

    gsap.fromTo(
      leftBlock,
      {
        opacity: 0,
        x: -80,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2, // Pequeno delay entre título, descrição e botão
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação sequencial dos itens do accordion (sem rotação)
    const accordionItems = accordionRef.current?.querySelectorAll(
      "[data-accordion-item]"
    );
    if (accordionItems) {
      gsap.fromTo(
        accordionItems,
        {
          opacity: 0,
          x: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2, // Cada trigger aparece com 0.2s de delay
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Container className="mb-24 flex items-center justify-between">
      <div className="max-w-[458px]">
        <h2 ref={titleRef} className="text-[40px] leading-tight font-extrabold">
          Ainda em dúvidas <br />
          sobre ser um <span className="text-primary">associado</span> <br />
          PROTCAR?
        </h2>
        <p
          ref={descriptionRef}
          className="mt-4 text-xl leading-tight font-medium text-gray-500"
        >
          Caso deseje, você também pode cotar diretamente com um colaborador
          PROTCAR.
        </p>
        <Button
          ref={buttonRef}
          variant="default"
          className="mt-12 flex w-[440px] items-center justify-center py-6 text-xl font-bold"
        >
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className="-mt-1 mr-2"
          />
          Falar com a PROTCAR
        </Button>
      </div>

      <Accordion ref={accordionRef} type="single" collapsible>
        {accordionItems.map(({ value, trigger, content }) => (
          <AccordionItem
            key={value}
            value={value}
            data-accordion-item
            className="w-[465px] border-b border-gray-300"
          >
            <AccordionTrigger className="cursor-pointer py-7 pr-3 text-xl font-medium decoration-white underline-offset-4 hover:underline [&>svg]:hidden">
              <div className="flex w-full items-center justify-between">
                <span>{trigger}</span>
                <Plus className="bg-primary h-4 w-4 rounded-full text-white" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pr-10 text-base leading-tight">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
