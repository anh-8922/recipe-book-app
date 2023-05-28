import Sidebar from "../Components/sidebar";
import './layoutcss.css';
import Category from "../Components/category";

export default function FirstLayout({children}) {
    return(
        <>
            <Sidebar/>
            <div id="content">
                <Category/>
                <div>{children}</div>
            </div>         
        </>
       
    )
}