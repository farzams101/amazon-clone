import React from "react";
import moment from "moment";
import NumberFormat from "react-number-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";
import { v4 as uuidv4 } from "uuid";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.cart.map((item) => (
        <CheckoutProduct
          key={uuidv4()}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <NumberFormat
        value={order.data.amount / 100}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
      />
    </div>
  );
}

export default Order;
