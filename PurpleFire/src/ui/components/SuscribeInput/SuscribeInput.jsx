/* eslint react/prop-types: 0 */

import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./SuscribeInput.css";

const SuscribeInput = ({
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onSubscribe,
}) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && onSubscribe) {
      try {
        await onSubscribe(email);
        console.log("Suscribed");
        setIsSubscribed(true);
        setEmail("");
      } catch (error) {
        console.error("Suscribe Error:", error);
      }
    }
  };

  return (
    <form className={`subscribe-input`} onSubmit={handleSubmit}>
      <input
        type="email"
        className="subscribe-input__field"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubscribed}
      />
      <PrimaryButton
        text={isSubscribed ? "Subscribed!" : buttonText}
        className={`${isSubscribed ? "subscribe-success" : "primary-button"}`}
        disabled={isSubscribed}
        type="submit"
      />
    </form>
  );
};

export default SuscribeInput;
