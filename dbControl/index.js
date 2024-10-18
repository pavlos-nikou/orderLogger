const express = require("express");
const mongoose = require("mongoose");
const Order = require("./models/Order");
const app = express();
const port = 3000;

require("dotenv").config();

const mongodbUrl = process.env.DB_URL;

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("the server seems to work fine...i think???");
});

app.get("/getOrders", async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

app.post("/newOrder", async (req, res) => {
    // const newOrder = new Order({
    //     customerName: "test",
    //     customerPhone: "97751330",
    //     soft1Id: "STOR50TF00001",
    //     items: [
    //         { code: "lat.01666", quantity: 3, arrived: false },
    //         { code: "lat.01450", quantity: 1, arrived: false },
    //     ],
    //     called: true,
    //     completed: false,
    //     date: "14/8/24",
    //     salesman: "2421",
    //     comment: "ton epkiasa tha perasi avrio",
    // });
    // await newOrder.save();
    // res.send({ status: "Done", submitted: newOrder });\
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
