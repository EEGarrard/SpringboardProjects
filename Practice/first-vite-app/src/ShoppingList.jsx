import ShoppingListItem from "./ShoppingListItem";
import "./ShoppingList.css" 

const items = [
  {
    id: 1,
    item: "Milk",
    price: 3.99,
    qty: 1,
  },
  {
    id: 2, item: "Eggs", price: 4.75, qty: 12
  },
  {
    id: 3, item: "Lemon", price: .99, qty: 5
  },
  {
    id: 4, item: "Donuts", price: 1.25, qty: 6
  }
];

function ShoppingList() {
  return (
    <div className="ShoppingList">
      <h2 style={{backgroundColor: "yellow"}}>Shopping List</h2>
      <ul>
        {items.map(i =>{
          return <ShoppingListItem item={i.item} price={i.price} qty={i.qty}/>
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
