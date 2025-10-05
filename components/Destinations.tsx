
'use client';

export default function Destinations() {
  const destinations = [
    {
      name: 'Pokhara Valley',
      distance: '200 km',
      description: 'Stunning lakeside city with mountain views, adventure sports, and peaceful ambiance.',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Pokhara%20lake%20with%20snow-capped%20Annapurna%20mountain%20reflection%2C%20peaceful%20boats%20on%20crystal%20clear%20water%2C%20golden%20hour%20lighting%2C%20serene%20landscape%2C%20travel%20destination%20photography%2C%20Nepal%20tourism%2C%20pristine%20mountain%20lake%20scenery%2C%20adventure%20tourism%20backdrop&width=400&height=300&seq=pokhara-dest&orientation=landscape',
      highlights: ['Phewa Lake', 'Sarangkot Sunrise', 'Adventure Sports']
    },
    {
      name: 'Everest Base Camp',
      distance: '135 km to Lukla',
      description: 'Ultimate trekking destination offering breathtaking views of the world\'s highest peak.',
      image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20with%20colorful%20prayer%20flags%2C%20dramatic%20mountain%20peaks%2C%20trekking%20path%2C%20clear%20blue%20sky%2C%20adventure%20tourism%2C%20Nepal%20Himalayas%2C%20high%20altitude%20landscape%2C%20mountain%20expedition%20base%20camp%2C%20inspiring%20travel%20destination&width=400&height=300&seq=everest-dest&orientation=landscape',
      highlights: ['Mt. Everest Views', 'Sherpa Culture', 'Epic Trekking']
    },
    {
      name: 'Chitwan National Park',
      distance: '165 km',
      description: 'Wildlife paradise with jungle safaris, exotic animals, and rich biodiversity.',
      image: 'https://readdy.ai/api/search-image?query=Chitwan%20National%20Park%20with%20Asian%20elephants%20walking%20through%20lush%20green%20jungle%2C%20tropical%20wildlife%20habitat%2C%20safari%20adventure%2C%20dense%20forest%20canopy%2C%20wildlife%20tourism%2C%20Nepal%20nature%20preserve%2C%20exotic%20animals%20in%20natural%20habitat&width=400&height=300&seq=chitwan-dest&orientation=landscape',
      highlights: ['Jungle Safari', 'Royal Bengal Tigers', 'Elephant Rides']
    },
    {
      name: 'Annapurna Circuit',
      distance: '230 km',
      description: 'World-renowned trekking circuit through diverse landscapes and mountain cultures.',
      image: 'https://readdy.ai/api/search-image?query=Annapurna%20mountain%20circuit%20with%20terraced%20hillsides%2C%20traditional%20stone%20villages%2C%20snow-capped%20peaks%2C%20trekking%20trail%2C%20mountain%20culture%2C%20Nepal%20highlands%2C%20alpine%20meadows%2C%20adventure%20trekking%20destination%2C%20cultural%20tourism&width=400&height=300&seq=annapurna-dest&orientation=landscape',
      highlights: ['Thorong La Pass', 'Mountain Villages', 'Cultural Diversity']
    },
    {
      name: 'Lumbini',
      distance: '280 km',
      description: 'Sacred birthplace of Buddha, UNESCO World Heritage site with ancient temples.',
      image: 'https://readdy.ai/api/search-image?query=Lumbini%20sacred%20garden%20with%20ancient%20Buddhist%20temples%2C%20peaceful%20meditation%20grounds%2C%20golden%20Buddha%20statue%2C%20spiritual%20pilgrimage%20site%2C%20UNESCO%20heritage%2C%20serene%20monastery%20complex%2C%20religious%20tourism%2C%20Nepal%20spiritual%20destination&width=400&height=300&seq=lumbini-dest&orientation=landscape',
      highlights: ['Maya Devi Temple', 'Buddhist Monasteries', 'Peaceful Gardens']
    },
    {
      name: 'Bhaktapur',
      distance: '15 km',
      description: 'Medieval city with preserved architecture, traditional crafts, and cultural heritage.',
      image: 'https://readdy.ai/api/search-image?query=Bhaktapur%20ancient%20city%20with%20traditional%20Newari%20architecture%2C%20ornate%20wooden%20temples%2C%20cobblestone%20streets%2C%20cultural%20heritage%20site%2C%20medieval%20Nepal%2C%20traditional%20crafts%2C%20historical%20tourism%2C%20UNESCO%20world%20heritage%2C%20authentic%20cultural%20experience&width=400&height=300&seq=bhaktapur-dest&orientation=landscape',
      highlights: ['Durbar Square', 'Traditional Crafts', 'Ancient Architecture']
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600">Explore Nepal's most beautiful and culturally rich destinations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.distance}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{destination.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
