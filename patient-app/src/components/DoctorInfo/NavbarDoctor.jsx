import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";

function NavbarDoctor() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully!');
      // Clear login status or related data
      localStorage.removeItem('loggedIn');
      // Redirect to the home page after sign-out
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">RecovR</div>
      <div className="nav-items">
        {/* Your navigation items */}
        <button className="login-btn" onClick={handleSignOut}>Sign Out</button>
      </div>
    </nav> 
  );
}

export default NavbarDoctor;
