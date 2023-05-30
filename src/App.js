import logo from './logo.svg';
import './App.css';

import SearchBar from './Components/SearchBar';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import HomePage from './Pages/Home';
import AddNewRecipePage from './Pages/AddNewRecipePage';
import AddRecipe from './Components/AddRecipe';
import SearchContextFunction from './Context/SearchContext';

function App() {

  
  return (
    <BrowserRouter>
      <SearchContextFunction>
        <div className="App">
          <SearchBar/>
          <AddRecipe 
                    text={'Add Your Recipe'}
                    to='/addnewrecipes'
                    />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path= '/addnewrecipes' element = {<AddNewRecipePage/>} />
          </Routes>

        </div>
      </SearchContextFunction>
    </BrowserRouter>
  );
}

export default App;
