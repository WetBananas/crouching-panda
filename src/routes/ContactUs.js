import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactUsImg from "../assets/cherry.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function ContactUs() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactUsImg}
        title=""
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
