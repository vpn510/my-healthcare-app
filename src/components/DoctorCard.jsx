// src/components/DoctorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
        <p className="text-sm text-gray-500">{doctor.specialty}</p>
        <Link
          to={`/doctor/${doctor.id}`}
          className="mt-2 inline-block text-blue-500 hover:text-blue-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
