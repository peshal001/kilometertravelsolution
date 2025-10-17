
'use client';

import { useState } from 'react';

export default function DealsCarousel() {
  const [currentDeal, setCurrentDeal] = useState(0);

  const deals = [
    {
      title: 'Pokhara Adventure Package',
      originalPrice: 'Rs 450',
      discountPrice: 'Rs 320',
      discount: '30% OFF',
      description: '3 days 2 nights with paragliding, boating, and mountain views',
      image: 'https://readdy.ai/api/search-image?query=Pokhara%20paragliding%20adventure%20with%20mountain%20backdrop%2C%20extreme%20sports%20tourism%2C%20aerial%20view%20of%20lake%20and%20mountains%2C%20adventure%20travel%20deal%2C%20exciting%20outdoor%20activities%2C%20Nepal%20adventure%20tourism%2C%20thrilling%20experience&width=300&height=200&seq=deal-pokhara&orientation=landscape',
      validUntil: 'Valid until March 31, 2024'
    },
    {
      title: 'Everest Base Camp Trek',
      originalPrice: '$1200',
      discountPrice: '$950',
      discount: '25% OFF',
      description: '14 days trek with experienced guides and full support',
      image: 'https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20trekking%20group%20with%20mountain%20guides%2C%20high%20altitude%20adventure%2C%20Nepal%20Himalayas%20expedition%2C%20professional%20trekking%20service%2C%20mountain%20climbing%20tour%2C%20adventure%20travel%20deal%2C%20challenging%20trek%20experience&width=300&height=200&seq=deal-everest&orientation=landscape',
      validUntil: 'Valid until April 15, 2024'
    },
    {
      title: 'Chitwan Safari Special',
      originalPrice: '$280',
      discountPrice: '$199',
      discount: '35% OFF',
      description: '2 days jungle safari with elephant rides and cultural shows',
      image: 'https://readdy.ai/api/search-image?query=Chitwan%20National%20Park%20safari%20with%20elephants%20and%20jeep%20tour%2C%20wildlife%20adventure%2C%20jungle%20exploration%2C%20Nepal%20nature%20tourism%2C%20exotic%20animals%2C%20safari%20travel%20deal%2C%20wildlife%20photography%20tour&width=300&height=200&seq=deal-chitwan&orientation=landscape',
      validUntil: 'Valid until March 20, 2024'
    },
    {
      title: 'Annapurna Circuit Trek',
      originalPrice: '$800',
      discountPrice: '$640',
      discount: '20% OFF',
      description: '12 days classic trek through diverse landscapes',
      image: 'https://readdy.ai/api/search-image?query=Annapurna%20Circuit%20trekking%20trail%20with%20mountain%20views%2C%20classic%20Nepal%20trek%2C%20highland%20adventure%2C%20mountain%20culture%20experience%2C%20trekking%20deal%2C%20alpine%20landscape%2C%20cultural%20mountain%20tour&width=300&height=200&seq=deal-annapurna&orientation=landscape',
      validUntil: 'Valid until May 1, 2024'
    }
  ];

  const nextDeal = () => {
    setCurrentDeal((prev) => (prev + 1) % deals.length);
  };

  const prevDeal = () => {
    setCurrentDeal((prev) => (prev - 1 + deals.length) % deals.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Special Deals</h2>
          <p className="text-lg text-gray-600">Exclusive offers for your next adventure</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentDeal * 100}%)` }}
            >
              {deals.map((deal, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="relative">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          className="w-full h-80 object-cover object-top"
                        />
                        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                          {deal.discount}
                        </div>
                      </div>

                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">{deal.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg">{deal.description}</p>

                        <div className="flex items-center space-x-4 mb-6">
                          <span className="text-3xl font-bold text-red-600">{deal.discountPrice}</span>
                          <span className="text-xl text-gray-500 line-through">{deal.originalPrice}</span>
                        </div>

                        <p className="text-sm text-gray-500 mb-6">{deal.validUntil}</p>

                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-fit whitespace-nowrap cursor-pointer">
                          Book This Deal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevDeal}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <i className="ri-arrow-left-line text-blue-900 text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>

          <button
            onClick={nextDeal}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <i className="ri-arrow-right-line text-blue-900 text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {deals.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDeal(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentDeal ? 'bg-red-600' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
