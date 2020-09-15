import React from 'react';
import bgImage from '../../Image/Rectangle 1.png';

const Home = () => {
    return (
        <div style={{backgroundImage:{bgImage}}}>
            
            <h2>Hii baby</h2>
            <button className="btn btn-danger">add me</button>
        </div>
    );
};

export default Home;