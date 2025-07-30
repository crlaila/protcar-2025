import Footer from "./components/footer";
import Header from "./components/header";
import { Banner } from "./components/sections/banner";
import { QuemSomos } from "./components/sections/quem-somos";
import { TestimonialCarousel } from "./components/sections/testimonial";
export function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <QuemSomos />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
