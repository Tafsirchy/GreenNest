import React from 'react';
import Slider from '../Components/Slider';
import IndoorPlants from '../Components/IndoorPlants';
import PlantCare from '../Components/PlantCare';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <IndoorPlants></IndoorPlants>
            <PlantCare></PlantCare>
        </div>
    );
};

export default Home;