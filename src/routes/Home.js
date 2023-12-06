import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/hero.png";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Shaping Tomorrow, Today"
        text="Innovate, Integrate, Illuminate"
        buttonText="Try Loop"
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
