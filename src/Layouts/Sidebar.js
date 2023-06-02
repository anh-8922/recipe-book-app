import React from "react";
import '../Styles/component.css';
import { Routes, Route, NavLink, useNavigate  } from "react-router-dom";
import Home from "../Pages/Home";
import RecipePage from "../Pages/Recipe";
import AddRecipe from "../Components/AddRecipe";

import About from "../Pages/About";
import Lookup from "../Pages/Lookup";
import Contact from "../Pages/Contact";
import {RiHomeSmileLine} from 'react-icons/ri';
import {GiSecretBook} from 'react-icons/gi';
import {RiAddBoxFill} from 'react-icons/ri';
import {RiMentalHealthFill} from 'react-icons/ri';
import {RiFileInfoFill} from 'react-icons/ri';
import {RiMailSendFill} from 'react-icons/ri';

export default function Sidebar() {
    
    return (
        <>
            <nav>                                                                        
                <NavLink to="/home"  className='nav-items'><RiHomeSmileLine/>Main Board</NavLink>
                <NavLink to="/recipe" className="nav-items"><GiSecretBook/>Recipe</NavLink>
                <NavLink to="/lookup" className="nav-items"><RiAddBoxFill/>Look up</NavLink>
                
                <NavLink to="/addnewrecipes" text={'Add Your Recipe'} className="nav-items"><RiAddBoxFill/>Add Recipe</NavLink>
                <NavLink   className="nav-items"><RiMentalHealthFill/>Tools</NavLink>
                <NavLink to="/about" className="nav-items"><RiFileInfoFill/>About</NavLink>
                <NavLink to="/contact"  className="nav-items"><RiMailSendFill/>Contact</NavLink>
            </nav>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/lookup" element={<Lookup/>}/>
                
            </Routes>                
        </>
    )
}