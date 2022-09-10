import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { v4 as uuidv4 } from "uuid";

const promise = loadStripe(
  "pk_test_51LQzDXJXqnou61MJwekO9xRJAlmxCZ6X6G7eZERiGNyfLuvggtYL5DwLY8Z2k6yJqMS3rE5gRBtdOJ0CBVLBECey00Tod4YQYi"
);

function App() {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={[
            <Header key={uuidv4()} />,
            <Home key={uuidv4()} />,
            <Footer key={uuidv4()} />,
          ]}
        />
        <Route
          path="/checkout"
          element={[
            <Header key={uuidv4()} />,
            <Checkout key={uuidv4()} />,
            <Footer key={uuidv4()} />,
          ]}
        />
        <Route
          path="/payment"
          element={[
            <Header preventSignOut={true} key={uuidv4()} />,
            <Elements stripe={promise} key={uuidv4()}>
              <Payment />
            </Elements>,
            <Footer key={uuidv4()} />,
          ]}
        />
        <Route path="/login" element={<Login key={uuidv4()} />} />
        <Route
          path="/orders"
          element={[
            <Header key={uuidv4()} />,
            <Orders key={uuidv4()} />,
            <Footer key={uuidv4()} />,
          ]}
        />
      </Routes>
    </Router>
  );
}

export default App;
