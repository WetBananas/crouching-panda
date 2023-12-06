import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/berries.jpeg";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title=""
        btnClass="hide"
      />
      <Teams />
      <Footer />
    </>
  );
}

export default Contact;
