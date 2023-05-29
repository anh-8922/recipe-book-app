import Sidebar from "../Components/sidebar";
import './layoutcss.css';
import Login from "../Components/Login";

export default function FirstLayout({children}) {
    return(
        <>
            <Sidebar/>
            <div id="content">
                <Login/>
                <div>{children}</div>
            </div>         
        </>
       
    )
}