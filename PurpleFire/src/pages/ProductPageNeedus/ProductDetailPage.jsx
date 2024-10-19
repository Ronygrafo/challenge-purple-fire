import AnnounceBar from "../../components/AnnounceBar/AnnounceBar";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import Footer from "../../features/Footer/Footer";
import Header from "../../features/Header/Header";
import MainProduct from "../../features/MainProduct/MainProduct";
import NavBar from "../../features/NavBar/NavBar";
import SuscribeSection from "../../components/SuscribeSection/SuscribeSection";
import RelatedProducts from "../../features/RelatedProducts/RelatedProducts";

const ProductDetailPage = () => {
  return (
    <>
      <AnnounceBar />
      <Header />
      <NavBar />
      <CategoryBanner
        title={"tv collection"}
        breadcrumbs={["home", "product", "tv collection"]}
      />
      <MainProduct />
      <RelatedProducts/>
      <SuscribeSection />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
