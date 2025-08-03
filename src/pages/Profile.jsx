// src/pages/Profile.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BookingForm from '../components/BookingForm';

function Profile() {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);
  const doctor = doctors.find((d) => d.id.toString() === id);

  if (!doctor) {
    return <div className="p-8 text-center text-red-600">Doctor not found</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow">
      <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-semibold mt-4">{doctor.name}</h2>
      <p className="text-gray-600 mb-4">{doctor.specialty}</p>
      <BookingForm doctorId={doctor.id} />
    </div>
  );
}

export default Profile;
