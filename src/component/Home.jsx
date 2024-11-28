import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import AddCoffeeSec from './AddCoffeeSec';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <AddCoffeeSec coffees ={coffees}></AddCoffeeSec>
        </div>
    );
};

export default Home;