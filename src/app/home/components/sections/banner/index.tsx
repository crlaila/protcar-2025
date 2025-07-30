import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import { BolinhasIcon } from "@/app/ui/icons/bolinhas-banner";
import CircleIcon from "@/app/ui/icons/circle-banner";
import Container from "../../container";
import { CardAssociados } from "./components/card-associados";
import { CardSinistro } from "./components/card-sinistro";
import { CardTempo } from "./components/card-tempo";

export function Banner() {
  return (
    <Container className="mb-16 border-b border-black">
      <div className="mr-14 flex items-center justify-between">
        <div>
          <h1 className="max-w-[530px] text-7xl leading-20 font-extrabold">
            A <span className="text-yellow-dark">proteção</span> <br />
            que o seu <br />
            veículo <span className="text-yellow-dark">merece!</span>
          </h1>
          <p className="max-w-[442px] text-xl">
            Seja <b>PROTCAR</b> e tenha a proteção veicular completa que cabe no
            seu bolso!
          </p>
          <Button
            variant="default"
            className="mt-12 w-[492px] py-6 text-xl font-bold"
          >
            <ArrowRight size={20} /> Cotar agora
          </Button>
        </div>
        <div className="relative">
          <Image
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
          <CircleIcon className="absolute bottom-24 -left-12" />
        </div>
      </div>
    </Container>
  );
}
