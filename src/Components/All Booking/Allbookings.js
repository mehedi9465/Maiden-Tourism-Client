import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Allbookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('https://gruesome-village-31529.herokuapp.com/bookings')
        .then(({ data }) => {
            console.log(data);
            setBookings(data)
        })
    }, [])

    return (
        <Container className='py-5'>
                <Row>
                    <Col></Col>
                    <Col>Booked by</Col>
                    <Col>Date</Col>
                    <Col>Status</Col>
                </Row>
            {   
                bookings.map(booking => <Row className='bg-light my-3 rounded-3 d-flex justify-content-center align-items-center'>
                    <Col> <Image src={booking?.img} width='150px' thumbnail/> </Col>
                    <Col>{booking?.name}</Col>
                    <Col>{booking?.date}</Col>
                    <Col>
                        {
                            booking?.status === "approved"?
                            <p>Approved <Image src='https://cdn-icons-png.flaticon.com/512/190/190411.png' width='16' /> </p>
                            : 
                            <p>Pending <Image src='https://cdn-icons-png.flaticon.com/512/251/251974.png' width='16'/> </p>
                        }
                    </Col>
                </Row>)
            }
        </Container>
    );
};

export default Allbookings;