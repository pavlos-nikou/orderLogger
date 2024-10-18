import OrderItem from "./OrderItem";


import "./OrderList.css";
export default function OrderList({ orders }) {
    return (
        <div className="OrderList" elevation={3}>
            {orders.map((order) => {
                return <OrderItem key={order.id} order={order} />;
            })}
        </div>
    );
}
