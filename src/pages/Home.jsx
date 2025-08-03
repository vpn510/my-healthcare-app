import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DoctorList from '../components/DoctorList';

function Home() {
  const { doctors } = useContext(AppContext);
  const [query, setQuery] = useState('');

  const filtered = doctors.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.specialty.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialty"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 px-3 py-2 border rounded-lg w-full"
      />
      <DoctorList doctors={filtered} />
    </div>
  );
}

export default Home;
