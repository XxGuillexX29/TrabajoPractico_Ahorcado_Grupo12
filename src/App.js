import "./App.css";
import "./index.css";
import './index.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Paginaprincipal from "./components/Paginaprincipal.js"
import Jugar from './components/Jugar.js';
import Colaboradores from "./components/Colaboradores";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/"element={<Paginaprincipal/>}/>;
        <Route path= "/Colaboradores" element={<Colaboradores/>}/>;
        <Route path= "/Jugar" element={<Jugar/>}/>;

        
      </Routes>

    </Router>
  );

}

export default App;
