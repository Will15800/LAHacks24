import React from 'react';

const MedicationList = ({ medications }) => {
  // Check if entries are provided and not an empty array
  if (!medications || medications.length === 0) {
    return <div className="medication">No journal entries available.</div>;
  }

  return (
    <div className="medication">
      <h2>Medication</h2>
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>{medication}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
