import "./ShoppingListItem.css";

function ShoppingListItem({ item, price, qty }) {
  return (
    <li style={{ color: price > 3 ? "red" : "green" }}>
      <b>{item}</b>- ${price}- quantity: {qty}
    </li>
  );
}

export default ShoppingListItem;
