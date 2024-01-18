import React from 'react';
import Skills from "../components/skills/Skillset";
import Carousel from "../components/carousel/carousel";
import './homepage.css';

function Homepage() {
    return (
        <div>
            <section id="section1">
                <h2>Sekce 1</h2>

            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                <Skills></Skills>
            </section>
            <section id="section3">

                <h2>Sekce 3</h2>
<Carousel></Carousel>

            </section>
        </div>
    );
}
export default Homepage;


