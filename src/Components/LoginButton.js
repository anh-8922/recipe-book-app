import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../Styles/component.css';
import { useState } from "react";
import { signOut } from "firebase/auth";
import UserPage from "../Pages/UserPage";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import AddRecipe from "../Pages/AddRecipe";

export default function LoginButton () {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/home";
        });
      };
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/user");
        });
      };

    return(
        <>
            
            {!isAuth ? (
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Login</button>
//<Link to="/login" id="login-button"> Login </Link>
            ) : (
            <>
                <Link to="/addnewrecipes"> Create Post </Link>
                <button onClick={signUserOut}> Log Out</button>
            </>
            )}
            <Routes>
                
                <Route path="/user" element={<UserPage isAuth={isAuth} />} />
                <Route path="/addnewrecipes" element={<AddRecipe isAuth={isAuth} />} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            </Routes>
        </>
    )
}

//<Link to="/login" id="login-button">Login</Link>
//<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />