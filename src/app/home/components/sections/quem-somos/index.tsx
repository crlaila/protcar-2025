import { Button } from "@/app/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "../../container";
import { CarsProtection } from "./components/cars-protection";

export function QuemSomos() {
  return (
    <Container>
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
        <div>
          <p>teste</p>
        </div>
      </div>
    </Container>
  );
}
