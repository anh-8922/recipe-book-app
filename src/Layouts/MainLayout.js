import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";
import Login from "../Components/Login";

export default function MainLayout({children}) {
    return(
        <div className="main">
            <Sidebar/>
            <div className="side">
                <Login/>
                <div className="content">{children}</div>
            </div>
            
        </div>
    )
}