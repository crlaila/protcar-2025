import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import { Card } from "@/app/ui/card";
import Container from "../../container";
import { CarsProtection } from "./components/cars-protection";

export function QuemSomos() {
  return (
    <Container className="border-primary mb-16 border-b">
      <div className="flex justify-between gap-[90px]">
        <div className="w-full max-w-[422px]">
          <div>
            <h2 className="text-5xl font-bold">
              Porque Protcar <span className="text-primary">?</span>
            </h2>
            <p className="py-8 font-semibold text-gray-500">
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
          <Card className="max-h-[190px] px-8 py-6">
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
                  Perda total <span className="text-primary text-sm">•</span>{" "}
                  Chuva de granizo{" "}
                  <span className="text-primary text-sm">• </span>
                  Enchente <span className="text-primary text-sm">• </span>
                  Queda de árvore
                </p>
              </div>
            </div>
          </Card>

          {/* Assistencia */}
          <Card className="max-h-[190px] px-8 py-6">
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
          <Card className="max-h-[190px] px-8 py-6">
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
          <Card className="max-h-[190px] px-8 py-6">
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
