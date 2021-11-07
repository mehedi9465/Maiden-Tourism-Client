import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';

const UpdateBooking = () => {
    const { bookingId, packageId } = useParams();
    const [booking, setBooking] = useState({});
    const [status, setStatus] = useState(false);

    console.log(booking);

    useEffect(() => {
        axios.get(`https://gruesome-village-31529.herokuapp.com/bookings/update/${bookingId}`)
        .then(({ data }) =>{
            console.log(data);
            setBooking(data)
        })
    }, [bookingId]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = booking?.name;
        data.email = booking?.email;
        data.address = booking?.address;
        data.packageName = booking.packageName;
        data.img = booking?.img;
        data._id = booking._id;
        data.status = "pending";
        if(data.email){
            axios.put(`https://gruesome-village-31529.herokuapp.com/bookings/update/${bookingId}`, data)
            .then(({ data }) => {
                if(data.modifiedCount){
                    swal("Successfully Updated",{
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
        reset();
    }

    const checkStatus = (e) => {
        setStatus(e.target.checked);
    }

    return (
        <Container>
            <Row className='justify-content-center py-5'>
                <Col xl={6} lg={8} md={9} sm={10} xs={10}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("name")} value={booking?.name || ''}/>
                    <label htmlFor="floatingInput">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} value={booking?.email || ''}/>
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
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("address")}  value={booking?.address || ''}/>
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
                        status ? <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' >Update</Button> : <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' disabled>Update</Button>
                    }
                    </div>
                    </form>  
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateBooking;