import React from 'react';
import { Card,Button, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Package.css'

const Package = ({ pckg, handleCancel, handleApprove, children }) => {
    const { _id, name, img, des } = pckg;
    const history = useHistory();

    const handleDetails = id => {
        history.push(`/packages/${id}`)
    }

    return (
        <Col className='justify-content-center' xl={3} lg={4} md={6} sm={6} xs={12}>
            <Card id='card' style={{ width: '18rem'}} className='my-4 w-100'>
            <Card.Img variant="top" src={img} height='200'/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {des}
                </Card.Text>
                {
                    handleCancel ? children
                    :
                    <Button onClick={() => handleDetails(_id)} variant="outline-dark">Details <Image src='https://cdn-icons-png.flaticon.com/512/969/969616.png' width='20' /></Button>
                }
            </Card.Body>
            </Card>
        </Col>

        
    );
};

export default Package;