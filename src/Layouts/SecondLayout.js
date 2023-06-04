import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";

export default function SecondLayout({children}) {
    return(
        <div className="main">
            <Sidebar/>
            <div className="side">
                
                <div className="content">{children}</div>
            </div>            
        </div>
    )
}