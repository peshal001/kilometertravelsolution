
'use client';

import { useEffect, useState } from 'react';

export default function DistanceCalculator() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [showResult, setShowResult] = useState(false);
  if (!mounted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 h-64 animate-pulse" />
        </div>
      </section>
    );
  }

  const routes = [
    { name: 'Kathmandu to Pokhara', distance: 200, time: '30 min', price: '$120' },
    { name: 'Kathmandu to Lukla', distance: 135, time: '25 min', price: '$180' },
    { name: 'Kathmandu to Chitwan', distance: 165, time: '35 min', price: '$95' },
    { name: 'Kathmandu to Bharatpur', distance: 146, time: '28 min', price: '$110' },
    { name: 'Kathmandu to Biratnagar', distance: 304, time: '45 min', price: '$150' },
    { name: 'Kathmandu to Nepalgunj', distance: 518, time: '1h 15min', price: '$220' }
  ];

  interface Route {
    name: string;
    distance: number;
    time: string;
    price: string;
  }

  const handleRouteSelect = (route: Route) => {
    setSelectedRoute(route);
    setShowResult(true);
  };

  const selectedRouteData = selectedRoute;

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
                <select
                  value={selectedRoute ? selectedRoute.name : ''}
                  onChange={e => {
                    const found = routes.find(route => route.name === e.target.value) || null;
                    setSelectedRoute(found);
                    if (found) {
                      handleRouteSelect(found);
                    } else {
                      setShowResult(false);
                    }
                  }}
                  className="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select a route</option>
                  {routes.map(route => (
                    <option key={route.name} value={route.name}>{route.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-500">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Route Details</h3>
              {showResult && selectedRouteData ? (
                <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center animate-[fadeIn_0.5s_ease-out]">
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">{selectedRouteData.name}</h4>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="transform transition-all duration-500 md:hover:-translate-y-1">
                      <p className="text-gray-700 font-medium">Distance</p>
                      <p className="text-3xl text-red-600 font-bold">{selectedRouteData.distance} km</p>
                    </div>
                    <div className="transform transition-all duration-500 md:hover:-translate-y-1 delay-100">
                      <p className="text-gray-700 font-medium">Flight Time</p>
                      <p className="text-3xl text-blue-900 font-bold">{selectedRouteData.time}</p>
                    </div>
                    <div className="transform transition-all duration-500 md:hover:-translate-y-1 delay-200">
                      <p className="text-gray-700 font-medium">Price</p>
                      <p className="text-3xl text-green-600 font-bold">{selectedRouteData.price}</p>
                    </div>
                  </div>
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
