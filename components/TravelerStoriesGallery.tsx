'use client';

import { useState } from 'react';

export default function TravelerStoriesGallery() {
  interface Story {
    id: number;
    title: string;
    author: string;
    country: string;
    date: string;
    summary: string;
    story: string;
    image: string;
    location: string;
    rating: number;
    highlights: string[];
  }

  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const stories = [
    {
      id: 1,
      title: 'My Everest Base Camp Journey',
      author: 'Sarah Johnson',
      country: 'USA',
      date: '2 weeks ago',
      summary: 'An incredible 14-day trek that changed my perspective on life and adventure.',
      story: 'The trek to Everest Base Camp was the most challenging yet rewarding experience of my life. The breathtaking views of the Himalayas, the warm hospitality of the Sherpa people, and the sense of accomplishment at reaching base camp made every difficult step worth it. The guides from Kilometer Travel were exceptional - knowledgeable, caring, and always ensuring our safety.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20female%20trekker%20at%20Everest%20Base%20Camp%20with%20mountain%20backdrop%2C%20successful%20adventure%20travel%2C%20personal%20achievement%2C%20Nepal%20trekking%20experience%2C%20inspiring%20travel%20story%2C%20mountain%20expedition%20success&width=400&height=300&seq=story-sarah-everest&orientation=landscape',
      location: 'Everest Base Camp',
      rating: 5,
      highlights: ['Amazing guides', 'Stunning views', 'Life-changing experience']
    },
    {
      id: 2,
      title: 'Pokhara Paradise Adventure',
      author: 'Marcus Chen',
      country: 'Australia',
      date: '1 month ago',
      summary: 'Perfect blend of adventure and relaxation in Nepal\'s most beautiful city.',
      story: 'Pokhara exceeded all my expectations! The paragliding experience over Phewa Lake was absolutely magical. The sunrise from Sarangkot was breathtaking, and the peaceful boat rides in the evening were perfect for reflection. The team organized everything perfectly, from comfortable accommodation to exciting activities.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20male%20traveler%20paragliding%20over%20Pokhara%20lake%20with%20mountain%20views%2C%20adventure%20tourism%2C%20exciting%20travel%20experience%2C%20Nepal%20adventure%20story%2C%20successful%20holiday%20experience&width=400&height=300&seq=story-marcus-pokhara&orientation=landscape',
      location: 'Pokhara',
      rating: 5,
      highlights: ['Paragliding adventure', 'Beautiful sunrises', 'Perfect organization']
    },
    {
      id: 3,
      title: 'Cultural Discovery in Kathmandu',
      author: 'Elena Rodriguez',
      country: 'Spain',
      date: '3 weeks ago',
      summary: 'Immersive cultural experience exploring ancient temples and local traditions.',
      story: 'My cultural tour of Kathmandu was absolutely fascinating. Visiting the ancient temples of Durbar Square, learning about local traditions, and participating in a traditional cooking class were highlights of my trip. The local guide was incredibly knowledgeable and helped me understand the deep cultural significance of each site.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20female%20tourist%20exploring%20Kathmandu%20temples%2C%20cultural%20tourism%20experience%2C%20traditional%20architecture%2C%20Nepal%20heritage%20tour%2C%20successful%20cultural%20immersion%2C%20authentic%20travel%20experience&width=400&height=300&seq=story-elena-kathmandu&orientation=landscape',
      location: 'Kathmandu',
      rating: 5,
      highlights: ['Rich culture', 'Knowledgeable guides', 'Authentic experiences']
    },
    {
      id: 4,
      title: 'Wildlife Safari in Chitwan',
      author: 'David Thompson',
      country: 'UK',
      date: '2 months ago',
      summary: 'Unforgettable wildlife encounters in Nepal\'s premier national park.',
      story: 'The wildlife safari in Chitwan was incredible! We saw rhinos, tigers, and so many exotic birds. The elephant ride through the jungle was a once-in-a-lifetime experience. The jungle lodge was comfortable and the naturalist guides were extremely professional and passionate about conservation.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20male%20tourist%20on%20elephant%20safari%20in%20Chitwan%20jungle%2C%20wildlife%20adventure%2C%20exotic%20animals%2C%20Nepal%20nature%20tourism%2C%20successful%20safari%20experience%2C%20jungle%20exploration&width=400&height=300&seq=story-david-chitwan&orientation=landscape',
      location: 'Chitwan National Park',
      rating: 5,
      highlights: ['Amazing wildlife', 'Professional guides', 'Comfortable lodge']
    },
    {
      id: 5,
      title: 'Spiritual Journey to Lumbini',
      author: 'Priya Patel',
      country: 'India',
      date: '1 month ago',
      summary: 'Peaceful pilgrimage to the birthplace of Buddha.',
      story: 'My visit to Lumbini was deeply spiritual and peaceful. The sacred garden where Buddha was born has such a serene atmosphere. The meditation sessions and visits to various monasteries were incredibly enriching. This trip helped me find inner peace and spiritual clarity.',
      image: 'https://readdy.ai/api/search-image?query=Peaceful%20female%20pilgrim%20meditating%20at%20Lumbini%20Buddhist%20site%2C%20spiritual%20journey%2C%20peaceful%20meditation%2C%20Nepal%20religious%20tourism%2C%20successful%20pilgrimage%20experience%2C%20sacred%20travel%20destination&width=400&height=300&seq=story-priya-lumbini&orientation=landscape',
      location: 'Lumbini',
      rating: 5,
      highlights: ['Spiritual experience', 'Peaceful atmosphere', 'Meaningful journey']
    },
    {
      id: 6,
      title: 'Adventure in Annapurna',
      author: 'James Wilson',
      country: 'Canada',
      date: '3 months ago',
      summary: 'Epic trekking adventure through diverse landscapes and cultures.',
      story: 'The Annapurna Circuit trek was absolutely epic! The diversity of landscapes - from tropical valleys to alpine meadows - was incredible. Meeting local communities and staying in traditional tea houses added a cultural dimension to the adventure. The support team was outstanding throughout the journey.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20male%20trekker%20on%20Annapurna%20Circuit%20with%20mountain%20panorama%2C%20successful%20trek%20completion%2C%20diverse%20landscapes%2C%20Nepal%20adventure%20tourism%2C%20mountain%20expedition%20success&width=400&height=300&seq=story-james-annapurna&orientation=landscape',
      location: 'Annapurna Region',
      rating: 5,
      highlights: ['Diverse landscapes', 'Cultural immersion', 'Excellent support']
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400 w-4 h-4 flex items-center justify-center`}></i>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Traveler Stories</h2>
          <p className="text-lg text-gray-600 mb-8">Real experiences from our amazing travelers</p>
          
          <button
            onClick={() => setShowSubmitForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Share Your Story
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story: Story) => (
            <div key={story.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover object-top"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1">
                    {renderStars(story.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{story.title}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{story.author}</p>
                    <p className="text-xs text-gray-500">{story.country}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <i className="ri-map-pin-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-sm text-gray-600">{story.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{story.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedStory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{selectedStory.title}</h3>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
                
                <img 
                  src={selectedStory.image} 
                  alt={selectedStory.title}
                  className="w-full h-64 object-cover object-top rounded-lg mb-4"
                />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{selectedStory.author}</p>
                      <p className="text-sm text-gray-500">{selectedStory.country} • {selectedStory.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(selectedStory.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{selectedStory.story}</p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedStory.highlights.map((highlight, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {showSubmitForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">Share Your Story</h3>
                  <button
                    onClick={() => setShowSubmitForm(false)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Story</label>
                    <textarea rows={6} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxLength={500} placeholder="Share your amazing travel experience with us..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-2">
                      {[1,2,3,4,5].map(star => (
                        <button key={star} type="button" className="text-gray-300 hover:text-yellow-400 text-2xl cursor-pointer">
                          <i className="ri-star-line w-6 h-6 flex items-center justify-center"></i>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Submit Story
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}