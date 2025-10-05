
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-flight-takeoff-line',
      title: 'International Air Tickets',
      description: 'Book flights worldwide with competitive prices and flexible booking options.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'ri-map-2-line',
      title: 'Holiday Packages',
      description: 'Curated travel experiences for domestic and international destinations.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: 'ri-passport-line',
      title: 'Visa Services',
      description: 'Complete visa assistance and documentation support for all countries.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'ri-hotel-line',
      title: 'Hotel Booking',
      description: 'Premium accommodations from budget stays to luxury resorts.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: 'ri-car-line',
      title: 'Transportation',
      description: 'Airport transfers, car rentals, and local transportation services.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Round-the-clock customer service for all your travel needs.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete travel solutions tailored to your needs - from flight bookings to visa assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
