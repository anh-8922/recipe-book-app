
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContextFunction from './Context/SearchContext';
import Home from './Pages/Home';
import WelcomePage from "./Pages/Welcome";
import RecipePage from "./Pages/Recipe";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SearchPage from "./Pages/SearchPage";
import AddNewRecipePage from "./Pages/AddNewRecipePage";

function App() {
  return (
      <BrowserRouter>
        <SearchContextFunction>
          <Routes>
            <Route exact path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/recipe" element={<RecipePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path= '/addnewrecipes' element = {<AddNewRecipePage/>} />
          </Routes>
        </SearchContextFunction>
      </BrowserRouter>
  )
}

export default App;
//<Route path="/home" element={<Home/>}/>