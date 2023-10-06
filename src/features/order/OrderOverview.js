import { useSelector } from "react-redux";
import OrderProductSummary from "./OrderProductSummary";

function OrderOverview() {
  const { orderProductList, orderPrice } = useSelector((state) => state.order);
  return (
    <div className="orderOverview">
      <h1>Your Order</h1>
      {orderProductList.map((orderProduct) => (
        <OrderProductSummary
          key={orderProduct.id}
          orderProduct={orderProduct}
        />
      ))}

      <div className="ProductsTotal">
        <h2>Total</h2>
        <h1>$ {orderPrice}</h1>
      </div>
    </div>
  );
}

export default OrderOverview;
