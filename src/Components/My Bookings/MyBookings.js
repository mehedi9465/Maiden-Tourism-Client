import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Custom Hooks/useAuth';
import BookingCard from '../Booking Card/BookingCard';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if(user?.email){
            axios.get(`https://gruesome-village-31529.herokuapp.com/bookings/${user?.email}`)
            .then(({ data }) => {
                setMyBookings(data);
            })
        }
    }, [user]);

      useEffect(() => {
        axios.get('https://gruesome-village-31529.herokuapp.com/bookings')
        .then(({ data }) => {
            setBookings(data)
        })
    }, [])

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
                setMyBookings(restBookings);
            });
           }
          })
    }

    return (
        <Container className='py-5'>
            <Row xl={4} lg={4} md={3} sm={2} xs={1} className='gy-4'>
                {
                    myBookings.map(myBooking => <BookingCard 
                    key={myBooking?._id} 
                    booking={myBooking}
                    handleCancel={handleCancel}></BookingCard>)
                }
            </Row>
        </Container>
    );
};

export default MyBookings;
