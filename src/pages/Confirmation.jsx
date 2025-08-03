// src/pages/Confirmation.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Confirmation() {
  const { bookings, doctors } = useContext(AppContext);
  const booking = bookings[bookings.length - 1];

  if (!booking) {
    return <div className="p-8 text-center">No recent booking found.</div>;
  }

  const doctor = doctors.find((d) => d.id === booking.doctorId);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow text-center">
      <h1 className="text-3xl font-bold mb-4">Appointment Confirmed!</h1>
      <p className="mb-2"><strong>Doctor:</strong> {doctor?.name}</p>
      <p className="mb-2"><strong>Date:</strong> {booking.date}</p>
      <p className="mb-2"><strong>Time:</strong> {booking.time}</p>
      <p className="mb-2"><strong>Patient:</strong> {booking.name}</p>
      <p className="mb-2"><strong>Email:</strong> {booking.email}</p>
      {booking.phone && <p className="mb-2"><strong>Phone:</strong> {booking.phone}</p>}
    </div>
  );
}

export default Confirmation;
