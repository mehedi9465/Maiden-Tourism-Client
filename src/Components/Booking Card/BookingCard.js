import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Custom Hooks/useAuth';

const BookingCard = ({ booking, handleCancel, children }) => {
    console.log(booking, handleCancel);
    const history = useHistory()
    const { _id, img, date, name, packageName, persons, status } = booking;
    const { user } = useAuth();

    const handleUpdate = () =>{
        history.push(`/myBookings/${_id}`)
    }

    return (
            <Col>
            <Card>
                <Card.Img variant="top" src={img} height='200'/>
                <Card.Body>
                <Card.Title className='lead'>{packageName}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Booked by : <b>{name}</b></ListGroupItem>
                    <ListGroupItem><small>Date: {date}</small></ListGroupItem>
                    <ListGroupItem><small>Persons: {persons}</small></ListGroupItem>
                    {
                        status === "pending" ? <ListGroupItem><small><Image src='https://cdn-icons-png.flaticon.com/512/251/251974.png' width='16' fluid/> {status}</small></ListGroupItem>
                        :
                        <ListGroupItem><small> <Image src='https://cdn-icons-png.flaticon.com/512/190/190411.png' width='16' fluid/> {status}</small></ListGroupItem>
                    }
                    <ListGroupItem><Button className='me-3' onClick={() => handleCancel(_id)} variant='outline-dark' size='sm'>Cancel</Button> 
                    {/* {
                        status !== "approved" && children
                    } */}
                    {
                        user.email?.toLowerCase().includes('admin') ?
                        <span>
                            {
                                status !== "approved" && children
                            }
                        </span>
                        :
                        <span>
                            {
                                status !== "approved" && 
                                <Button onClick={() => handleUpdate(_id)} variant='outline-dark' size='sm'>Update</Button>
                            }
                        </span>
                    }
                    </ListGroupItem>
                </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        );
};

export default BookingCard;