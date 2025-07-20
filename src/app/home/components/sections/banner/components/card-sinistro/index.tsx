import { Car, Plus } from "lucide-react";

export function CardSinistro() {
  return (
    <div className="absolute -right-14 bottom-18 rounded-2xl bg-white p-4 shadow-2xl">
      <Car className="text-primary h-6 w-6" />
      <div>
        <div className="flex items-center">
          <Plus className="stroke-3 pt-1" />
          <p className="font-pt-serif text-primary flex items-end text-5xl font-extrabold -tracking-widest">
            75{" "}
            <span className="text-dark pl-3 text-3xl tracking-tight">Mil</span>
          </p>
        </div>
        <p className="font-semibold">
          Acionamentos <b>resolvidos</b>
        </p>
      </div>
    </div>
  );
}
