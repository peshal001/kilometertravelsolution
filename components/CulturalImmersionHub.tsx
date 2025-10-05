'use client';

import { useState } from 'react';

export default function CulturalImmersionHub() {
  const [activeTab, setActiveTab] = useState('festivals');

  const culturalContent = {
    festivals: [
      {
        name: 'Dashain Festival',
        description: 'Nepal\'s biggest festival celebrating the victory of good over evil',
        season: 'September - October',
        activities: 'Family gatherings, kite flying, traditional foods',
        image: 'https://readdy.ai/api/search-image?query=Dashain%20festival%20celebration%20with%20colorful%20decorations%2C%20traditional%20Nepali%20family%20gatherings%2C%20kite%20flying%2C%20cultural%20festivities%2C%20religious%20ceremonies%2C%20Nepal%20cultural%20heritage%2C%20festive%20atmosphere&width=300&height=200&seq=cultural-dashain&orientation=landscape',
        package: 'Dashain Cultural Experience Tour - 5 days'
      },
      {
        name: 'Tihar Festival',
        description: 'Festival of lights with beautiful decorations and celebrations',
        season: 'October - November',
        activities: 'Light decorations, cultural programs, traditional music',
        image: 'https://readdy.ai/api/search-image?query=Tihar%20festival%20of%20lights%20with%20beautiful%20oil%20lamps%2C%20colorful%20rangoli%20decorations%2C%20traditional%20celebrations%2C%20Nepal%20cultural%20festival%2C%20festive%20lighting%2C%20cultural%20heritage%20celebration&width=300&height=200&seq=cultural-tihar&orientation=landscape',
        package: 'Tihar Lights Festival Tour - 4 days'
      },
      {
        name: 'Holi Festival',
        description: 'Colorful spring festival celebrating joy and renewal',
        season: 'March',
        activities: 'Color throwing, music, dance, traditional sweets',
        image: 'https://readdy.ai/api/search-image?query=Holi%20festival%20celebration%20with%20colorful%20powders%2C%20joyful%20people%20throwing%20colors%2C%20traditional%20music%20and%20dance%2C%20spring%20celebration%2C%20Nepal%20cultural%20festival%2C%20vibrant%20festivities&width=300&height=200&seq=cultural-holi&orientation=landscape',
        package: 'Holi Color Festival Experience - 3 days'
      }
    ],
    cuisine: [
      {
        name: 'Dal Bhat Experience',
        description: 'Learn to cook Nepal\'s national dish with local families',
        ingredients: 'Lentils, rice, vegetables, spices',
        experience: 'Hands-on cooking class with local chef',
        image: 'https://readdy.ai/api/search-image?query=Traditional%20Nepali%20dal%20bhat%20meal%20with%20rice%2C%20lentils%2C%20vegetables%2C%20authentic%20local%20cuisine%2C%20cooking%20class%20experience%2C%20Nepal%20food%20culture%2C%20traditional%20meal%20preparation&width=300&height=200&seq=cultural-dalbhat&orientation=landscape',
        package: 'Nepali Cooking Workshop - Half day'
      },
      {
        name: 'Momo Making Class',
        description: 'Master the art of making Nepal\'s favorite dumplings',
        ingredients: 'Flour, meat/vegetables, spices, herbs',
        experience: 'Traditional dumpling making techniques',
        image: 'https://readdy.ai/api/search-image?query=Momo%20dumpling%20making%20class%20with%20traditional%20ingredients%2C%20hands-on%20cooking%20experience%2C%20Nepal%20cuisine%20workshop%2C%20authentic%20food%20preparation%2C%20cultural%20culinary%20experience&width=300&height=200&seq=cultural-momo&orientation=landscape',
        package: 'Momo Making Workshop - 2 hours'
      },
      {
        name: 'Newari Feast',
        description: 'Traditional Newari cuisine tasting in historic Bhaktapur',
        ingredients: 'Buffalo meat, rice wine, traditional spices',
        experience: 'Multi-course traditional meal experience',
        image: 'https://readdy.ai/api/search-image?query=Traditional%20Newari%20feast%20with%20authentic%20dishes%2C%20cultural%20dining%20experience%2C%20historic%20Bhaktapur%20setting%2C%20Nepal%20cuisine%20heritage%2C%20traditional%20food%20presentation%2C%20cultural%20meal&width=300&height=200&seq=cultural-newari&orientation=landscape',
        package: 'Newari Cultural Dining - 3 hours'
      }
    ],
    crafts: [
      {
        name: 'Pottery Workshop',
        description: 'Learn traditional pottery techniques in Bhaktapur',
        technique: 'Hand-wheel pottery, traditional glazing',
        experience: 'Create your own ceramic pieces',
        image: 'https://readdy.ai/api/search-image?query=Traditional%20Nepali%20pottery%20workshop%20with%20artisan%20hands%20shaping%20clay%2C%20authentic%20pottery%20techniques%2C%20Bhaktapur%20craftsmen%2C%20cultural%20handicraft%20experience%2C%20traditional%20ceramic%20art&width=300&height=200&seq=cultural-pottery&orientation=landscape',
        package: 'Pottery Making Experience - 3 hours'
      },
      {
        name: 'Thangka Painting',
        description: 'Buddhist art form with spiritual significance',
        technique: 'Traditional pigments, canvas preparation, meditation',
        experience: 'Learn sacred art techniques from masters',
        image: 'https://readdy.ai/api/search-image?query=Thangka%20painting%20workshop%20with%20traditional%20Buddhist%20art%2C%20spiritual%20artwork%20creation%2C%20meditation%20and%20art%2C%20Nepal%20cultural%20heritage%2C%20sacred%20art%20techniques%2C%20traditional%20painting%20methods&width=300&height=200&seq=cultural-thangka&orientation=landscape',
        package: 'Thangka Art Workshop - Full day'
      },
      {
        name: 'Carpet Weaving',
        description: 'Traditional Tibetan carpet making techniques',
        technique: 'Hand-knotting, natural dyes, traditional patterns',
        experience: 'Work with skilled artisans',
        image: 'https://readdy.ai/api/search-image?query=Traditional%20Tibetan%20carpet%20weaving%20with%20hand-knotting%20techniques%2C%20colorful%20wool%20threads%2C%20skilled%20artisans%2C%20Nepal%20handicraft%20heritage%2C%20traditional%20textile%20art%2C%20cultural%20workshop&width=300&height=200&seq=cultural-carpet&orientation=landscape',
        package: 'Carpet Weaving Workshop - Half day'
      }
    ]
  };

  const tabs = [
    { id: 'festivals', label: 'Festivals', icon: 'ri-calendar-event-line' },
    { id: 'cuisine', label: 'Cuisine', icon: 'ri-restaurant-line' },
    { id: 'crafts', label: 'Crafts', icon: 'ri-palette-line' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Cultural Immersion Hub</h2>
          <p className="text-lg text-gray-600">Experience authentic Nepali culture through festivals, cuisine, and traditional crafts</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <i className={`${tab.icon} mr-2 w-5 h-5 flex items-center justify-center`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalContent[activeTab].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {activeTab === 'festivals' && (
                        <>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.season}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-star-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.activities}
                          </div>
                        </>
                      )}
                      
                      {activeTab === 'cuisine' && (
                        <>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-restaurant-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.ingredients}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-hand-heart-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.experience}
                          </div>
                        </>
                      )}
                      
                      {activeTab === 'crafts' && (
                        <>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-tools-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.technique}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="ri-hand-heart-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {item.experience}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800 font-medium">{item.package}</p>
                    </div>
                    
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                      Book Experience
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}