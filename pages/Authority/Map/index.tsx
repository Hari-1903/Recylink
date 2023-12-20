import React from 'react';
import AuthorityNav from '@/components/AuthorityNav';

const Map = () => {
  // Define your two locations
  const location1 = "Place+Name+1"; // Replace with your first location in URL format
  const location2 = "Place+Name+2"; // Replace with your second location in URL format

  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/${location1}/${location2}`;

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
      <div className="m-3 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content flex-center ">
        <iframe 
          className="h-full w-full rounded-xl m-0 p-0 shadow-[0px_0px_10px_10px_rgb(0,0,0,0.08)]" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7612.151735537955!2d78.665489!3d17.4560825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703068283390!5m2!1sen!2sin" 
          width='auto' 
          height="auto"  
          loading="lazy"
          >
        </iframe>
        <button 
          onClick={() => window.open(directionsUrl, "_blank")} 
          style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000, color:'white', backgroundColor:'black'}}
        >
          View Route
        </button>
      </div>
    </div>
  );
}

export default Map;

