import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import Package from '../Home/Package/Package';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);
    const history = useHistory()
    useEffect(() => {
        axios.get(`http://localhost:4000/packages`)
        .then(({ data }) => {
            console.log(data);
            setPackages(data)
        })
    }, []);

    const handleCancel = id => {
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
          }).then(result => {
           if(result){
            axios.delete(`http://localhost:4000/packages/${id}`)
            .then(({data}) => {
                if(data.deletedCount){
                    swal({
                        icon: "success",
                      });
                }
                else{
                    swal({
                        icon: "error",
                      });
                }

                const restBookings = packages.filter(pckg => pckg._id !== id)
                setPackages(restBookings);
            });
           }
          })
    }

    // const handleApprove = id =>{
    //     const matched = packages.filter(pckg => pckg._id === id);
    //     const data = matched[0];
    //     console.log(data);
    //     axios.put(`http://localhost:4000/packages/update/${id}`, data)
    //     .then(({ data }) => {
    //         if(data.modifiedCount){
    //             swal("Successfully Updated",{
    //                 icon: "success",
    //               });
    //         }
    //         else{
    //             swal("Something Went Wrong",{
    //                 icon: "error",
    //               });
    //         }
    //         const rest = packages.filter(pckg => pckg.status === "pending");
    //         setPackages(rest);
    //     })
    // }

    const hanldeUpdate = id => {
        history.push(`/managePackages/update/${id}`);
    }

    return (
        <div>
            <Container>
                <Row>
                    {
                        packages.map(pckg => <Package 
                        key={pckg?._id} 
                        pckg={pckg} 
                        handleCancel={handleCancel} 
                        hanldeUpdate={hanldeUpdate} >
                            <Button className='mx-3' onClick={() => handleCancel(pckg?._id)} variant='outline-dark' size='sm'>Delete</Button>
                            <Button className='mx-3' onClick={() => hanldeUpdate(pckg?._id)} variant='outline-dark' size='sm'>Update</Button>
                        </Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManagePackages;