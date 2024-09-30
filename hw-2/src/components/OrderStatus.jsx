export default function OrderStatus({ orderId, status }) {
  return (
    <p>
      Заказ #{orderId}: {status}
    </p>
  );
}
