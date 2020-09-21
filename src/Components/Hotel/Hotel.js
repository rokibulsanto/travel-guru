import React, {  } from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Data from '../FakeData/FakeData';
import './Hotel.css';
import star from '../../Icon/star_1_.png';
import gmap from '../../Image/map.png';

const Hotel = () => {
    const {id} = useParams();
    const HotelDetails =  Data.find(item => item.id.toString() === id);
    console.log(HotelDetails);
   
    
    

    return (
        <div className="homeHotel">
             <AppBar></AppBar>
             <hr/>
             <div>
            <h4 className="stay">{HotelDetails.stay}</h4>
            <img className="hotelStyle" src={HotelDetails.hotel1} alt=""/> <br/><br/>
            <img className="hotelStyle" src={HotelDetails.hotel2} alt=""/> <br/><br/>
            <img className="hotelStyle" src={HotelDetails.hotel3} alt=""/> <br/><br/>
             </div>
             <div className="preDiv">
             <pre>
                 <h4>Light airy Stylish apt & safe peaceful stay</h4>
                 <p> Dolore sit dolor est aliquyam vero nonumy takimata sed </p>
                 <p> voluptua justo justo dolor et ipsum, ea clita amet non </p>
                 <p> 4 guest 2 bedrooms 2 beds 2 baths </p>
                <p> wif air conditioning kitchen. caccellation flexibility available </p>
                <img className="star" src={star} alt=""/>
                <span> 4.9 (20)</span>
                <span> $34/Night</span>
             </pre>
             <pre>
                 <h4>Apartment in Lost Panorama</h4>
                <p> Dolore sit dolor est aliquyam vero nonumy takimata sed </p>
                <p> voluptua justo justo dolor et ipsum, ea clita amet non </p>
                <p> 4 guest 2 bedrooms 2 beds 2 baths </p>
                <p> wif air conditioning kitchen. caccellation flexibility available </p>
                <img className="star" src={star} alt=""/>
                <span> 4.8 (10)</span>
                <span> $52/Night</span>
             </pre>
             <pre>
                 <h4>AR Launge & pool (r&r + b&b)</h4>
                <p> Dolore sit dolor est aliquyam vero nonumy takimata sed </p>
                <p> voluptua justo justo dolor et ipsum, ea clita amet non </p>
                <p> 4 guest 2 bedrooms 2 beds 2 baths </p>
                <p> wif air conditioning kitchen. caccellation flexibility available </p>
                <img className="star" src={star} alt=""/>
                <span> 4.9 (25)</span>
                <span> $44/Night</span>
             </pre>
             </div>
             
             <div className="gmap">
             <img className="gmapStyle" src={gmap} alt=""/>
             </div>
             
             
           
        </div>
    );
};

export default Hotel;