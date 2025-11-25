import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";

const ConsultationForm = () => {
  const handleConsultation = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log("Consultation Request:", name, email);

    toast.success("Your consultation has been booked successfully!");
    form.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#f3faef] to-[#d3e6dd] flex justify-center items-center">
        <div className="card max-w-sm w-full border backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl rounded-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
              Book Consultation
            </h1>

            <form onSubmit={handleConsultation}>
              <fieldset className="fieldset mt-3">
                <label className="label text-black font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />

                <label className="label text-black font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Your Email"
                  required
                />

                <button
                  type="submit"
                  className="btn mt-4 bg-[#043915] hover:bg-[#046b21] text-white w-full"
                >
                  Book Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsultationForm;
