import React, { useEffect, useState } from 'react';
import { Button,  Card,  Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import sajek from '../../Image/Sajek.png';
import sreemangal from '../../Image/Sreemongol.png';
import sundarban from '../../Image/sundorbon.png';
import logo from '../../Logo.png';
import CardItems from '../CardItems/CardItems';
import Data from '../FakeData/FakeData';
import Homecss from './Home.css';
import bgImage from '../../Image/Rectangle 1.png';
import AppBar from '../AppBar/AppBar';

const Home = () => {
    const[allPlace,setAllPlace] = useState(Data);
    const[selectedPlace,setSelectedPlace] = useState('Cox-Bazar');

    useEffect(()=>{
        const filterData = Data.filter(item => item.category === selectedPlace)
        setAllPlace(filterData);
    },[selectedPlace])
    
    
    return (
        <div className="homediv">
            
            <div>
                <AppBar/>
            </div>
            

            <div className="visitedPlace">

            <Card className="cardStyle">
            <Card.Img onClick={()=>setSelectedPlace('Cox-Bazar')} className="place" src={sajek} />
            <Card.Body>
                <Card.Title className="cardTitle">COX'S BAZAR</Card.Title>
                
            </Card.Body>
            </Card>

            <Card className="cardStyle">
            <Card.Img onClick={()=>setSelectedPlace('Sreemangal')} className="place"  src={sreemangal} />
            <Card.Body>
                <Card.Title className="cardTitle">SREEMANGAL</Card.Title>
                
            </Card.Body>
            </Card>

            <Card className="cardStyle">
            <Card.Img onClick={()=>setSelectedPlace('Sundarban')} className="place" src={sundarban} />
              <Card.Body>
                <Card.Title className="cardTitle">SUNDARBAN</Card.Title>
             </Card.Body>
            
            </Card>
            
            </div>
            <div>
                {
                    allPlace.map(item => <CardItems item={item}></CardItems>)
                }
            </div>
            
        </div>
    );
};

export default Home;