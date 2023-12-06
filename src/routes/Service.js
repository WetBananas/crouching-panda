import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/pomegranate.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Products from "../components/Products";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title=""
        btnClass="hide"
      />
      <Products />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
