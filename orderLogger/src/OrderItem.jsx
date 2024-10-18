import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";

import { useState } from "react";

import "./OrderItem.css";

export default function OrderItem({ order }) {
    const [expand, setExpand] = useState(false);
    const expandItem = () => {
        setExpand((currExpand) => !currExpand);
    };
    return (
        <div className={`OrderItem ${expand ? "expanded" : ""}`} elevation={3}>
            <div className="header">
                <span>{order.soft1Id}</span>
                <span>{order.customerName}</span>
                <span>{order.customerPhone}</span>
                <span>{order.date}</span>
                <span>{order.salesman}</span>
                <Checkbox checked={order.completed} />
                <IconButton variant="text" onClick={expandItem}>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <div className="moreInfo">
                <div className="orderedItems">
                    <h2>Ordered Items: </h2>
                    <div className="items">
                        {order.items.map((item, idx) => {
                            return <span key={idx}>{item.code}</span>;
                        })}
                    </div>
                </div>
                <div className="comment"></div>
            </div>
        </div>
    );
}
