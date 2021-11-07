import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import BookingCard from '../Booking Card/BookingCard';

const PendingBookings = () => {
    const status = "pending";
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get(`https://gruesome-village-31529.herokuapp.com/bookings/approve/${status}`)
        .then(({ data }) => {
            console.log(data);
            setBookings(data)
        })
    }, []);

    const handleCancel = id => {
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
          }).then(result => {
           if(result){
            axios.delete(`https://gruesome-village-31529.herokuapp.com/bookings/${id}`)
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

                const restBookings = bookings.filter(booking => booking._id !== id)
                setBookings(restBookings);
            });
           }
          })
    }

    const handleApprove = id =>{
        const matched = bookings.filter(booking => booking._id === id);
        const data = matched[0];
        data.status = "approved"
        console.log(data);
        axios.put(`https://gruesome-village-31529.herokuapp.com/bookings/update/${id}`, data)
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
            const rest = bookings.filter(booking => booking.status === "pending");
            setBookings(rest);
        })
    }

    return (
        <div>
            <h1>Pending Bookings</h1>
            <Container>
            <Row xl={4} lg={4} md={3} sm={2} xs={1}>
                {
                    bookings.map(booking => <BookingCard 
                    key={booking?._id} 
                    booking={booking} 
                    handleCancel={handleCancel}>
                        <Button onClick={() => handleApprove(booking?._id)} variant='outline-dark' size='sm'>Approve</Button>
                    </BookingCard>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default PendingBookings;