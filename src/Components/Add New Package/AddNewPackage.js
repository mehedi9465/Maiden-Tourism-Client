import axios from 'axios';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddNewPackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4000/packages', data)
        .then(({ data }) => {
            if(data.insertedId){
                swal("Successfully Added",{
                    icon: "success",
                  });
            }
            else{
                swal("Something Went Wrong",{
                    icon: "error",
                  });
            }
        })
        reset();
    }

    return (
        <Container className='py-5'>
            <Row className='justify-content-center py-5'>
                <Col xl={8} lg={8} md={9} sm={9} xs={8}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("name")}/>
                    <label htmlFor="floatingInput">Package Name</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("img")} />
                    <label htmlFor="floatingInput">Image URL</label>
                    </div>

                    <div className="form-floating ">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("des")} />
                    <label htmlFor="floatingInput">Description</label>
                    </div>

                    <div>
                        <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' >Add </Button>
                    </div>

                </form>  
                </Col>
            </Row>
        </Container>
    );
};

export default AddNewPackage;