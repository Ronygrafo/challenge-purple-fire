/* eslint-disable no-unused-vars */

import AnnounceBar from "../../components/needus/AnnounceBar/AnnounceBar";
import Footer from "../../components/needus/Footer/Footer";
import Header from "../../components/needus/Header/Header";
import IconButton from "../../components/needus/IconButton/IconButton";
import MainProduct from "../../components/needus/MainProduct/MainProduct";
import NavBar from "../../components/needus/NavBar/NavBar";
import PrimaryButton from "../../components/needus/PrimaryButton/PrimaryButton";
import SuscribeInput from "../../components/needus/SuscribeInput/SuscribeInput";
import SuscribeSection from "../../components/needus/SuscribeSection/SuscribeSection";

const ProductPageNeedus = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  const handleSubscribe = async (email) => {
    console.log("suscribing", email);
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log("suscribe succesful", email);
  };

  return (
    <>
      <AnnounceBar />
      <Header/>
      <NavBar/>
      <MainProduct/>
      <SuscribeSection/>
      <Footer/>

      {/* <header>Header</header>
      <main>
        Main
        <PrimaryButton
          text="Buy Now"
          onClick={handleClick}
          className="primary-button"
        />
        <PrimaryButton
          text="Add to Cart"
          onClick={handleClick}
          className="secondary-button"
        />
        <IconButton
          text="Add to Cart"
          onClick={handleClick}
          className=""
          iconName="shopping_cart"
          iconPosition="left"
        />
        <SuscribeInput
          onSubscribe={handleSubscribe}
          placeholder="Enter your email"
          buttonText="Subscribe"
        />
      </main>
      <article>Suscribe</article>
      <footer>Footer</footer> */}
    </>
  );
};

export default ProductPageNeedus;
