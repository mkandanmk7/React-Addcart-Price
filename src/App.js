import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="d-flex justify-content-between p-2 my-2">
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
