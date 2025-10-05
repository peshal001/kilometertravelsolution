
'use client';

import { useState } from 'react';

export default function Reviews() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      name: 'Rajesh Sharma',
      rating: 5,
      comment: 'Excellent service! They handled our entire family trip to Pokhara perfectly. Highly recommended!',
      date: '2 days ago',
      service: 'Holiday Package'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing support for visa services. Made our Europe trip planning so much easier.',
      date: '1 week ago',
      service: 'Visa Services'
    },
    {
      name: 'Amit Thapa',
      rating: 4,
      comment: 'Great flight booking service with competitive prices. Will use again for sure.',
      date: '2 weeks ago',
      service: 'Flight Booking'
    },
    {
      name: 'Lisa Chen',
      rating: 5,
      comment: 'Professional team with excellent customer service. They made our honeymoon trip memorable.',
      date: '1 month ago',
      service: 'Holiday Package'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400 w-4 h-4 flex items-center justify-center`}></i>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600 mb-8">What our customers say about our services</p>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <i className="ri-facebook-fill text-blue-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                <span className="text-2xl font-bold text-blue-900">5.0</span>
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-sm text-gray-600">2 Facebook Reviews</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <i className="ri-google-fill text-red-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                <span className="text-2xl font-bold text-blue-900">4.0</span>
                <div className="flex space-x-1">
                  {renderStars(4)}
                </div>
              </div>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto mb-8">
            <p className="text-xl text-blue-900 font-semibold italic">
              "We Provide Best Travel Services for your ease."
            </p>
            <p className="text-gray-600 mt-2">- Kilometer Travel Solution</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-blue-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-3">{review.comment}</p>
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                {review.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Write a Review
          </button>
        </div>

        {showReviewForm && (
          <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Share Your Experience</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxLength={500}></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
