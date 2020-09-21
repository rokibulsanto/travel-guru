import React from 'react';
import { Link } from 'react-router-dom';
import css from './CardItems.css';

const CardItems = (props) => {
    const{heading,image,text,id} = props.item;
   const handleClick = (id) => {
        console.log('your Place',id);
   }
    return (
        <div className="placeDetails">
            <h1 className="headingStyle">{heading}</h1>
            <p className="textStyle">{text}</p>
            <Link to={`/Booking/${id}`}>
                 <button className="btn btn-warning" onClick={()=>handleClick({id})}>
                 Booking
                </button> 
                </Link>

        </div>
    );
};

export default CardItems;