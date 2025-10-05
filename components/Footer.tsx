
'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <i className="ri-map-pin-fill text-white text-lg w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>
                  Kilometer Travel
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted travel partner in Nepal, providing complete travel solutions for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Destinations</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Flight Booking</span></li>
              <li><span className="text-gray-300">Holiday Packages</span></li>
              <li><span className="text-gray-300">Visa Services</span></li>
              <li><span className="text-gray-300">Hotel Booking</span></li>
              <li><span className="text-gray-300">Transportation</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-400 mt-1 w-4 h-4 flex items-center justify-center"></i>
                <span className="text-gray-300">02 Lazimpat Rd, Kathmandu 44600</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-red-400 w-4 h-4 flex items-center justify-center"></i>
                <span className="text-gray-300">984-1975006</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-red-400 w-4 h-4 flex items-center justify-center"></i>
                <span className="text-gray-300">Open until 5:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Kilometer Travel Solution. All rights reserved.
          </p>
          <button className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer mt-4 md:mt-0 whitespace-nowrap">
            Suggest an Edit
          </button>
        </div>
      </div>
    </footer>
  );
}
