import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Data from '../FakeData/FakeData';
import './BookDetails.css';
import icon from '../../Icon/calender_icon.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AppBar from '../AppBar/AppBar';



const BookingDetails = () => {
    const {id} = useParams();
     const details =  Data.find(item => item.id.toString() === id);
     //console.log(details);
     const backgroundImage = {
         backgroundImage:`url(${details.image})`,
         backgroundSize:'cover',
         position:'fixed',
         backgroundColor:'black'
     }

     const [FromselectedDate , setFromSelectedDate] = useState(null)
     const [ToselectedDate , setToSelectedDate] = useState(null)
     const history = useHistory();

     const handleHotel = () => {
         history.push('/hotel');
     }

     const handleClick = (id) => {
        console.log('your Place',id);
   }

    return (
        <div className="BookDetails" style={backgroundImage}>
            <div>
                <AppBar></AppBar>
            </div>
            <div style={{float:'left'}}>
            <h1 className="BookingHeading">{details.heading}</h1>
            <p className="BookingText">{details.text}</p>
             </div>

             <div>
             <Form.Group className="form">
                 <small>Origin</small>
                <Form.Control size="sm" type="text" required />
                <br />
                 <small>Destination</small>
                <Form.Control type="text" required  />
                <br />
                 <small>From</small>
                 <img className="icon" src={icon} alt="" />
                <DatePicker className="date" selected={FromselectedDate}
                 onChange={date => setFromSelectedDate(date)}
                 dateFormat='dd/MM/yyyy'
                 isClearable
                 showYearDropdown
                 scrollableMonthYearDropdown
                 />
                <br/>
                <img className="icon" src={icon} alt=""/>
                 <small>To</small>
                 <DatePicker className="date to"   selected={ToselectedDate}
                 onChange={date => setToSelectedDate(date)}
                 dateFormat='dd/MM/yyyy'
                 isClearable
                 showYearDropdown
                 scrollableMonthYearDropdown
                 />
                <br/>
                <Link to={`/hotel/${id}`}>
                <button className="btn btn-warning" onClick={handleHotel} onClick={()=>handleClick({id})}>Start Booking</button>
                </Link>
            </Form.Group>
            </div>
            
        </div>
        
    );
};

export default BookingDetails;