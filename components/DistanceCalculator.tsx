
'use client';

import { useState } from 'react';

export default function DistanceCalculator() {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [showResult, setShowResult] = useState(false);

  const routes = [
    { name: 'Kathmandu to Pokhara', distance: 200, time: '30 min', price: '$120' },
    { name: 'Kathmandu to Lukla', distance: 135, time: '25 min', price: '$180' },
    { name: 'Kathmandu to Chitwan', distance: 165, time: '35 min', price: '$95' },
    { name: 'Kathmandu to Bharatpur', distance: 146, time: '28 min', price: '$110' },
    { name: 'Kathmandu to Biratnagar', distance: 304, time: '45 min', price: '$150' },
    { name: 'Kathmandu to Nepalgunj', distance: 518, time: '1h 15min', price: '$220' }
  ];

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setShowResult(true);
  };

  const selectedRouteData = routes.find(route => route.name === selectedRoute);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Flight Distance Calculator</h2>
          <p className="text-lg text-gray-600">Calculate distances and flight times for popular domestic routes</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Select Your Route</h3>
              <div className="space-y-3">
                {routes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => handleRouteSelect(route.name)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      selectedRoute === route.name
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{route.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{route.distance} km</span>
                        <i className="ri-flight-takeoff-line w-4 h-4 flex items-center justify-center"></i>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Route Details</h3>
              {showResult && selectedRouteData ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-flight-takeoff-fill text-red-600 text-3xl w-10 h-10 flex items-center justify-center"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{selectedRouteData.name}</h4>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{selectedRouteData.distance}</div>
                      <div className="text-sm text-gray-600">Kilometers</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-600">{selectedRouteData.time}</div>
                      <div className="text-sm text-gray-600">Flight Time</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{selectedRouteData.price}</div>
                      <div className="text-sm text-gray-600">Starting Price</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Book This Flight
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <i className="ri-flight-takeoff-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
                  <p className="text-gray-500">Select a route to view flight details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
