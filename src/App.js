import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer";


function App() {
  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
        <ItemListContainer greeting= "No disponible por el momento"/>
      </Router>
    </div>
    </>
  );
}

export default App;
