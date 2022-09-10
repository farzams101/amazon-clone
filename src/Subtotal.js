import React from "react";
import NumberFormat from "react-number-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();

  const handleSubmit = () => {
    if (!user) {
      alert("Please Sign In to proceed.");
      return navigate("/login");
    }
    if (cart.length === 0) {
      alert("Cart is empty. Please add items into the cart.");
      return navigate("/");
    }
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <NumberFormat
        value={getCartTotal(cart)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              <label>This order contains a gift</label>
            </small>
          </>
        )}
      />
      <button onClick={handleSubmit}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
