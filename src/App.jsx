// import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import productImage from "./assets/laptop.png";
import brand1 from "./assets/brand-1.png";
import brand2 from "./assets/brand-2.png";
import brand3 from "./assets/brand-3.png";
import brand4 from "./assets/brand-4.png";
import brand5 from "./assets/brand-5.png";
import brand6 from "./assets/brand-6.png";
// const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
import lottie from "lottie-web";
window.lottie = lottie;
import "lord-icon-element";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />

      <section className="landing">
        <div className="overlay flex justify-center items-center">
          <div className="landing-text text-white flex flex-col justify-center items-center">
            <h1>Shop with confidence, knowing you're in good hands.</h1>
            <p>
              "Echo New offers a curated selection of reliable monitors,
              laptops, PCs, and accessories. We also provide expert fixing
              services to keep your tech running smoothly. Shop with confidence,
              knowing you're investing in quality and backed by our trusted
              support."
            </p>
            <button>Explore Products</button>
          </div>
        </div>
      </section>

      <section className="features flex flex-col justify-center items-center py-20 text-center">
        <h2
          className="sec-title relative w-fit font-bold mb-10 p-3"
          data-aos="flip-down"
        >
          Our Services Features
        </h2>
        <div className="feature-container relative mt-14 flex justify-center items-center gap-14 py-10 container mx-auto">
          <div className="feature px-7 py-3 rounded-2xl" data-aos="fade-right">
            <lord-icon
              src="https://cdn.lordicon.com/vttzorhw.json"
              trigger="hover"
              style={{ width: "180px", height: "180px" }}
            ></lord-icon>
            <h3 className="font-semibold text-3xl">Guaranteed Quality</h3>
          </div>
          <div
            className="feature  px-7 py-3 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/bktacmnd.json"
              trigger="hover"
              style={{ width: "180px", height: "180px" }}
            ></lord-icon>
            <h3 className="font-semibold text-3xl">Competitive Prices</h3>
          </div>
          <div
            className="feature  px-7 py-3 rounded-2xl"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <lord-icon
              src="https://cdn.lordicon.com/ytklkgsc.json"
              trigger="hover"
              style={{ width: "180px", height: "180px" }}
            ></lord-icon>
            <h3 className="font-semibold text-3xl">Full Warranty</h3>
          </div>
          <div
            className="feature px-7 py-3 rounded-2xl"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/fwkrbvja.json"
              trigger="hover"
              style={{ width: "180px", height: "180px" }}
            ></lord-icon>
            <h3 className="font-semibold text-3xl">Technical Support</h3>
          </div>
        </div>
      </section>

      <section className="pro-products flex flex-col justify-center items-center py-20 text-center">
        <h2
          className="sec-title relative text-white w-fit font-bold mb-10 p-3"
          data-aos="flip-up"
        >
          Some Products
        </h2>
        <div className="cards-container container mt-12 mx-auto grid-container ">
          <div className="product-box flex justify-center items-center">
            <ProductCard
              img={productImage}
              title={"HP Elitebook 840 G3"}
              desc={
                "CPU: Intel Core i5-1035G1, RAM: 8GB, SSD: 512GB, HDD: 1TB, Graphics: Intel UHD Graphics 630"
              }
              price={"5000"}
              animDelay={"0"}
            />
          </div>
          <div className="product-box flex justify-center items-center">
            <ProductCard
              img={productImage}
              title={"HP Elitebook 840 G3"}
              desc={
                "CPU: Intel Core i5-1035G1, RAM: 8GB, SSD: 512GB, HDD: 1TB, Graphics: Intel UHD Graphics 630"
              }
              price={"5000"}
              animDelay={"300"}
            />
          </div>
          <div className="product-box flex justify-center items-center">
            <ProductCard
              img={productImage}
              title={"HP Elitebook 840 G3"}
              desc={
                "CPU: Intel Core i5-1035G1, RAM: 8GB, SSD: 512GB, HDD: 1TB, Graphics: Intel UHD Graphics 630"
              }
              price={"5000"}
              animDelay={"600"}
            />
          </div>
          <div className="product-box flex justify-center items-center">
            <ProductCard
              img={productImage}
              title={"HP Elitebook 840 G3"}
              desc={
                "CPU: Intel Core i5-1035G1, RAM: 8GB, SSD: 512GB, HDD: 1TB, Graphics: Intel UHD Graphics 630"
              }
              price={"5000"}
              animDelay={"900"}
            />
          </div>
        </div>
      </section>

      <section className="brands flex flex-col justify-center items-center py-20 text-center">
        <h2
          className="sec-title relative w-fit font-bold mb-10 p-3"
          data-aos="flip-up"
        >
          Our Brands
        </h2>
        <div className="slider mt-16">
          <div className="list">
            <div className="item pos-1">
              <img src={brand1} alt="" />
            </div>
            <div className="item pos-2">
              <img src={brand2} alt="" />
            </div>
            <div className="item pos-3">
              <img src={brand3} alt="" />
            </div>
            <div className="item pos-4">
              <img src={brand4} alt="" />
            </div>
            <div className="item pos-5">
              <img src={brand5} alt="" />
            </div>
            <div className="item pos-6">
              <img src={brand6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
