'use client';

import { useState } from 'react';

export default function LocalGuideSpotlight() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    {
      id: 1,
      name: 'Pemba Sherpa',
      specialization: 'High Altitude Trekking',
      experience: '15 years',
      languages: ['English', 'Nepali', 'Tibetan'],
      rating: 4.9,
      reviews: 127,
      bio: 'Born in the Everest region, Pemba has been guiding trekkers for over 15 years. He has summited Everest 8 times and has extensive knowledge of high-altitude medicine and Sherpa culture.',
      expertise: ['Everest Base Camp', 'High Altitude Medicine', 'Sherpa Culture', 'Mountaineering'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Sherpa%20mountain%20guide%20with%20trekking%20gear%2C%20experienced%20mountain%20leader%2C%20Nepal%20adventure%20tourism%2C%20high%20altitude%20trekking%20expert%2C%20confident%20outdoor%20guide&width=300&height=300&seq=guide-pemba&orientation=squarish',
      achievements: ['8 Everest summits', 'High altitude rescue certified', 'Cultural ambassador'],
      tours: ['Everest Base Camp Trek', 'Three Passes Trek', 'Gokyo Lakes Trek']
    },
    {
      id: 2,
      name: 'Sita Gurung',
      specialization: 'Cultural Heritage Tours',
      experience: '12 years',
      languages: ['English', 'Nepali', 'Hindi'],
      rating: 4.8,
      reviews: 89,
      bio: 'Sita is a passionate cultural guide specializing in Nepal\'s rich heritage. She holds a degree in Anthropology and has deep knowledge of Hindu and Buddhist traditions.',
      expertise: ['Temple Tours', 'Cultural Immersion', 'Religious Ceremonies', 'Art & Architecture'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20cultural%20guide%20in%20traditional%20Nepali%20dress%2C%20heritage%20tourism%20expert%2C%20temple%20guide%2C%20cultural%20tourism%2C%20knowledgeable%20local%20guide&width=300&height=300&seq=guide-sita&orientation=squarish',
      achievements: ['Anthropology degree', 'UNESCO heritage specialist', 'Cultural preservation advocate'],
      tours: ['Kathmandu Heritage Tour', 'Bhaktapur Cultural Walk', 'Patan Art Tour']
    },
    {
      id: 3,
      name: 'Raj Thapa',
      specialization: 'Adventure Sports',
      experience: '10 years',
      languages: ['English', 'Nepali', 'German'],
      rating: 4.7,
      reviews: 156,
      bio: 'Raj is an adrenaline junkie who specializes in adventure sports. He\'s a certified paragliding instructor and rock climbing guide with a passion for extreme sports.',
      expertise: ['Paragliding', 'Rock Climbing', 'White Water Rafting', 'Adventure Safety'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20adventure%20sports%20guide%20with%20paragliding%20equipment%2C%20extreme%20sports%20instructor%2C%20Nepal%20adventure%20tourism%2C%20outdoor%20activity%20guide%2C%20safety-focused%20adventure%20leader&width=300&height=300&seq=guide-raj&orientation=squarish',
      achievements: ['Paragliding instructor certified', 'Rock climbing guide', 'Adventure safety expert'],
      tours: ['Pokhara Adventure Package', 'Paragliding Experience', 'Multi-sport Adventure']
    },
    {
      id: 4,
      name: 'Mingma Lama',
      specialization: 'Wildlife & Nature',
      experience: '18 years',
      languages: ['English', 'Nepali'],
      rating: 4.9,
      reviews: 203,
      bio: 'Mingma is a naturalist guide with extensive knowledge of Nepal\'s wildlife. He has worked in various national parks and is passionate about conservation.',
      expertise: ['Wildlife Photography', 'Bird Watching', 'Nature Conservation', 'Jungle Safari'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20wildlife%20guide%20with%20binoculars%20in%20jungle%20setting%2C%20nature%20conservation%20expert%2C%20Nepal%20wildlife%20tourism%2C%20experienced%20naturalist%20guide%2C%20jungle%20safari%20leader&width=300&height=300&seq=guide-mingma&orientation=squarish',
      achievements: ['Wildlife photography expert', 'Conservation advocate', 'National park specialist'],
      tours: ['Chitwan Safari', 'Bardia Wildlife Tour', 'Bird Watching Expedition']
    },
    {
      id: 5,
      name: 'Karma Dolma',
      specialization: 'Meditation & Spirituality',
      experience: '8 years',
      languages: ['English', 'Nepali', 'Tibetan'],
      rating: 4.8,
      reviews: 74,
      bio: 'Karma is a spiritual guide who helps travelers connect with Nepal\'s Buddhist heritage. She has studied meditation in various monasteries and offers authentic spiritual experiences.',
      expertise: ['Meditation Teaching', 'Buddhist Philosophy', 'Monastery Tours', 'Spiritual Healing'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20spiritual%20guide%20in%20Buddhist%20monastery%2C%20meditation%20teacher%2C%20Nepal%20spiritual%20tourism%2C%20peaceful%20spiritual%20leader%2C%20authentic%20cultural%20guide&width=300&height=300&seq=guide-karma&orientation=squarish',
      achievements: ['Meditation teacher certified', 'Buddhist philosophy scholar', 'Spiritual healing practitioner'],
      tours: ['Lumbini Spiritual Journey', 'Monastery Meditation Retreat', 'Buddhist Heritage Tour']
    },
    {
      id: 6,
      name: 'Dawa Sherpa',
      specialization: 'Photography Tours',
      experience: '9 years',
      languages: ['English', 'Nepali', 'Japanese'],
      rating: 4.7,
      reviews: 95,
      bio: 'Dawa combines his guiding skills with professional photography expertise. He helps travelers capture the perfect shots while ensuring their safety and comfort.',
      expertise: ['Landscape Photography', 'Portrait Photography', 'Equipment Guidance', 'Composition Tips'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20photography%20guide%20with%20camera%20equipment%2C%20mountain%20photography%20expert%2C%20Nepal%20photography%20tours%2C%20skilled%20photographer%20guide%2C%20landscape%20photography%20specialist&width=300&height=300&seq=guide-dawa&orientation=squarish',
      achievements: ['Professional photographer', 'Photography workshop instructor', 'Mountain photography specialist'],
      tours: ['Himalayan Photography Tour', 'Golden Hour Shooting', 'Photography Workshop Trek']
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
        ))}
        {hasHalfStar && <i className="ri-star-half-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Expert Guides</h2>
          <p className="text-lg text-gray-600">Professional local guides with years of experience and passion for Nepal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={guide.image} 
                  alt={guide.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {guide.experience}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{guide.name}</h3>
                <p className="text-red-600 font-medium mb-3">{guide.specialization}</p>
                
                <div className="flex items-center justify-between mb-4">
                  {renderStars(guide.rating)}
                  <span className="text-sm text-gray-500">({guide.reviews} reviews)</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((lang, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.expertise.slice(0, 2).map((skill, index) => (
                      <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                    {guide.expertise.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{guide.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    View Profile
                  </button>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Book with {guide.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedGuide && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">Guide Profile</h2>
                  <button
                    onClick={() => setSelectedGuide(null)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedGuide.image} 
                      alt={selectedGuide.name}
                      className="w-full h-80 object-cover object-top rounded-lg mb-4"
                    />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Achievements</h4>
                        <ul className="space-y-1">
                          {selectedGuide.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Popular Tours</h4>
                        <div className="space-y-2">
                          {selectedGuide.tours.map((tour, index) => (
                            <div key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                              {tour}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{selectedGuide.name}</h3>
                    <p className="text-red-600 font-medium text-lg mb-4">{selectedGuide.specialization}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                        <p className="text-blue-600 font-medium">{selectedGuide.experience}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-1">Rating</h4>
                        <div className="flex items-center">
                          {renderStars(selectedGuide.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedGuide.bio}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedGuide.languages.map((lang, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedGuide.expertise.map((skill, index) => (
                          <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                      Book Tour with {selectedGuide.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}