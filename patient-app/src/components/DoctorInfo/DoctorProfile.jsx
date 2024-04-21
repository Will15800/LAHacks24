import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../config/firebase'; // Assuming you have your Firebase setup in a separate file

const DoctorProfile = () => {
  const [doctorName, setDoctorName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, fetch doctor data
        try {
          const doctorsRef = collection(db, 'doctors'); // Replace 'doctors' with your collection name
          const q = query(doctorsRef, where('email', '==', user.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const doctorData = querySnapshot.docs[0].data();
            setDoctorName(doctorData.name);
          } else {
            console.warn('No doctor found with the authenticated user email.');
          }
        } catch (error) {
          console.error('Error fetching doctor data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        // User is signed out
        setDoctorName('');
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    
    <header className="hero">
        <h1>Dr. {doctorName}</h1>
        
        <p>Your Profile</p>    
    </header> 
      
    
  );
};

export default DoctorProfile;