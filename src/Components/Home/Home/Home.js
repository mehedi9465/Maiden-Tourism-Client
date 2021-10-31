import React from 'react';
import { Button, Image } from 'react-bootstrap';
import About from '../About/About';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <Achievements></Achievements>
            <Button id='float_Button' variant='transparent'><Image src='https://cdn-icons-png.flaticon.com/512/892/892692.png' width='64'/></Button>
        </div>
    );
};

export default Home;