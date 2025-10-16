'use client';

import { useState } from 'react';

interface Destination {
  name: string;
  description: string;
  activities: string[];
  bestSeason: string;
  highlights: string;
  image: string;
}

export default function InteractiveNepalMap() {
  const [selectedDestination, setSelectedDestination] = useState<keyof typeof destinations | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<keyof typeof destinations | null>(null);

  const destinations = {
    kathmandu: {
      name: 'Kathmandu',
      description: 'Cultural capital with ancient temples and heritage sites',
      activities: ['Temple visits', 'Heritage tours', 'Cultural shows'],
      bestSeason: 'October - March',
      highlights: 'Durbar Square, Swayambhunath, Boudhanath',
      image: 'https://readdy.ai/api/search-image?query=Kathmandu%20ancient%20temples%20and%20heritage%20sites%2C%20traditional%20Nepali%20architecture%2C%20cultural%20tourism%2C%20UNESCO%20world%20heritage%2C%20historic%20monuments%2C%20vibrant%20city%20life%2C%20cultural%20capital%20of%20Nepal&width=300&height=200&seq=map-kathmandu&orientation=landscape'
    },
    pokhara: {
      name: 'Pokhara',
      description: 'Lake city with stunning mountain views and adventure sports',
      activities: ['Paragliding', 'Boating', 'Hiking'],
      bestSeason: 'September - May',
      highlights: 'Phewa Lake, Sarangkot, World Peace Pagoda',
      image: 'https://readdy.ai/api/search-image?query=Pokhara%20beautiful%20lake%20with%20mountain%20reflection%2C%20adventure%20sports%20paradise%2C%20paragliding%20activities%2C%20peaceful%20lakeside%20resort%2C%20Nepal%20tourism%20destination%2C%20serene%20mountain%20valley&width=300&height=200&seq=map-pokhara&orientation=landscape'
    },
    chitwan: {
      name: 'Chitwan',
      description: 'Wildlife paradise with jungle safaris and exotic animals',
      activities: ['Jungle safari', 'Elephant rides', 'Wildlife watching'],
      bestSeason: 'October - March',
      highlights: 'Royal Bengal Tigers, Rhinoceros, Elephant breeding',
      image: 'https://readdy.ai/api/search-image?query=Chitwan%20National%20Park%20wildlife%20safari%20with%20elephants%20and%20tigers%2C%20jungle%20exploration%2C%20exotic%20animals%20in%20natural%20habitat%2C%20wildlife%20tourism%2C%20Nepal%20nature%20preserve%2C%20adventure%20safari%20tour&width=300&height=200&seq=map-chitwan&orientation=landscape'
    },
    everest: {
      name: 'Everest Region',
      description: 'Ultimate trekking destination with world\'s highest peaks',
      activities: ['Trekking', 'Mountaineering', 'Sherpa culture'],
      bestSeason: 'March - May, September - November',
      highlights: 'Base Camp, Namche Bazaar, Tengboche Monastery',
      image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20with%20snow-capped%20mountain%20peaks%2C%20high%20altitude%20trekking%2C%20Nepal%20Himalayas%20expedition%2C%20mountain%20adventure%20tourism%2C%20challenging%20trek%20experience%2C%20world%20highest%20peak&width=300&height=200&seq=map-everest&orientation=landscape'
    },
    lumbini: {
      name: 'Lumbini',
      description: 'Sacred birthplace of Buddha with peaceful monasteries',
      activities: ['Meditation', 'Temple visits', 'Spiritual tours'],
      bestSeason: 'October - March',
      highlights: 'Maya Devi Temple, Peace Pagoda, Monasteries',
      image: 'https://readdy.ai/api/search-image?query=Lumbini%20sacred%20Buddhist%20site%20with%20ancient%20temples%2C%20peaceful%20meditation%20gardens%2C%20spiritual%20pilgrimage%20destination%2C%20Buddha%20birthplace%2C%20monastery%20complex%2C%20religious%20tourism%20Nepal&width=300&height=200&seq=map-lumbini&orientation=landscape'
    }
  };

  const regions = [
    { 
      id: 'kathmandu', 
      name: 'Kathmandu',
      x: 320, 
      y: 180,
      color: '#EF4444'
    },
    { 
      id: 'pokhara', 
      name: 'Pokhara',
      x: 250, 
      y: 200,
      color: '#3B82F6'
    },
    { 
      id: 'chitwan', 
      name: 'Chitwan',
      x: 280, 
      y: 240,
      color: '#10B981'
    },
    { 
      id: 'everest', 
      name: 'Everest Region',
      x: 380, 
      y: 160,
      color: '#8B5CF6'
    },
    { 
      id: 'lumbini', 
      name: 'Lumbini',
      x: 230, 
      y: 260,
      color: '#F59E0B'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Explore Nepal</h2>
          <p className="text-lg text-gray-600">Click on any region to discover amazing destinations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Interactive Map</h3>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-blue-200/50"></div>
                
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: region.x, top: region.y }}
                    onMouseEnter={() => setHoveredRegion(region.id as keyof typeof destinations)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => setSelectedDestination(region.id as keyof typeof destinations)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredRegion === region.id || selectedDestination === region.id
                        ? 'scale-125 shadow-lg'
                        : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: region.color }}
                    >
                      <i className="ri-map-pin-fill text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    
                    <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                      hoveredRegion === region.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {region.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">Click on the pins to explore each destination</p>
            </div>
          </div>

          <div className="bg-white">
            {selectedDestination ? (
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={destinations[selectedDestination].image} 
                    alt={destinations[selectedDestination].name}
                    className="w-full h-64 object-cover object-top rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-900">{destinations[selectedDestination].name}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg">{destinations[selectedDestination].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Best Season
                      </h4>
                      <p className="text-blue-700">{destinations[selectedDestination].bestSeason}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <i className="ri-star-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Highlights
                      </h4>
                      <p className="text-green-700 text-sm">{destinations[selectedDestination].highlights}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="ri-compass-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Popular Activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destinations[selectedDestination].activities.map((activity: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Book This Destination
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-map-2-line text-gray-400 text-4xl w-12 h-12 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Select a Destination</h3>
                <p className="text-gray-500">Click on any pin on the map to explore that region</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}