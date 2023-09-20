import About from "./components/about";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowWeWork from "./components/howWork";
import Price from "./components/pricing";
import Review from "./components/reviews";
import Service from "./components/service";
import WhyWe from "./components/whyChooseUs";

function App() {
  return (
    <>
      <h1>Cleaning services</h1>
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
    </>
  );
}

export default App;
