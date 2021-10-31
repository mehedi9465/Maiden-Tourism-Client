import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Custom Hooks/useAuth';

const Register = () => {
    const history = useHistory();
    const { RegisterByEmailAndPass } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        if(data?.email && data?.password){
            RegisterByEmailAndPass(data?.name, data?.email, data?.password)
        }
        reset();
        history.push('/')
    }
    return (
            <>
            <Container>
                    <Row className='justify-content-center py-5 my-5'>
                        <h1 className='display-3'>Please Register</h1>
                        <Col className='py-5 my-5' lg={5}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("name")} />
                                <label htmlFor="floatingInput">Full Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} />
                                <label htmlFor="floatingInput">Email address</label>
                                </div>
                                

                                <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")}/>
                                <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <Button className='mt-3 w-100 py-2 fs-6' variant='outline-dark' type='submit'>Register</Button>
                                
                                <p className='mt-3 lead'>Already have any account? <Link to='/login'>Login</Link></p>
                            </form>  
                        </Col>
                    </Row>
            </Container>
            </>
        );
};

export default Register;