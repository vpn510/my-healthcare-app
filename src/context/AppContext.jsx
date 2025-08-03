// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';

const AppContext = createContext();

function AppContextProvider({ children }) {
   const [doctors, setDoctors] = useState([]);
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      setDoctors(doctorsData);
   }, []);

   const addBooking = (booking) => {
      setBookings((prevBookings) => [...prevBookings, booking]);
      setDoctors((prevDoctors) =>
         prevDoctors.map((doctor) =>
            doctor.id === booking.doctorId
               ? { ...doctor, slots: doctor.slots.filter((slot) => slot !== booking.slot) }
               : doctor
         )
      );
   };

   return (
      <AppContext.Provider value={{ doctors, bookings, addBooking }}>
         {children}
      </AppContext.Provider>
   );
}

export { AppContext, AppContextProvider };
