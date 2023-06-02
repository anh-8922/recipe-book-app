import React from "react";
import '../Styles/component.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import RecipePage from "../Pages/Recipe";
import About from "../Pages/About";
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
                <NavLink   className="nav-items"><RiAddBoxFill/>Look up</NavLink>
                <NavLink   className="nav-items"><RiAddBoxFill/>Add Recipe</NavLink>
                <NavLink   className="nav-items"><RiMentalHealthFill/>Tools</NavLink>
                <NavLink to="/about" className="nav-items"><RiFileInfoFill/>About</NavLink>
                <NavLink to="/contact"  className="nav-items"><RiMailSendFill/>Contact</NavLink>
            </nav>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>                
        </>
    )
}