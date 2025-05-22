import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
function App() {
  return (
    // <header>
    //   <nav>
    //     <h1>Jobarouter</h1>
    //     <Link to='/'>Home</Link><br/>
    //     <NavLink to='about'>About</NavLink>
    //   </nav>
    // </header>
    // <main>

    //   </main>

    <RouterProvider router={router}/>
  );
}

export default App;
