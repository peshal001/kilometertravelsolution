
'use client';

import { useState } from 'react';

interface Destination {
  name: string;
  distance: number;
}

export default function ItineraryBuilder() {
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);

  const destinations = [
    { name: 'Kathmandu', distance: 0 },
    { name: 'Pokhara', distance: 200 },
    { name: 'Chitwan', distance: 165 },
    { name: 'Lumbini', distance: 280 },
    { name: 'Bandipur', distance: 143 },
    { name: 'Gorkha', distance: 140 },
    { name: 'Nagarkot', distance: 32 },
    { name: 'Bhaktapur', distance: 15 }
  ];

  const toggleDestination = (destination: Destination) => {
    const isSelected = selectedDestinations.some((d: Destination) => d.name === destination.name);
    
    if (isSelected) {
      const newSelected = selectedDestinations.filter((d: Destination) => d.name !== destination.name);
      setSelectedDestinations(newSelected);
      calculateTotalDistance(newSelected);
    } else {
      const newSelected = [...selectedDestinations, destination];
      setSelectedDestinations(newSelected);
      calculateTotalDistance(newSelected);
    }
  };

  const calculateTotalDistance = (destinations: Destination[]) => {
    const total = destinations.reduce((sum: number, dest: Destination) => sum + dest.distance, 0);
    setTotalDistance(total);
  };

  const clearItinerary = () => {
    setSelectedDestinations([]);
    setTotalDistance(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
        <i className="ri-route-line text-red-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
        Itinerary Builder
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Select Destinations</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {destinations.map((destination, index) => (
              <label key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedDestinations.some(d => d.name === destination.name)}
                  onChange={() => toggleDestination(destination)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-800">{destination.name}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    {destination.distance === 0 ? 'Starting point' : `${destination.distance} km`}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">Total Distance</span>
            <span className="text-lg font-bold text-blue-900">{totalDistance} km</span>
          </div>
          <div className="text-xs text-gray-600">
            {selectedDestinations.length} destination{selectedDestinations.length !== 1 ? 's' : ''} selected
          </div>
        </div>
        
        {selectedDestinations.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Your Itinerary</h4>
            <div className="space-y-2">
              {selectedDestinations.map((destination, index) => (
                <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-800">{destination.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{destination.distance} km</span>
                    <button
                      onClick={() => toggleDestination(destination)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex space-x-2">
          <button
            onClick={clearItinerary}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Clear All
          </button>
          <button
            disabled={selectedDestinations.length === 0}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedDestinations.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Book Trip
          </button>
        </div>
      </div>
    </div>
  );
}
