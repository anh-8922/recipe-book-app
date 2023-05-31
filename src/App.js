
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import WelcomePage from "./Pages/Welcome";
import RecipePage from "./Pages/Recipe";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/recipe" element={<RecipePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
//<Route path="/home" element={<Home/>}/>