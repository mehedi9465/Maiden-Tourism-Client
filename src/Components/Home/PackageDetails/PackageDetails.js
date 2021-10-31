import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Col, Image, Button, Row, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Custom Hooks/useAuth';
import swal from 'sweetalert';

const PackageDetails = () => {
    const { user } = useAuth();
    const [pckg, setpckg] = useState({});
    const { packageId } = useParams();
    const [status, setStatus] = useState(false);
    const { _id, name, img, des } = pckg;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.packageName = name;
        data.status = "pending";
        data.img = pckg?.img;
        if(data.email){
            fetch('http://localhost:4000/bookings', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    swal("Successfully Booked",{
                        icon: "success",
                      });
                }
                else{
                    swal("Something Went Wrong",{
                        icon: "error",
                      });
                }
            })
        }
        console.log(data);
        reset();
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/packages/${packageId}`)
        .then(({ data }) => setpckg(data))
    }, []);

    const checkStatus = (e) => {
        setStatus(e.target.checked);
    }

    return (
        <Container className='py-5'>
            <Row className='justify-content-center'>
            <Col xl={7} lg={7} md={12} sm={12} xs={12} >
                <Row className='justify-content-center mt-4'>
                    <Col xs={11}>
                        <Image src={img} height='500' fluid/>
                        <p className='display-5 mt-4'>{name}</p>
                        <p className='lead mt-4'>{des}</p>
                    </Col>
                </Row>
            </Col>

            <Col xl={5} lg={5} md={12} sm={12} xs={12} >
                <Row className='d-flex justify-content-center align-items-center py-5'>
                    <Col xs={9}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("name")}/>
                        <label htmlFor="floatingInput">Full Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} value={user?.email || ''}/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("phone")} />
                        <label htmlFor="floatingInput">Phone</label>
                        </div>

                        <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect01"  {...register("persons")}>
                            <option>Total Persons</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("address")} />
                        <label htmlFor="floatingInput">Address</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="floatingInput" {...register("date")} />
                        <label htmlFor="floatingInput">Date</label>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to the Terms of Services and Privacy Policy" onClick={checkStatus}/>
                            </Form.Group>
                        {
                            status ? <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' >Book</Button> : <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' disabled>Book</Button>
                        }
                        </div>

                    </form>  
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    );
};

export default PackageDetails;