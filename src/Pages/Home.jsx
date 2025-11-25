import React from 'react';
import Slider from '../Components/Slider';
import IndoorPlants from '../Components/IndoorPlants';
import PlantCare from '../Components/PlantCare';
import PlantExpert from '../Components/PlantExpert';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';

const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <IndoorPlants></IndoorPlants>
            <PlantCare></PlantCare>
            <PlantExpert></PlantExpert>
            <PlantOfTheWeek></PlantOfTheWeek>
        </div>
    );
};

export default Home;