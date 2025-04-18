import Header from "./Header";
import ShoppingList
 from "./ShoppingList";
 import reactLogo from "./assets/react.svg"
 import './App.css'
function App() {
  return (
    <div>
      <img src={reactLogo}></img>
      <Header />
      <ShoppingList />
    </div>
  );
}

export default App;
