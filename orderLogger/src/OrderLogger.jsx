import { useState, useEffect } from "react";
import OrderList from "./OrderList";
import Paper from "@mui/material/Paper";
import Filters from "./Filters";
import "./OrderLogger.css";
import OrderTable from "./OrderTable";
import axios from "axios";
// import { getOrders } from "./dbControl";

async function getOrders() {
    const response = await axios.get("http://127.0.0.1:3000/getOrders");
    console.log("from getOrders");

    // console.log(response.data);
    return response;
}

export default function OrderLogger() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                orderData = await getOrders();
                // setOrders(ordersData);
            } catch (err) {
                console.log(err.message);
            }
        };
        getData();
    }, []);

    return (
        <Paper className="OrderLogger" elevation={5}>
            {/* <OrderTable data={orders} /> */}
        </Paper>
    );
}

// const initialOrders = [
//     {
//         id: crypto.randomUUID(),
//         customerName: "pavlos",
//         customerPhone: "97751330",
//         soft1Id: "STOR50TF00001",
//         items: [
//             { code: "lat.01666", quantity: 3, arrived: false },
//             { code: "lat.01450", quantity: 1, arrived: false },
//         ],
//         called: true,
//         completed: false,
//         date: "14/8/24",
//         salesman: "2421",
//         comment: "ton epkiasa tha perasi avrio",
//     },
//     {
//         id: crypto.randomUUID(),
//         customerName: "christos",
//         customerPhone: "99563625",
//         soft1Id: "STOR50TF00002",
//         items: [
//             { code: "lat.01665", quantity: 2, arrived: false },
//             { code: "lat.01451", quantity: 2, arrived: false },
//         ],
//         completed: true,
//         called: false,
//         date: "11/8/24",
//         salesman: "2421",
//         comment: "",
//     },
//     {
//         id: crypto.randomUUID(),
//         customerName: "petros",
//         customerPhone: "99535625",
//         soft1Id: "STOR50TF00003",
//         items: [
//             { code: "lat.01665", quantity: 2, arrived: false },
//             { code: "lat.01451", quantity: 2, arrived: false },
//         ],
//         completed: true,
//         called: false,
//         date: "5/8/24",
//         salesman: "2421",
//         comment: "",
//     },
//     {
//         id: crypto.randomUUID(),
//         customerName: "petros",
//         customerPhone: "99535625",
//         soft1Id: "STOR50TF00003",
//         items: [
//             { code: "lat.01665", quantity: 2, arrived: false },
//             { code: "lat.01451", quantity: 2, arrived: false },
//         ],
//         completed: true,
//         called: false,
//         date: "5/8/24",
//         salesman: "2421",
//         comment: "",
//     },
// ];
