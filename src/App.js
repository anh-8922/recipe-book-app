
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kitchen from './Assets/kitchen.jpg';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/home";

function App() {
  return (
    <div id="main" style={{ backgroundImage: `url(${kitchen})`, backgroundSize: "cover", height: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
