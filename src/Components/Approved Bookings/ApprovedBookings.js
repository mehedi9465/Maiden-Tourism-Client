import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import BookingCard from '../Booking Card/BookingCard';

const ApprovedBookings = () => {
    const status = "approved";
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/bookings/approve/${status}`)
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
            axios.delete(`http://localhost:4000/bookings/${id}`)
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

    return (
        <div>
            <h1>Approved Bookings</h1>
            <Container>
            <Row xl={4} lg={4} md={3} sm={2} xs={1}>
                {
                    bookings.map(booking => <BookingCard 
                    key={booking?._id} 
                    booking={booking} 
                    handleCancel={handleCancel}>
                    </BookingCard>)
                }
            </Row>
            </Container>

        </div>
    );
};

export default ApprovedBookings;