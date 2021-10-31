import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/packages')
        .then(({ data }) => setPackages(data))
    }, []);

    return (
            <Container id='packages' className='py-5'>
                    <Row className='justify-content-center'>
                        {
                            packages.map(pkg => 
                            <Package pckg={pkg} 
                            key={pkg._id}></Package>)
                        }
                    </Row>
            </Container>
    );
};

export default Packages;