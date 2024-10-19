/* eslint-disable no-unused-vars */

import AnnounceBar from "../../components/needus/AnnounceBar/AnnounceBar";
import CategoryBanner from "../../components/needus/CategoryBanner/CategoryBanner";
import Footer from "../../components/needus/Footer/Footer";
import Header from "../../components/needus/Header/Header";
import MainProduct from "../../components/needus/MainProduct/MainProduct";
import NavBar from "../../components/needus/NavBar/NavBar";
import SuscribeSection from "../../components/needus/SuscribeSection/SuscribeSection";

const ProductPageNeedus = () => {
  const title = "tv collection";
  const breadcrumbs = ["home", "product", "tv collection"];

  return (
    <>
      <AnnounceBar />
      <Header />
      <NavBar />
      <CategoryBanner title={title} breadcrumbs={breadcrumbs} />
      <MainProduct />
      <SuscribeSection />
      <Footer />
    </>
  );
};

export default ProductPageNeedus;
