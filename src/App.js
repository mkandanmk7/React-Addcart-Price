import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Main from "./Components/Main";

import data from "./data";

function App() {
  const { products } = data;
  return (
    <div className="container">
      <Header />
      <div className="d-flex my-3 ">
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
