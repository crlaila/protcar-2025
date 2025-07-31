"use client";

import { Button } from "@/app/ui/button";
import { Card, CardContent } from "@/app/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../container";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A melhor proteção veicular, já precisei varias vezes e sempre me atenderam com agilidade e qualidade. E claro que sempre indico as pessoas!!!",
    name: "Mariana Senna",
    avatar: "/images/testimonial/mariana.png",

    rating: 5,
  },
  {
    quote:
      "Minha experiência foi ótima com a protcar roubaram meu carro eu não tive problema pagaram antes do prazo que estava no contrato.",
    name: "Suelen Cabral",
    avatar: "/images/testimonial/suelen.png",
    rating: 5,
  },
  {
    quote:
      "Sempre que precisei fui muito bem atendido. Colaboradores e empresa nota 1.000.",
    name: "Gilsin Sousa",
    avatar: "/images/testimonial/gilsin.png",
    rating: 5,
  },
  {
    quote: "Super recomendo, atendimento muito bom. Parabéns",
    name: "Carla Tinoco",
    avatar: "/images/testimonial/carla.png",

    rating: 5,
  },
  {
    quote:
      "Fui super bem atendido e fiquei bem satisfeito com a oficina recomendada! Só é longe da minha casa poderia ser mais perto kkkkkkkkk nota 10 obrigado por me atenderem bem gratidão",
    name: "Douglas Alves",
    avatar: "/images/testimonial/douglas.png",

    rating: 5,
  },
];

export function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Refs para animações
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1180) return;

    // Animação do carousel (lado esquerdo)
    gsap.fromTo(
      carouselRef.current,
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação do título (lado direito)
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação dos dots
    gsap.fromTo(
      dotsRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: dotsRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação do botão
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.9,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Container className="mb-24 flex items-center justify-between border-b border-black pb-20">
      <div ref={carouselRef}>
        <div className="relative mx-auto max-w-sm">
          <Swiper
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-[500px]"
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.name}-${index}`}>
                <Card className="min-h-[200px]">
                  <CardContent className="flex flex-col px-10 py-8">
                    <div className="flex flex-1 items-start gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="flex-shrink-0 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <h3 className="text-xs font-semibold text-gray-900">
                              {testimonial.name} -
                            </h3>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={`star-${testimonial.name}-${i}`}
                                className={` ${
                                  i < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-justify text-gray-800">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -right-40 z-10 flex -translate-y-1/2 flex-col gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              className={`cursor-pointer rounded-full bg-white p-1.5 shadow-md transition-colors ${
                isBeginning ? "opacity-50" : "hover:bg-gray-50"
              }`}
            >
              <ChevronUp
                className={`h-4 w-4 ${
                  isBeginning ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              className={`cursor-pointer rounded-full bg-white p-1.5 shadow-md transition-colors ${
                isEnd ? "opacity-50" : "hover:bg-gray-50"
              }`}
            >
              <ChevronDown
                className={`h-4 w-4 ${isEnd ? "text-gray-400" : "text-gray-700"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 ref={titleRef} className="text-[40px] leading-none font-bold">
          Depoimentos <br />
          de quem já <span className="text-primary">confia</span>
        </h2>
        <div ref={dotsRef} className="mt-4 flex items-center gap-4">
          <span className="bg-primary h-2 w-2 rounded-full" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
        </div>
        <Button
          ref={buttonRef}
          variant="default"
          className="mt-12 w-[335px] py-6 text-xl font-bold"
        >
          <ArrowRight size={20} /> Cotar agora
        </Button>
      </div>
    </Container>
  );
}
