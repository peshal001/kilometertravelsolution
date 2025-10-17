'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'ri-file-list-line' },
    { id: 'adventure', name: 'Adventure', icon: 'ri-mountain-line' },
    { id: 'culture', name: 'Culture', icon: 'ri-building-line' },
    { id: 'trekking', name: 'Trekking', icon: 'ri-footprint-line' },
    { id: 'tips', name: 'Travel Tips', icon: 'ri-lightbulb-line' },
    { id: 'food', name: 'Food & Culture', icon: 'ri-restaurant-line' }
  ];

  const blogPosts: Post[] = [
    {
      id: 1,
      title: 'Top 5 Himalayan Treks for Beginners',
      excerpt: 'Discover the most beginner-friendly trekking routes in the Himalayas with essential tips for first-time trekkers.',
      content: 'The Himalayas offer some of the most spectacular trekking experiences in the world. For beginners, it\'s important to choose routes that provide amazing views while being manageable. Here are the top 5 beginner-friendly treks: 1. Ghorepani Poon Hill Trek - A short 4-day trek with stunning sunrise views. 2. Langtang Valley Trek - Beautiful valley trek with moderate difficulty. 3. Helambu Trek - Cultural trek through Sherpa villages. 4. Mardi Himal Trek - Recently opened trail with great mountain views. 5. Khopra Ridge Trek - Less crowded alternative to Poon Hill.',
      category: 'trekking',
      author: 'Pemba Sherpa',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Beginner%20trekkers%20on%20Himalayan%20trail%20with%20mountain%20views%2C%20easy%20trekking%20routes%2C%20Nepal%20adventure%20tourism%2C%20mountain%20hiking%20guide%2C%20successful%20trekking%20experience%2C%20scenic%20mountain%20paths&width=400&height=250&seq=blog-trekking-beginners&orientation=landscape',
      tags: ['Trekking', 'Beginners', 'Himalayas']
    },
    {
      id: 2,
      title: 'Essential Packing List for Nepal Adventure',
      excerpt: 'Complete guide to packing for your Nepal adventure, from trekking gear to cultural tour essentials.',
      content: 'Proper packing is crucial for a successful Nepal adventure. Here\'s your comprehensive packing checklist: Clothing: Base layers, insulating layers, waterproof jacket, trekking pants, warm hat, sun hat, gloves. Footwear: Trekking boots, camp shoes, warm socks. Gear: Sleeping bag, headlamp, water bottles, first aid kit, sunscreen. Documents: Passport, permits, insurance, photos. Electronics: Camera, power bank, adapters. Personal items: Toiletries, medications, snacks.',
      category: 'tips',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Nepal%20adventure%20packing%20essentials%20with%20trekking%20gear%2C%20backpack%20preparation%2C%20travel%20equipment%2C%20mountain%20adventure%20supplies%2C%20organized%20packing%20list%2C%20adventure%20travel%20preparation&width=400&height=250&seq=blog-packing-list&orientation=landscape',
      tags: ['Packing', 'Adventure', 'Tips']
    },
    {
      id: 3,
      title: 'Cultural Etiquette: Respecting Local Traditions',
      excerpt: 'Learn about Nepali customs and traditions to ensure respectful interactions during your visit.',
      content: 'Understanding local culture enhances your travel experience and shows respect for the communities you visit. Key cultural guidelines: Greetings: Use "Namaste" with palms together. Dress modestly, especially at religious sites. Remove shoes before entering homes and temples. Use your right hand for eating and greeting. Respect photography rules at religious sites. Learn basic Nepali phrases. Be patient and flexible with local customs.',
      category: 'culture',
      author: 'Karma Lama',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Nepal%20cultural%20traditions%20with%20local%20people%2C%20respectful%20cultural%20interaction%2C%20traditional%20customs%2C%20Nepal%20cultural%20tourism%2C%20authentic%20cultural%20experience%2C%20local%20community%20engagement&width=400&height=250&seq=blog-cultural-etiquette&orientation=landscape',
      tags: ['Culture', 'Etiquette', 'Traditions']
    },
    {
      id: 4,
      title: 'Best Time to Visit Nepal: Seasonal Guide',
      excerpt: 'Comprehensive guide to Nepal\'s seasons and the best times to visit for different activities.',
      content: 'Nepal\'s climate varies dramatically with altitude and season. Pre-monsoon (March-May): Best for trekking, rhododendrons bloom, clear mountain views. Monsoon (June-August): Rainy season, good for cultural tours, lush green landscapes. Post-monsoon (September-November): Peak tourist season, perfect weather, clear skies. Winter (December-February): Cold but clear, good for lower altitude activities.',
      category: 'tips',
      author: 'Mingma Sherpa',
      date: '2024-01-01',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Nepal%20seasonal%20landscapes%20showing%20different%20weather%20conditions%2C%20mountain%20views%20across%20seasons%2C%20travel%20planning%20guide%2C%20seasonal%20tourism%2C%20Nepal%20weather%20patterns%2C%20best%20travel%20times&width=400&height=250&seq=blog-seasonal-guide&orientation=landscape',
      tags: ['Seasons', 'Planning', 'Weather']
    },
    {
      id: 5,
      title: 'Discovering Authentic Nepali Cuisine',
      excerpt: 'Explore the rich flavors of Nepal through its traditional dishes and food culture.',
      content: 'Nepali cuisine reflects the country\'s diverse geography and culture. Must-try dishes: Dal Bhat - National dish with lentils, rice, and vegetables. Momos - Delicious dumplings with various fillings. Gundruk - Fermented leafy greens, a traditional pickle. Sel Roti - Ring-shaped rice bread for festivals. Yak cheese - Himalayan specialty. Tongba - Millet-based alcoholic beverage. Food tips: Eat with your right hand, try local tea houses, respect dietary customs.',
      category: 'food',
      author: 'Devi Maharjan',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Nepali%20cuisine%20with%20dal%20bhat%2C%20momos%2C%20authentic%20local%20food%2C%20Nepal%20food%20culture%2C%20traditional%20cooking%2C%20local%20restaurant%20experience%2C%20cultural%20dining&width=400&height=250&seq=blog-nepali-cuisine&orientation=landscape',
      tags: ['Food', 'Culture', 'Cuisine']
    },
    {
      id: 6,
      title: 'Adventure Photography in the Himalayas',
      excerpt: 'Tips and techniques for capturing stunning mountain landscapes and adventure moments.',
      content: 'The Himalayas offer incredible photography opportunities. Key tips: Golden hour shooting for warm mountain light. Use polarizing filters to reduce glare. Protect gear from dust and moisture. Capture human elements for scale. Plan compositions with foreground, middle, and background. Battery life decreases in cold - carry spares. Respect local photography customs. Share images responsibly.',
      category: 'adventure',
      author: 'Alex Chen',
      date: '2023-12-25',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Mountain%20photography%20in%20Himalayas%20with%20camera%20equipment%2C%20adventure%20photographer%2C%20stunning%20landscape%20shots%2C%20Nepal%20photography%20tour%2C%20mountain%20scenery%20capture%2C%20professional%20photography%20tips&width=400&height=250&seq=blog-photography-himalayas&orientation=landscape',
      tags: ['Photography', 'Adventure', 'Mountains']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Adventure Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover travel tips, cultural insights, and adventure stories from Nepal
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${category.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover object-top"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-blue-900 mb-3 hover:text-blue-700 cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-blue-900">{selectedPost.title}</h2>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
                
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover object-top rounded-lg mb-6"
                />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">{selectedPost.date} • {selectedPost.readTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedPost.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}