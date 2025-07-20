import { Button } from "@/app/ui/button";
import FacebookIcon from "@/app/ui/icons/facebook";
import InstagramIcon from "@/app/ui/icons/instagram";
import WhatsappIcon from "@/app/ui/icons/whatsapp";
import { Input } from "@/app/ui/input";
import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoBranca from "../../../../../public/images/protcar-logo-branca.svg";
import Container from "../container";

export default function Footer() {
  return (
    <footer className="bg-dark w-full">
      <Container className="mb-9 border-b border-white">
        <div className="flex justify-center gap-20 pt-20 pb-6">
          <div>
            <div>
              <Image src={logoBranca} alt="Logo" width={210} height={61} />
            </div>
            <p className="max-w-72 pb-12 text-sm text-white">
              Faça parte da <b>PROTCAR</b> e junte-se ao maior grupo de
              associados da região!
            </p>
            <Link href="/associar">
              <Button variant="default" className="mb-14 w-[250px] text-sm">
                <ArrowRight />
                Cotar agora
              </Button>
            </Link>
          </div>

          <div>
            <ul className="text-white">
              <li>
                <Link href="/">Sobre nós</Link>
              </li>
              <li>
                <Link href="/">Depoimentos</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Aplicativos</Link>
              </li>
              <li>
                <Link href="/">Unidades</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="pb-4 font-black text-white">Fale com a gente</p>
            <div className="relative">
              <Input
                placeholder="Digite sua mensagem"
                className="w-56 bg-gray-700/40 pr-10 placeholder:text-white"
              />
              <Send className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 cursor-pointer text-white" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-4">
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <WhatsappIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <small className="flex justify-center pb-11 text-sm text-white">
        Todos os direitos reservados
      </small>
    </footer>
  );
}
