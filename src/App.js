import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PackageDetails from './Components/Home/PackageDetails/PackageDetails';
import MyBookings from './Components/My Bookings/MyBookings';
import UpdateBooking from './Components/Update Booking/UpdateBooking';
import PrivateRoute from './Components/Private Route/PrivateRoute';
import ManageOrders from './Components/Manage Orders/ManageOrders';
import AddNewPackage from './Components/Add New Package/AddNewPackage';
import PendingBookings from './Components/Pending Bookings/PendingBookings';
import ApprovedBookings from './Components/Approved Bookings/ApprovedBookings';
import ManagePackages from './Components/Manage Packages/ManagePackages';
import UpdatePackage from './Components/Update Package/UpdatePackage';
import Allbookings from './Components/All Booking/Allbookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/addPackage'>
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <PrivateRoute path='/allBookings'>
              <Allbookings></Allbookings>
            </PrivateRoute>
            <PrivateRoute path='/managePackages/update/:updateId'>
              <UpdatePackage></UpdatePackage>
            </PrivateRoute>
            <PrivateRoute path='/managePackages'>
              <ManagePackages></ManagePackages>
            </PrivateRoute>
            <PrivateRoute path='/pendingBookings'>
              <PendingBookings></PendingBookings>
            </PrivateRoute>
            <PrivateRoute path='/approvedBookings'>
              <ApprovedBookings></ApprovedBookings>
            </PrivateRoute>
            <PrivateRoute path='/packages/:packageId'>
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path='/myBookings/:bookingId'>
              <UpdateBooking></UpdateBooking>
            </PrivateRoute>
            <PrivateRoute path='/myBookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
