import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Achievements = () => {
    return (
        <div>
           <div className='bg-light text-dark py-4'>
            <p className='text-uppercase mb-0'>Our Achievements</p>
            <p className='display-6'>Achievements acquired</p>
           <Container className='pb-3 pt-5'>
                <Row xl={4} lg={4} className='justify-content-center'>
                <Col className='text-center my-2'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' width='32'/>
                    <h1 className='my-2'><CountUp start={0} end={10745} separator=',' duration={3} delay={2}/></h1>
                    <p>Satisfied Clients</p>
                </Col>
                <Col className='text-center my-2'>
                    <Image src='https://i.ibb.co/F6yP431/2838590.png' width='32'/>
                    <h1 className='my-2'><CountUp start={0} end={10} separator=',' duration={3} delay={2}/></h1>
                    <p>Years of Experience</p>
                </Col>
                <Col className='text-center my-2'>
                <Image src='https://i.ibb.co/D9rC5b4/3483822.png' width='32'/>
                    <h1 className='my-2'><CountUp start={0} end={157} separator=',' duration={3} delay={2}/></h1>
                    <p>Big Events</p>
                </Col>

                <Col className='text-center my-2'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/485/485515.png' width='35'/>
                    <h1 className='my-2'><CountUp start={0} end={1074} separator=',' duration={3} delay={2}/></h1>
                    <p>Clients per year</p>
                </Col>
                </Row>
            </Container>
           </div>
        </div>
    );
};

export default Achievements;