'use client';

import { useState } from 'react';

export default function SeasonalTravelPlanner() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [recommendations, setRecommendations] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const seasonalData = {
    January: {
      season: 'Winter',
      weather: 'Cold and dry',
      destinations: [
        {
          name: 'Chitwan National Park',
          reason: 'Perfect wildlife viewing weather',
          activities: ['Wildlife Safari', 'Elephant Rides', 'Bird Watching'],
          image: 'https://readdy.ai/api/search-image?query=Chitwan%20winter%20safari%20with%20clear%20skies%2C%20perfect%20wildlife%20viewing%20conditions%2C%20dry%20season%20animals%2C%20jungle%20exploration%2C%20Nepal%20nature%20tourism%2C%20optimal%20safari%20weather%20conditions&width=300&height=200&seq=seasonal-chitwan-jan&orientation=landscape'
        },
        {
          name: 'Kathmandu Valley',
          reason: 'Clear mountain views and comfortable temperatures',
          activities: ['Heritage Tours', 'Cultural Events', 'Temple Visits'],
          image: 'https://readdy.ai/api/search-image?query=Kathmandu%20winter%20heritage%20tour%20with%20clear%20mountain%20views%2C%20ancient%20temples%2C%20cultural%20tourism%2C%20comfortable%20weather%2C%20historical%20monuments%2C%20Nepal%20cultural%20capital&width=300&height=200&seq=seasonal-kathmandu-jan&orientation=landscape'
        }
      ],
      festivals: ['Maghe Sankranti', 'Basant Panchami'],
      tips: 'Pack warm clothes for early morning and evening. Perfect time for wildlife and cultural tours.'
    },
    March: {
      season: 'Spring',
      weather: 'Warm and pleasant',
      destinations: [
        {
          name: 'Everest Base Camp',
          reason: 'Pre-monsoon trekking season begins',
          activities: ['Trekking', 'Mountaineering', 'Photography'],
          image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20spring%20trekking%20season%2C%20clear%20mountain%20views%2C%20perfect%20hiking%20weather%2C%20rhododendron%20blooms%2C%20Nepal%20Himalayas%20expedition%2C%20ideal%20trekking%20conditions&width=300&height=200&seq=seasonal-everest-mar&orientation=landscape'
        },
        {
          name: 'Pokhara',
          reason: 'Rhododendron blooms and clear mountain views',
          activities: ['Paragliding', 'Hiking', 'Photography'],
          image: 'https://readdy.ai/api/search-image?query=Pokhara%20spring%20season%20with%20rhododendron%20flowers%2C%20clear%20mountain%20reflections%2C%20perfect%20paragliding%20weather%2C%20beautiful%20lake%20views%2C%20Nepal%20tourism%20spring%20season&width=300&height=200&seq=seasonal-pokhara-mar&orientation=landscape'
        }
      ],
      festivals: ['Holi', 'Ghode Jatra'],
      tips: 'Ideal time for high-altitude treks. Rhododendrons in full bloom make for spectacular views.'
    },
    July: {
      season: 'Monsoon',
      weather: 'Rainy and humid',
      destinations: [
        {
          name: 'Mustang',
          reason: 'Rain shadow area, less affected by monsoon',
          activities: ['Cultural Tours', 'Monastery Visits', 'Unique Landscapes'],
          image: 'https://readdy.ai/api/search-image?query=Mustang%20desert%20landscape%20during%20monsoon%2C%20rain%20shadow%20region%2C%20unique%20barren%20beauty%2C%20traditional%20Tibetan%20culture%2C%20dry%20landscapes%2C%20Nepal%20hidden%20gem%20destination&width=300&height=200&seq=seasonal-mustang-jul&orientation=landscape'
        },
        {
          name: 'Kathmandu Cultural Sites',
          reason: 'Indoor cultural activities and festivals',
          activities: ['Museum Visits', 'Cultural Shows', 'Art Galleries'],
          image: 'https://readdy.ai/api/search-image?query=Kathmandu%20monsoon%20cultural%20activities%2C%20indoor%20heritage%20sites%2C%20traditional%20art%20galleries%2C%20cultural%20shows%2C%20Nepal%20cultural%20tourism%2C%20monsoon%20season%20activities&width=300&height=200&seq=seasonal-culture-jul&orientation=landscape'
        }
      ],
      festivals: ['Janai Purnima', 'Gai Jatra'],
      tips: 'Avoid high-altitude treks. Great time for cultural immersion and visiting rain shadow areas.'
    },
    October: {
      season: 'Autumn',
      weather: 'Clear skies and perfect temperatures',
      destinations: [
        {
          name: 'Everest Base Camp',
          reason: 'Best trekking season with clear mountain views',
          activities: ['Trekking', 'Photography', 'Cultural Exchange'],
          image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20autumn%20trekking%20with%20crystal%20clear%20mountain%20views%2C%20perfect%20weather%20conditions%2C%20golden%20hour%20lighting%2C%20Nepal%20Himalayas%20peak%20season%2C%20ideal%20trekking%20conditions&width=300&height=200&seq=seasonal-everest-oct&orientation=landscape'
        },
        {
          name: 'Annapurna Circuit',
          reason: 'Peak trekking season with excellent visibility',
          activities: ['Circuit Trekking', 'Village Tours', 'Mountain Views'],
          image: 'https://readdy.ai/api/search-image?query=Annapurna%20Circuit%20autumn%20trek%20with%20clear%20mountain%20panorama%2C%20perfect%20hiking%20weather%2C%20traditional%20villages%2C%20Nepal%20peak%20trekking%20season%2C%20spectacular%20mountain%20views&width=300&height=200&seq=seasonal-annapurna-oct&orientation=landscape'
        }
      ],
      festivals: ['Dashain', 'Tihar'],
      tips: 'Peak tourist season. Book accommodations early. Best time for all outdoor activities.'
    }
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setRecommendations(seasonalData[month] || null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
        <i className="ri-calendar-2-line text-blue-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
        Seasonal Travel Planner
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Travel Month</label>
          <div className="grid grid-cols-3 gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => handleMonthSelect(month)}
                className={`p-2 text-sm rounded-lg transition-colors cursor-pointer ${
                  selectedMonth === month
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {month.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {recommendations && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">{selectedMonth} - {recommendations.season}</h4>
              <p className="text-gray-700 mb-3">{recommendations.weather}</p>
              <div className="flex flex-wrap gap-2">
                {recommendations.festivals.map((festival, index) => (
                  <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                    {festival}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Recommended Destinations</h4>
              <div className="space-y-4">
                {recommendations.destinations.map((dest, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={dest.image} 
                        alt={dest.name}
                        className="w-20 h-16 object-cover object-top rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold text-blue-900">{dest.name}</h5>
                        <p className="text-sm text-gray-600 mb-2">{dest.reason}</p>
                        <div className="flex flex-wrap gap-1">
                          {dest.activities.map((activity, i) => (
                            <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <i className="ri-lightbulb-line text-yellow-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                Travel Tips
              </h5>
              <p className="text-sm text-yellow-700">{recommendations.tips}</p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Plan My {selectedMonth} Trip
            </button>
          </div>
        )}

        {!recommendations && (
          <div className="text-center py-8">
            <i className="ri-calendar-line text-gray-400 text-4xl mb-4 w-12 h-12 flex items-center justify-center mx-auto"></i>
            <p className="text-gray-500">Select a month to see travel recommendations</p>
          </div>
        )}
      </div>
    </div>
  );
}