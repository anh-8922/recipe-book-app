
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kitchen from './Assets/kitchen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/home";
import WelcomePage from "./Pages/Welcome";

function App() {
  return (
    <div id="main" style={{ 
      backgroundImage: `url(${kitchen})`, 
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat", 
      height: 'auto'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
