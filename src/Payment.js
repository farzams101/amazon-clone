import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import NumberFormat from "react-number-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [submitBtnText, setSubmitBtnText] = useState("Buy Now");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${Math.round(getCartTotal(cart) * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log("CS", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.currentTarget.disabled = true;
    setError(null);
    setSubmitBtnText("Processing");
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        dispatch({
          type: "EMPTY_CART",
        });
        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(!event.complete);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} Items)</Link>
        </h1>

        {/* Payment Section - Address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>XYZ React Road</p>
            <p>Mumbai</p>
            <p>Maharashtra</p>
          </div>
        </div>

        {/* Payment Section - Review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item) => (
              <CheckoutProduct
                key={uuidv4()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton={cart.length === 1}
              />
            ))}
          </div>
        </div>

        {/* Payment Section - Payment Method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe functionality */}
            <form>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <NumberFormat
                  value={getCartTotal(cart)}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                />
                <button
                  className="payment__button"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  {submitBtnText}
                </button>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
