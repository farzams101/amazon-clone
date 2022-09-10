import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { v4 as uuidv4 } from "uuid";

const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(parseInt(rating))
            .fill()
            .map((_, i) => (
              <p key={uuidv4()}>
                <StarIcon />
              </p>
            ))}

          {rating > parseInt(rating) && (
            <p>
              <StarHalfIcon />
            </p>
          )}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
