import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../images/notFound/404-drib23.gif'

const Notfound = () => {
    return (
        <div className='text-center'>
            <Image className='py-5 my-5' src={logo} fluid/>
        </div>
    );
};

export default Notfound;