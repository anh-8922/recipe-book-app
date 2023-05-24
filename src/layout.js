import Sidebar from "./Components/sidebar";
import './css/styles.css';
import Category from "./Components/category";

export default function Layout({children}) {
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