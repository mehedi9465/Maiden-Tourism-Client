import React, { useState } from 'react';
import { Container, Button, Row, Col, Image, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Custom Hooks/useAuth';

const Login = () => {
    const { LogInByEmailAndPass, googleSignIn, user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const history = useHistory();
    const [status, setStatus] = useState(false);
    let redirect = '';
    redirect = location.state?.from || '';

    const onSubmit = data => {
        if(data?.email && data?.password && status){
            LogInByEmailAndPass(data?.email, data?.password)
            .then(result => {
                history.push('/allBookings')
            })
        }

        else if(data?.email && data?.password && !status){
            LogInByEmailAndPass(data?.email, data?.password)
            .then(result => {
                history.push(redirect)
            })
        }
        reset();
    }

    const logInWithGoogle = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect)
        })
    }

    const checkStatus = (e) => {
        setStatus(e.target.checked);
    }

    return (
        <>
           <Container>
                <Row className='justify-content-center py-5 my-5'>
                    <h1 className='display-3'>Please Login</h1>
                    <Col className='py-5 my-5' lg={5}>
                        {
                            !status?
                            <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")}/>
                            <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <Button className='mt-3 w-100 py-2 fs-6' variant='outline-dark' type='submit'>Login</Button>

                            <Button onClick={logInWithGoogle} className='mt-3 w-100 py-2 fs-6' variant='outline-dark' type='submit'> <Image src='https://cdn-icons-png.flaticon.com/512/2702/2702602.png' width='25' /> Google </Button>
                            <p className='mt-3 lead'>Don't have any account? <Link to='/register'>Register</Link></p>
                            </form>

                            :

                            <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")}/>
                            <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <Button className='mt-3 w-100 py-2 fs-6' variant='outline-dark' type='submit'>Login</Button>
                            </form>     
                        }
                        <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Admin?" onClick={checkStatus}/>
                                </Form.Group>
                        </div>
                    </Col>
                </Row>
                
           </Container>
        </>
    );
};

export default Login;