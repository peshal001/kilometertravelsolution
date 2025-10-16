'use client';

import { useState } from 'react';

export default function VirtualTourPreviews() {
  interface Hotspot { x: number; y: number; title: string; info: string }
  interface Tour { id: number; name: string; description: string; image: string; hotspots: Hotspot[] }
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const tours: Tour[] = [
    {
      id: 1,
      name: 'Everest Base Camp',
      description: 'Experience the world\'s highest peak through immersive 360° views',
      image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20panoramic%20view%20with%20prayer%20flags%2C%20mountain%20peaks%2C%20virtual%20tour%20preview%2C%20360%20degree%20mountain%20scenery%2C%20Nepal%20Himalayas%20expedition%2C%20immersive%20travel%20experience&width=400&height=300&seq=virtual-everest&orientation=landscape',
      hotspots: [
        { x: 30, y: 40, title: 'Prayer Flags', info: 'Colorful prayer flags carry mantras and prayers with the wind' },
        { x: 70, y: 30, title: 'Mount Everest', info: 'The world\'s highest peak at 8,848.86 meters' },
        { x: 50, y: 60, title: 'Base Camp', info: 'Starting point for Everest expeditions' }
      ]
    },
    {
      id: 2,
      name: 'Pokhara Lake View',
      description: 'Serene lake views with mountain reflections in 360° panorama',
      image: 'https://readdy.ai/api/search-image?query=Pokhara%20Phewa%20Lake%20panoramic%20view%20with%20mountain%20reflection%2C%20360%20degree%20lake%20scenery%2C%20peaceful%20water%20views%2C%20Nepal%20tourism%20virtual%20tour%2C%20immersive%20lake%20experience&width=400&height=300&seq=virtual-pokhara&orientation=landscape',
      hotspots: [
        { x: 25, y: 35, title: 'Phewa Lake', info: 'Nepal\'s second largest lake, perfect for boating' },
        { x: 65, y: 25, title: 'Annapurna Range', info: 'Stunning mountain reflections in the lake' },
        { x: 45, y: 70, title: 'Lakeside Promenade', info: 'Popular walking area with cafes and shops' }
      ]
    },
    {
      id: 3,
      name: 'Chitwan Jungle Safari',
      description: 'Virtual jungle experience with wildlife and dense forest views',
      image: 'https://readdy.ai/api/search-image?query=Chitwan%20jungle%20safari%20panoramic%20view%20with%20dense%20forest%2C%20wildlife%20habitat%2C%20virtual%20tour%20preview%2C%20360%20degree%20jungle%20scenery%2C%20Nepal%20nature%20tourism%2C%20immersive%20safari%20experience&width=400&height=300&seq=virtual-chitwan&orientation=landscape',
      hotspots: [
        { x: 20, y: 45, title: 'Elephant Path', info: 'Traditional elephant safari routes through the jungle' },
        { x: 60, y: 35, title: 'Rhino Habitat', info: 'Home to endangered one-horned rhinoceros' },
        { x: 40, y: 65, title: 'Canopy Tower', info: 'Wildlife observation point above the forest' }
      ]
    },
    {
      id: 4,
      name: 'Kathmandu Durbar Square',
      description: 'Historic palace complex with ancient temples and architecture',
      image: 'https://readdy.ai/api/search-image?query=Kathmandu%20Durbar%20Square%20panoramic%20view%20with%20ancient%20temples%2C%20traditional%20architecture%2C%20virtual%20heritage%20tour%2C%20360%20degree%20historical%20site%2C%20Nepal%20cultural%20tourism%2C%20immersive%20cultural%20experience&width=400&height=300&seq=virtual-kathmandu&orientation=landscape',
      hotspots: [
        { x: 35, y: 30, title: 'Hanuman Dhoka', info: 'Ancient royal palace with intricate wood carvings' },
        { x: 55, y: 40, title: 'Kumari Ghar', info: 'Residence of the living goddess Kumari' },
        { x: 45, y: 65, title: 'Kasthamandap', info: 'Historic wooden pavilion that gave Kathmandu its name' }
      ]
    },
    {
      id: 5,
      name: 'Annapurna Circuit Trail',
      description: 'Mountain trekking path with diverse landscapes and villages',
      image: 'https://readdy.ai/api/search-image?query=Annapurna%20Circuit%20trail%20panoramic%20view%20with%20mountain%20path%2C%20diverse%20landscapes%2C%20virtual%20trekking%20experience%2C%20360%20degree%20mountain%20scenery%2C%20Nepal%20adventure%20tourism%2C%20immersive%20hiking%20experience&width=400&height=300&seq=virtual-annapurna&orientation=landscape',
      hotspots: [
        { x: 25, y: 30, title: 'Thorong La Pass', info: 'High altitude pass at 5,416 meters' },
        { x: 70, y: 40, title: 'Mountain Villages', info: 'Traditional Gurung and Magar settlements' },
        { x: 50, y: 70, title: 'Rhododendron Forest', info: 'Beautiful flowers bloom in spring season' }
      ]
    },
    {
      id: 6,
      name: 'Lumbini Sacred Garden',
      description: 'Peaceful birthplace of Buddha with monasteries and meditation areas',
      image: 'https://readdy.ai/api/search-image?query=Lumbini%20sacred%20garden%20panoramic%20view%20with%20Buddhist%20temples%2C%20peaceful%20meditation%20grounds%2C%20virtual%20spiritual%20tour%2C%20360%20degree%20sacred%20site%2C%20Nepal%20religious%20tourism%2C%20immersive%20spiritual%20experience&width=400&height=300&seq=virtual-lumbini&orientation=landscape',
      hotspots: [
        { x: 40, y: 25, title: 'Maya Devi Temple', info: 'Exact birthplace of Buddha marked by ancient stone' },
        { x: 60, y: 35, title: 'Sacred Pool', info: 'Holy pond where Queen Maya Devi bathed' },
        { x: 30, y: 65, title: 'Meditation Park', info: 'Peaceful area for contemplation and prayer' }
      ]
    }
  ];

  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Virtual Tour Previews</h2>
          <p className="text-lg text-gray-600">Explore destinations virtually before you visit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <i className="ri-360-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  360° View
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <button
                  onClick={() => setSelectedTour(tour)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Start Virtual Tour
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedTour && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="ri-360-line text-white mr-3 w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h3 className="text-xl font-semibold">{selectedTour.name}</h3>
                      <p className="text-sm opacity-90">Virtual 360° Tour</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="text-white hover:bg-white/20 p-2 rounded-full cursor-pointer"
                  >
                    <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={selectedTour.image} 
                  alt={selectedTour.name}
                  className="w-full h-96 object-cover object-top"
                />
                
                {selectedTour.hotspots.map((hotspot, index) => (
                  <div key={index}>
                    <div
                      className="absolute w-8 h-8 bg-red-600 rounded-full border-4 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse hover:scale-110 transition-transform"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      onMouseEnter={() => setHoveredHotspot(index)}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <i className="ri-add-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                      </div>
                    </div>
                    
                    {hoveredHotspot === index && (
                      <div
                        className="absolute bg-white rounded-lg p-4 shadow-lg border border-gray-200 w-64 z-10 transform -translate-x-1/2"
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y + 5}%` }}
                      >
                        <h4 className="font-semibold text-blue-900 mb-2">{hotspot.title}</h4>
                        <p className="text-sm text-gray-600">{hotspot.info}</p>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <i className="ri-cursor-line mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                    Hover over the red dots to explore
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-2">{selectedTour.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-eye-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {selectedTour.hotspots.length} interactive points available
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Book This Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}