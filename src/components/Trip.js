import "./TripStyles.css";
import TripData from "./TripData";
import blackcurrant from "../assets/blackcurrant.jpg";
import guava from "../assets/guava.jpg";
import grape from "../assets/grape.jpg";
import lemon from "../assets/lemon.jpg";
import melon from "../assets/melon.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Testimonials</h1>
      <div className="tripcard">
        <TripData
          image={blackcurrant}
          heading="Alice Thompson"
          text="&quot;Loop Cloud Services transformed our data management. The scalability and security are unmatched. It's a game-changer for any business aiming for strategic growth. Loop exceeded our expectations!&quot;"
        />

        <TripData
          image={grape}
          heading="David Rodriguez"
          text="&quot;Loop Innovation Hub provided an invaluable environment for my startup. The collaborative spaces and mentorship propelled us forward. Loop truly fosters innovation and shapes the future.&quot;"
        />

        <TripData
          image={guava}
          heading="Sophie Chen"
          text="&quot;Loop Smart Devices have revolutionized my home. The seamless integration of automation and wearables offers unparalleled convenience. Loop's commitment to smart living is commendable. Highly recommended!&quot;"
        />
        <TripData
          image={melon}
          heading="Jonathan Turner"
          text="&quot;Loop Cloud Services streamlined our operations. The flexibility and reliability of their cloud solutions empower us to utilize data strategically. Loop is a key partner in our business success.&quot;"
        />
        <TripData
          image={lemon}
          heading="Elena Martinez"
          text="&quot;Loop Innovation Hub is a beacon for entrepreneurs. The resources and support provided are exceptional. Being part of the Loop community has been instrumental in shaping my startup's success.&quot;"
        />
      </div>
    </div>
  );
}

export default Trip;
