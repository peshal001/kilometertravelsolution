'use client';

import { useState } from 'react';

export default function EcoTravelCalculator() {
  const [selectedTrip, setSelectedTrip] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [result, setResult] = useState(null);

  const trips = [
    {
      name: 'Kathmandu to Pokhara',
      flight: { distance: 200, emissions: 0.12, cost: 120 },
      bus: { distance: 200, emissions: 0.04, cost: 15 },
      car: { distance: 200, emissions: 0.08, cost: 45 }
    },
    {
      name: 'Kathmandu to Chitwan',
      flight: { distance: 165, emissions: 0.10, cost: 95 },
      bus: { distance: 165, emissions: 0.035, cost: 12 },
      car: { distance: 165, emissions: 0.07, cost: 35 }
    },
    {
      name: 'Kathmandu to Lukla',
      flight: { distance: 135, emissions: 0.08, cost: 180 },
      bus: { distance: 135, emissions: 0.03, cost: 10 },
      car: { distance: 135, emissions: 0.06, cost: 30 }
    }
  ];

  const calculateFootprint = () => {
    if (!selectedTrip) return;
    
    const trip = trips.find(t => t.name === selectedTrip);
    if (!trip) return;

    const flightTotal = trip.flight.emissions * travelers;
    const busTotal = trip.bus.emissions * travelers;
    const carTotal = trip.car.emissions * travelers;

    setResult({
      trip: trip.name,
      travelers,
      flight: {
        emissions: flightTotal,
        cost: trip.flight.cost * travelers,
        savings: 0
      },
      bus: {
        emissions: busTotal,
        cost: trip.bus.cost * travelers,
        savings: flightTotal - busTotal
      },
      car: {
        emissions: carTotal,
        cost: trip.car.cost * travelers,
        savings: flightTotal - carTotal
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
        <i className="ri-leaf-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
        Eco-Travel Calculator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Route</label>
          <div className="relative">
            <select
              value={selectedTrip}
              onChange={(e) => setSelectedTrip(e.target.value)}
              className="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
            >
              <option value="">Choose a destination</option>
              {trips.map((trip, index) => (
                <option key={index} value={trip.name}>{trip.name}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
          <input
            type="number"
            min="1"
            max="10"
            value={travelers}
            onChange={(e) => setTravelers(parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={calculateFootprint}
          disabled={!selectedTrip}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
        >
          Calculate Impact
        </button>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">{result.trip} - {result.travelers} traveler{result.travelers > 1 ? 's' : ''}</h4>
          
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <i className="ri-flight-takeoff-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="font-medium text-red-800">Flight</span>
                </div>
                <span className="text-red-600 font-bold">${result.flight.cost}</span>
              </div>
              <p className="text-sm text-red-700">CO₂: {result.flight.emissions.toFixed(2)} tons</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <i className="ri-bus-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="font-medium text-green-800">Bus</span>
                  <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Recommended</span>
                </div>
                <span className="text-green-600 font-bold">${result.bus.cost}</span>
              </div>
              <p className="text-sm text-green-700">CO₂: {result.bus.emissions.toFixed(2)} tons</p>
              <p className="text-sm text-green-600">Saves {result.bus.savings.toFixed(2)} tons CO₂</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <i className="ri-car-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="font-medium text-blue-800">Private Car</span>
                </div>
                <span className="text-blue-600 font-bold">${result.car.cost}</span>
              </div>
              <p className="text-sm text-blue-700">CO₂: {result.car.emissions.toFixed(2)} tons</p>
              <p className="text-sm text-blue-600">Saves {result.car.savings.toFixed(2)} tons CO₂</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Eco-Friendly Tip</h5>
            <p className="text-sm text-gray-600">Choose bus travel to reduce your carbon footprint by up to 70% while saving money!</p>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Book Eco-Friendly Option
          </button>
        </div>
      )}
    </div>
  );
}