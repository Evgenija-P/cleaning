import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Faq from "./components/sections/faq";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import HowWeWork from "./components/sections/howWork";
import Price from "./components/sections/pricing";
import Review from "./components/sections/reviews";
import Service from "./components/sections/service";
import WhyWe from "./components/sections/whyChooseUs";

function App() {
  return (
    <div className="font-basic">
      <Header />
      <Hero />
      <About />
      <Service />
      <HowWeWork />
      <WhyWe />
      <Price />
      <Faq />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
