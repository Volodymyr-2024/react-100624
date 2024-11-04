import { connect } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart, updateQuantity }) {
  function countTotal() {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </ul>
      <p>Total: ${countTotal()}</p>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    cart: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    updateQuantity: (id, quantity) => dispatch(updateQuantity(id, quantity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
