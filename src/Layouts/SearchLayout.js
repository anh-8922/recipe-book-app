import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";
import kebab from '../Assets/kebab.jpg';

export default function SearchLayout({children}) {
    return(
        <div className="main">
            <Sidebar/>
            <div className="search-layout">
                {children}
            </div>            
        </div>
    )
}