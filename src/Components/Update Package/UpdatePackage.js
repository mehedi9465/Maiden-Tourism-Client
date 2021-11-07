import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';

const UpdatePackage = () => {
    const { updateId } = useParams();
    const [pckg, setPckg] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = pckg?.name
        data.img = pckg?.img
        data.des = pckg?.des
        console.log(data);
        axios.put(`https://gruesome-village-31529.herokuapp.com/packages/update/${updateId}`, data)
        .then(({ data }) => {
            if(data.modifiedCount){
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

    const handleNameChange = e => {
        const updateName = e.target.value
        const updatedPackage = {
            name: updateName,
            img: pckg?.img,
            des: pckg?.des
        }
        setPckg(updatedPackage)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value
        const updatedPackage = {
            name: pckg?.name,
            img: updateImg,
            des: pckg?.des
        }
        setPckg(updatedPackage)
    }

    const handleDesChange = e => {
        const updateDes = e.target.value
        const updatedPackage = {
            name: pckg?.name,
            img: pckg?.img,
            des: updateDes,
        }
        setPckg(updatedPackage)
    }

    useEffect(() => {
        axios.get(`https://gruesome-village-31529.herokuapp.com/packages/${updateId}`)
        .then(({ data }) => {
            console.log(data);
            setPckg(data);
        })
    }, []);

    return (
        <div>
            <h1>Update Package</h1>
            <Container className='py-5'>
            <Row className='justify-content-center py-5'>
                <Col xl={8} lg={8} md={9} sm={9} xs={8}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("name")} value={pckg?.name || ''} onChange={handleNameChange}/>
                    <label htmlFor="floatingInput">Package Name</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("img")} value={pckg?.img || ''} onChange={handleImgChange}/>
                    <label htmlFor="floatingInput">Image URL</label>
                    </div>

                    <div className="form-floating ">
                    <textarea type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("des")} value={pckg?.des || ''} onChange={handleDesChange}/>
                    <label htmlFor="floatingInput">Description</label>
                    </div>

                    <div>
                        <Button className='mt-3 w-100 py-2 fs-6' variant='outline-primary' type='submit' >Add </Button>
                    </div>

                </form>  
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default UpdatePackage;