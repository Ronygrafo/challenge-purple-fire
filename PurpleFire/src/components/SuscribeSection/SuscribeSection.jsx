import SuscribeInput from "../SuscribeInput/SuscribeInput";
import "./SuscribeSection.css";

const SuscribeSection = () => {
  const handleSubscribe = async (email) => {
    console.log("suscribing", email);
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log("suscribe succesful", email);
  };

  return (
    <section className="newsletter-signup full-width">
      <div className="newsletter-text">
        <h2>Join our newsletter and get offers</h2>
        <p>Sign up our newsletter</p>
      </div>

      <SuscribeInput
        onSubscribe={handleSubscribe}
        placeholder="Enter your email"
        buttonText="Subscribe"
      />
    </section>
  );
};

export default SuscribeSection;
