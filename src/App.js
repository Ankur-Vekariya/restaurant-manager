import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/product-list",
    element: (
      <div>
        <ProductList />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
