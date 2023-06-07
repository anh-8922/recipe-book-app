import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";
import LoginButton from "../Components/LoginButton";


export default function MainLayout({children}) {
    return(
        <div className="main">
            <Sidebar/>
            <div className="side">
                <div className="top"><LoginButton/></div>
                <div className="content">{children}</div>
            </div>            
        </div>
    )
}