import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MainRecipeCards from "../Components/Category/MainRecipes";
import AddRecipe from "../Components/AddRecipe";
import SpecialRecipes from "../Components/Category/Special";
import QuickRecipes from "../Components/Category/QuickRecipes";
import SearchBar from "../Components/SearchBar";
import Appetizer from "../Components/Category/Appetizer";
import Desserts from "../Components/Category/Dessert";
import SearchContextFunction from "../Context/SearchContext";
import '../Styles/page.css';
import MainLayout from "../Layouts/MainLayout";
import SearchPage from "./SearchPage";

export default function Lookup() {

  
  return (
      
      <MainLayout>
        
        
        <SearchContextFunction>
            <div className="App">
            <Desserts/>
            <Appetizer/>
            <SearchBar/>
            <QuickRecipes/>
            <SpecialRecipes/>
           
            <MainRecipeCards/>
            <Routes>
                
                <Route path="/search" element={<SearchPage/>}/>
                
            </Routes>

            </div>
        </SearchContextFunction>
    
        
      </MainLayout>
      
  )
}
 


