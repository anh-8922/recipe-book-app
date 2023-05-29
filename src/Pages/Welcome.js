import label from '../Assets/label.png'
import './pagecss.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './home';

export default function WelcomePage() {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate('/home')
    }
    return(
        <>
            <div id='welcome' style={{backgroundImage: `url(${label})`}}>
                <button onClick={navigateToPage}>Get Started</button>
            </div>
            <Routes>
                
                
                <Route path="/home" element={<Home/>}/>
            </Routes>
            
        </>
    )
}



