import { CalendarHeart, Plus } from "lucide-react";

export function CardTempo() {
  return (
    <div className="absolute top-20 -left-28 rounded-2xl bg-white p-4 shadow-2xl">
      <CalendarHeart className="text-primary h-6 w-6" />
      <div>
        <div className="flex items-center">
          <Plus className="stroke-3 pt-1" />
          <p className="font-pt-serif text-primary flex items-end text-5xl font-extrabold -tracking-widest">
            15{" "}
            <span className="text-dark pl-3 text-3xl tracking-tight">Anos</span>
          </p>
        </div>
        <p className="font-semibold">
          Atuando no <b>mercado</b>
        </p>
      </div>
    </div>
  );
}
