import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {!user && <h2>Sign In to view your orders</h2>}
        {user && orders.length === 0 && (
          <h2>You've not ordered any items yet.</h2>
        )}
        {orders.map((order) => (
          <Order key={uuidv4()} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
