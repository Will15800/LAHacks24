import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PatientsList = ({ patientsData }) => {
    if (!patientsData || patientsData.length === 0) {
        return <div className="patient-btn">No Patient Data Avaliable.</div>;
      }
  return (
    <div>
      <section className="patient-list">
        <h2>Patients List</h2>
        <div className="patient-grid">
          {/* Map over the patientsData array to render patient buttons */}
          {patientsData.map((patient, index) => (
            <Link
              key={index}
              to={`/patient/${patient.id}`} // Use patient id in the route
              className="patient-btn"
            >
              {patient.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatientsList;
