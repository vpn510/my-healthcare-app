// src/components/DoctorList.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';

function DoctorList() {
  const { doctors } = useContext(AppContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default DoctorList;
