import { Plus } from "lucide-react";
import Image from "next/image";

export function CarsProtection() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="grid grid-cols-[300px_103px] gap-3">
        <div className="bg-primary relative flex h-[120px] rounded-[14px] pt-3">
          <Image
            src="/images/carro.png"
            alt="Carros"
            width={268}
            height={114}
          />
          <p className="absolute right-5 text-xl font-bold">Carros</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative flex h-14 rounded-[14px] bg-black">
            <Image
              src="/images/van.png"
              alt="Vans"
              width={73}
              height={57}
              className="rounded-tl-xl rounded-bl-2xl"
            />
            <p className="text-primary absolute top-2 right-[10px] text-sm font-bold">
              Vans
            </p>
          </div>
          <div className="bg-primary relative flex h-14 rounded-[14px]">
            <Image
              src="/images/suv.png"
              alt="Suv's"
              width={80}
              height={23}
              className="absolute top-2 right-0"
            />
            <p className="absolute top-1 left-2 text-sm font-bold">SUV's</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="bg-dark relative flex h-[60px] w-48 rounded-[14px]">
          <Image
            src="/images/moto.png"
            alt="Motos"
            width={113}
            height={61}
            className="absolute right-0 rounded-br-xl"
          />
          <p className="text-primary absolute left-5 pt-2 text-xl font-bold">
            Motos
          </p>
        </div>
        <div className="bg-dark -ml-2 flex h-[60px] w-[212px] items-center justify-center rounded-[14px]">
          <p className="text-primary flex items-center gap-2 font-bold">
            E muito mais!
            <Plus size={20} />
          </p>
        </div>
      </div>
    </div>
  );
}
