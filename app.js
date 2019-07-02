import express from "express";
import db from "./db/db";

const app = express();

app.get("/fake/orders", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    orders: db
  });
});

app.post("/fake/orders", (req, res) => {
  console.log(req.body);
  if (req.body) {
    return res.status(400).send({
      success: "false",
      message: "title is required"
    });
  } else {
     const n = req.query.n;
    for (let i = n; i >= 1; i--) {
     const order = {
       id: db.length + 1,
       properties: db[0].properties
     };
     db.push(order);
    }

    return res.status(201).send({
      success: "true",
      message: "order added successfully",
      db
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
