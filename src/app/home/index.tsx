import Footer from "./components/footer";
import Header from "./components/header";
import { Banner } from "./components/sections/banner";
import { QuemSomos } from "./components/sections/quem-somos";

export function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <QuemSomos />
      <Footer />
    </div>
  );
}
