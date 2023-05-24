import Layout from "../layout";
import '../css/styles.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import eclair from '../Assets/eclair.jpg';
import kebab from '../Assets/kebab.jpg';
import salmon from '../Assets/salmon.jpg';

export default function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return(
        <Layout>
            <div id="home">
                <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item id="carousel-items">
                        <img className="carousel-img" src={eclair} alt="First slide"/>
                        <Carousel.Caption id="caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={kebab}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={salmon}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Layout>
    )
}