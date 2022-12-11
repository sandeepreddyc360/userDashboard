import React from 'react';
import loadSpinner from '../assets/notaloading.gif';
import "./Spinner.css"
function Spinner() {
  return (
    <div className='container-fluid  spinnermain'>
      <img 
        src={loadSpinner}
        className='loadinglogo'
        alt="Loading..."
      />
    </div>
    
  );
};

export default Spinner;