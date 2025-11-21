import React from 'react';
import Slider from '../Components/Slider';
import IndoorPlants from '../Components/IndoorPlants';
import PlantCare from '../Components/PlantCare';
import PlantExpert from '../Components/PlantExpert';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <IndoorPlants></IndoorPlants>
            <PlantCare></PlantCare>
            <PlantExpert></PlantExpert>
        </div>
    );
};

export default Home;