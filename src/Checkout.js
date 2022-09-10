import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
// import FlipMove from "react-flip-move";
import { v4 as uuidv4 } from "uuid";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Electronification/Visa/Store/Base/header_PC.jpg"
          alt=""
          className="checkout__ad"
        />
        <h3>Hello, {!user ? "Guest" : user?.email}</h3>
        <h2 className="checkout__title">Items in your Cart</h2>
        {cart?.length === 0 && (
          <h2 className="checkout__empty">Your Cart is empty.</h2>
        )}
        {/* <FlipMove> */}
        {cart?.map((item) => (
          <CheckoutProduct
          key={uuidv4()}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* </FlipMove> */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
