function OrderProductSummary({ orderProduct }) {
  return (
    <div className="orderProductSummary">
      <div className="left">
        <img src={orderProduct.images[0]} alt="orderProduct" />
        <div>
          <h3>{orderProduct.title}</h3>
          <h4>$ {orderProduct.price}</h4>
        </div>
      </div>
      <div className="right">
        <p>X {orderProduct.quantity}</p>
        <p>$ {orderProduct.totalPrice}</p>
      </div>
    </div>
  );
}

export default OrderProductSummary;
