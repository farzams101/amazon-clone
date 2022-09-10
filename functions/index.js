const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LQzDXJXqnou61MJYZJORxISpOXblH9Or3rKy6VgIbA344vfl067uJe94ajqqfm2LyRhJ6OEL1TJpAvMdLvAUBle009biyUU0A"
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
    payment_method_types: ["card"],
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-593e7/us-central1/api
