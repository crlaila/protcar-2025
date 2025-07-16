import { Button } from "@/app/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public//images/protcar-logo.svg";
import Container from "../container";

export default function Header() {
  return (
    <Container>
      <main className="border-primary flex items-center justify-between border-b pt-12 pb-8">
        <Image src={logo} alt="Logo" width={143} height={40} />

        <div className="flex items-center">
          <Link
            href="/"
            className="pr-12 text-sm transition-all duration-300 ease-in-out hover:font-semibold"
          >
            Nossas unidades
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="outline" className="text-sm">
                Login associado
              </Button>
            </Link>
            <Link href="/">
              <Button variant="default">
                <ArrowRight className="size-4" />
                Cotar agora
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
}
