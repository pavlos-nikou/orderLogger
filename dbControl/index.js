const express = require("express");
const mongoose = require("mongoose");
const Order = require("./models/Order");
const app = express();
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const port = 3000;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
});

require("dotenv").config();
console.log(process.env.DB_URL);

app.use(limiter);
app.use(
    cors({
        origin: "*", // This allows any origin, but it's recommended to limit it to trusted domains
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));



app.get("/", (req, res) => {
    res.send("the server seems to work fine...i think???");
});

app.get("/getOrders", async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

app.get("/newOrder", async (req, res) => {
    const newOrder = new Order({
        customerName: "test",
        customerPhone: "97751330",
        soft1Id: "STOR50TF00001",
        items: [
            { code: "lat.01666", quantity: 3, arrived: false },
            { code: "lat.01450", quantity: 1, arrived: false },
        ],
        called: true,
        completed: false,
        date: new Date().toLocaleDateString(),
        salesman: "2421",
        comment: "ton epkiasa tha perasi avrio",
    });
    await newOrder.save();
    res.send({ status: "Done", submitted: newOrder });
    // res.send(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
