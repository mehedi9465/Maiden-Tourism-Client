import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Custom Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

    return (
        <>
            <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand href="#home"><Image className='me-2' src='https://cdn-icons-png.flaticon.com/512/5776/5776740.png' width='50'/>Maiden Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='my-2' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='my-2' as={HashLink} to="/#packages">Packages</Nav.Link>
                    <Nav.Link className='my-2' as={HashLink} to="/#about">About</Nav.Link>
                    {
                        !user.email && <Nav.Link as={Link} to="/login"><Button>Login</Button></Nav.Link>
                    }
                    {
                        !user.email && <Nav.Link as={Link} to="/register"><Button>Register</Button></Nav.Link>
                    }
                    
                    {
                        user?.email && 
                        <div>
                        {
                        user.email?.toLowerCase().includes('admin') ?
                        <div>
                                <NavDropdown title={<Image className='rounded-circle my-2' src='https://cdn-icons-png.flaticon.com/512/2206/2206248.png' height='28'/>} id="basic-nav-dropdown">
                                <p className='ms-3 mb-2'>Admin</p>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/addPackage">Add Package</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/allBookings">All Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/managePackages">Manage Packages</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pendingBookings">Pending Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/approvedBookings">Approved Bookings</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                                </NavDropdown>
                        </div>
                        :
                        <div>
                            {
                                user?.photoURL ?
                                <NavDropdown title={<Image className='rounded-circle my-2' src={user?.photoURL} height='28'/>} id="basic-nav-dropdown">
                                <p className='ms-3 mb-2'>{user?.displayName}</p>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/allBookings">All Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myBookings">My Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/approvedBookings">Approved Bookings</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <NavDropdown title={<Image className='rounded-circle my-2' src='https://cdn-icons-png.flaticon.com/512/236/236831.png' height='28'/>} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/allBookings">All Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myBookings">My Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/approvedBookings">Approved Bookings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            }
                        </div>
                    }
                        </div>
                    }
                    

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;