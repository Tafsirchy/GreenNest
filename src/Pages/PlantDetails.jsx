import React from "react";
import Navbar from "../Components/Navbar";
import PlantDetailsCard from "../Components/PlantDetailsCard";
import Footer from "../Components/Footer";

const PlantDetails = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
      <PlantDetailsCard></PlantDetailsCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantDetails;
