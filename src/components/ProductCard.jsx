const ProductCard = ({ img, title, desc, price, animDelay }) => {
  return (
    <div
      className="product-card"
      data-aos="zoom-in-up"
      data-aos-delay={animDelay}
      data-aos-duration="1200"
    >
      <figure>
        <img src={img} alt={title} />
      </figure>
      <figcaption className="">
        <h2 className="product-title">{title}</h2>
        <p className="product-desc px-3 line-clamp-2">{desc}</p>
        <div className="price-btn-container my-5 flex justify-evenly items-center">
          <button>View Details</button>
          <span className="product-price">{price} EGP</span>
        </div>
      </figcaption>
    </div>
  );
};

export default ProductCard;
