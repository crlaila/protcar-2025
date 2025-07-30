"use client";

import { Card, CardContent } from "@/app/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import Container from "../../container";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Minha experiência foi ótima com a protcar roubaram meu carro eu não tive problema pagaram antes do prazo que estava no contrato.",
    name: "Suelen Cabral",
    avatar: "/images/testimonial/suelen.png",
    rating: 5,
  },
  {
    quote:
      "Excelente serviço! Quando meu carro foi danificado por uma enchente, a Protcar resolveu tudo rapidamente. Não tive dor de cabeça e pude voltar a trabalhar em poucos dias.",
    name: "Viviane B. Silva",
    avatar: "/images/testimonial.png",
    rating: 5,
  },
  {
    quote:
      "Recomendo a Protcar para todos! O custo-benefício é incrível e a tranquilidade que oferece não tem preço. Meu carro está sempre protegido.",
    name: "Rubens Oka Katamari",
    role: "Professor",
    location: "Oliveira, MG",
    avatar: "/images/testimonial.png",
    rating: 5,
    time: "há 3 semanas",
  },
];

export function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
    <Container className="flex items-center justify-between">
      <div>
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
                <Card>
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
                          <span className="text-xs text-gray-500">
                            {testimonial.time}
                          </span>
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
        <p>Conteúdo adicional aqui</p>
      </div>
    </Container>
  );
}
