import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import AddCoffeeSec from './AddCoffeeSec';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AddCoffeeSec></AddCoffeeSec>
        </div>
    );
};

export default Home;