import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList/>
    </div>
  );
}

export default App;
