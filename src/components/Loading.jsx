// Loading.js
import React from 'react';
import './Loading.css'; // Create a CSS file for styling

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
