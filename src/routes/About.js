import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/mango.jpeg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
