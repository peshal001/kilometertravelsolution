
'use client';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.6), rgba(239, 68, 68, 0.4)), url('https://readdy.ai/api/search-image?query=Majestic%20snow-capped%20Himalayan%20mountains%20in%20Nepal%20with%20dramatic%20peaks%20piercing%20through%20clouds%2C%20golden%20sunrise%20lighting%2C%20pristine%20mountain%20landscape%2C%20crystal%20clear%20blue%20sky%2C%20professional%20travel%20photography%2C%20inspiring%20adventure%20destination%2C%20panoramic%20mountain%20vista%2C%20serene%20alpine%20environment%2C%20perfect%20for%20travel%20brochure&width=1920&height=1080&seq=hero-himalayas&orientation=landscape')`
             }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-red-600/50"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-left text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Nepal's 
              <span className="text-red-400"> Wonders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We Provide Best Travel Services for your ease.
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-2xl">
              From international flights to local adventures, visa services to luxury hotels - your complete travel solution in the heart of Kathmandu.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
