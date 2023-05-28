import FirstLayout from "../layouts/FirstLayout";
import './pagecss.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import eclair from '../Assets/eclair.jpg';
import kebab from '../Assets/kebab.jpg';
import salmon from '../Assets/salmon.jpg';
import FlipCards from "../Components/FlipCard";

export default function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return(
        <FirstLayout>
            <div id="home">
                <section id="carousel"><FlipCards/></section>
                  
            </div>
        </FirstLayout>
    )
}