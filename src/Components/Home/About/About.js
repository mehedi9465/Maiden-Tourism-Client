import React from 'react';
import { Container, Image } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-5 pb-5' id='about'>
        <h1 className='text-center mt-5 display-6'>About</h1>
            <Image className='d-block mx-auto mt-5 py-5' src='https://i.ibb.co/VqjzQ3q/3815602.png' fluid width='256'/>
            <p className='lead w-75 text-center mx-auto mt-3'>Our mission is to reduce the positive cases of covid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa obcaecati autem itaque velit mollitia, magnam ipsum corporis vitae eos magni repudiandae molestias quis est doloremque tenetur a soluta totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum est quasi doloremque iusto eum porro itaque quidem, saepe, ducimus, deleniti quam non harum accusantium sapiente odit iste labore voluptatum.</p>
        </Container>
    );
};

export default About;