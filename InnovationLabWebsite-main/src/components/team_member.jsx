import React, { useState } from 'react';
import taData from '../pages/data/ta.json';

const TeachingAssistantsSection = () => {
  // Get the list of periods (keys) from the JSON (e.g., "Current", "Jan-May 2025")
  const periods = Object.keys(taData);

  // State to keep track of the currently selected period. 
  // Defaults to the first key in the JSON (likely "Current").
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

  // Handle change when user selects a different option
  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  // Get the list of TAs for the currently selected period
  const currentTAs = taData[selectedPeriod] || [];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Our Teaching Assistants
        </h2>

        {/* Selector for Time Period */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex">
            <select
              value={selectedPeriod}
              onChange={handlePeriodChange}
              className="appearance-none bg-white border border-blue-300 hover:border-blue-500 px-8 py-3 pr-10 rounded-full shadow-md text-blue-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
            >
              {periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Grid of Cards */}
        {currentTAs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentTAs.map((ta, index) => (
              <div 
                key={index} 
                className="bg-black bg-opacity-100 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: 'black' }}
              >
                <div className="p-4 flex flex-col items-center">
                  <img 
                    src={ta.photo} 
                    alt={ta.name} 
                    // Added onError to handle broken image links gracefully
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=No+Image"; }}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 shadow-sm"
                  />
                  <h4 className="font-bold text-center text-white text-lg">{ta.name}</h4>
                  <p className="text-blue-400 text-sm mb-2 text-center font-medium">{ta.title}</p>
                  <p className="text-gray-300 text-sm text-center px-2">{ta.bio}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No teaching assistants found for this period.
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachingAssistantsSection;
