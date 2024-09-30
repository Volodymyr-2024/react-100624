import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";

const items = [
  { id: 1, name: "Хлеб" },
  { id: 2, name: "Молоко" },
  { id: 3, name: "Масло" },
];

const orders = [
  { orderId: 123, status: "в пути" },
  {
    orderId: 124,
    status: "готов",
  },
];

function App() {
  return (
    <div>
      <Greeting name="Steve" />
      <ShoppingList items={items} />
      {orders.map((order) => {
        return (
          <OrderStatus
            key={order.orderId}
            orderId={order.orderId}
            status={order.status}
          />
        );
      })}
    </div>
  );
}

export default App;
