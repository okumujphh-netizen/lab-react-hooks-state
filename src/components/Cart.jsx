
function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <p key={`${item.id}-${index}`}>
            {item.name} is in your cart
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;
