import apple from "../assets/apple.jpg";
import apricot from "../assets/apricot.jpg";
import avocado from "../assets/avocado.jpg";
import banana from "../assets/banana.jpg";
import durian from "../assets/durian.jpg";
import mango from "../assets/mango.jpg";
import pear from "../assets/pear.jpg";
import peach from "../assets/peach.jpg";
import papaya from "../assets/papaya.jpg";
import kiwi from "../assets/kiwi.jpg";
import "./ProductsStyles.css";
import ProductsData from "./ProductsData";

const Products = () => {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <p>At Loop, we take pride in offering innovative solutions that shape tomorrow's possibilities. Our services are crafted with excellence, reflecting our commitment to pushing boundaries and redefining industry standards. Explore the future with Loop and discover how our offerings can transform your experience.</p>
      <ProductsData
        className="first-des"
        heading="Loop Cloud Services"
        text="Elevate your business to new heights with Loop Cloud Services. Our cloud solutions offer scalability, security, and flexibility, ensuring your data is not just stored but utilized strategically for growth."
        img1={apple}
        img2={apricot}
        learnMoreLink="/contactus"
      />
      <ProductsData
        className="first-des-reverse"
        heading="Loop Innovation Hub"
        text="Join the forefront of innovation at the Loop Innovation Hub. We offer collaborative spaces, resources, and mentorship to empower startups and entrepreneurs. Shape the future with us."
        img1={avocado}
        img2={banana}
        learnMoreLink="/contactus"
      />
      <ProductsData
        className="first-des"
        heading="Loop Smart Devices"
        text="Embrace the power of connectivity with our range of smart devices. From intelligent home automation to cutting-edge wearables, Loop Smart Devices seamlessly integrate into your lifestyle, providing convenience and efficiency."
        img1={durian}
        img2={mango}
        learnMoreLink="/contactus"
      />
      <ProductsData
        className="first-des-reverse"
        heading="Loop Consultancy Services"
        text="Navigate the complexities of modern business with Loop Consultancy Services. Our team of experts provides strategic guidance, leveraging industry insights to drive your success."
        img1={pear}
        img2={peach}
        learnMoreLink="/contactus"
      />
      <ProductsData
        className="first-des"
        heading="Loop Sustainable Solutions"
        text="Committed to environmental stewardship, Loop offers sustainable solutions for a greener tomorrow. From eco-friendly products to carbon-neutral initiatives, join us in making a positive impact."
        img1={kiwi}
        img2={papaya}
        learnMoreLink="/contactus"
      />
    </div>
  );
};

export default Products;
