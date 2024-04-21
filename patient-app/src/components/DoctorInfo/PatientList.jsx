import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Assuming you have your Firebase setup in a separate file

const PatientsList = () => {
  const [patientsData, setPatientsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsRef = collection(db, 'patients'); // Replace 'patients' with your collection name
        const q = query(patientsRef, where('doctor', '==', 'Michael Jordan'));
        const querySnapshot = await getDocs(q);

        const patientData = [];
        querySnapshot.forEach((doc) => {
          patientData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPatientsData(patientData);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="patient-btn">Loading...</div>;
  }

  if (!patientsData || patientsData.length === 0) {
    return <div className="patient-btn">No Patient Data Available.</div>;
  }

  return (
    <div>
      <section className="patient-list">
        <h2>Patients List</h2>
        <div className="patient-grid">
          {patientsData.map((patient, index) => (
            <Link key={index} to={`/pages/PatientPage/${patient.name}`} className="patient-btn">
              {patient.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatientsList;