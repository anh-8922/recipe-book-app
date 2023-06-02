import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import WelcomePage from "./Pages/Welcome";
import RecipePage from "./Pages/Recipe";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AddNewRecipePage from "./Pages/AddNewRecipePage";
import SearchPage from './Pages/SearchPage';
import Lookup from "./Pages/Lookup";


function App() {

  
  return (
      
      <BrowserRouter>
        
            <Routes>
              <Route exact path="/" element={<WelcomePage/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/recipe" element={<RecipePage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path= '/addnewrecipes' element = {<AddNewRecipePage/>} />
              <Route path="/lookup" element={<Lookup/>}/>
            </Routes>

         
      </BrowserRouter>
  )
}
 


export default App;
