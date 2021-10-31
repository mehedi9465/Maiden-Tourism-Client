import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-4 text-white mb-4'>Win a free tour package at Sajek Valley</h1>
            <Button size='lg' variant='outline-dark'>Learn More</Button>
        </div>
    );
};

export default Banner;