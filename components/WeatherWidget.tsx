
'use client';

import { useState } from 'react';

export default function WeatherWidget() {
  type City = 'Kathmandu' | 'Pokhara' | 'Chitwan';
  interface ForecastItem { day: string; high: string; low: string; icon: string }
  interface CityWeather {
    temperature: string;
    condition: string;
    humidity: string;
    windSpeed: string;
    icon: string;
    forecast: ForecastItem[];
  }

  const [selectedCity, setSelectedCity] = useState<City>('Kathmandu');

  const weatherData: Record<City, CityWeather> = {
    'Kathmandu': {
      temperature: '22°C',
      condition: 'Partly Cloudy',
      humidity: '65%',
      windSpeed: '8 km/h',
      icon: 'ri-cloudy-line',
      forecast: [
        { day: 'Today', high: '24°', low: '18°', icon: 'ri-cloudy-line' },
        { day: 'Tomorrow', high: '26°', low: '20°', icon: 'ri-sun-line' },
        { day: 'Wed', high: '23°', low: '17°', icon: 'ri-rainy-line' }
      ]
    },
    'Pokhara': {
      temperature: '25°C',
      condition: 'Sunny',
      humidity: '58%',
      windSpeed: '12 km/h',
      icon: 'ri-sun-line',
      forecast: [
        { day: 'Today', high: '27°', low: '21°', icon: 'ri-sun-line' },
        { day: 'Tomorrow', high: '28°', low: '22°', icon: 'ri-sun-line' },
        { day: 'Wed', high: '26°', low: '20°', icon: 'ri-cloudy-line' }
      ]
    },
    'Chitwan': {
      temperature: '28°C',
      condition: 'Hot',
      humidity: '72%',
      windSpeed: '6 km/h',
      icon: 'ri-sun-fill',
      forecast: [
        { day: 'Today', high: '30°', low: '24°', icon: 'ri-sun-fill' },
        { day: 'Tomorrow', high: '32°', low: '26°', icon: 'ri-sun-fill' },
        { day: 'Wed', high: '29°', low: '23°', icon: 'ri-thunderstorms-line' }
      ]
    }
  };

  const currentWeather = weatherData[selectedCity];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
        <i className="ri-sun-line text-yellow-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
        Weather Forecast
      </h3>
      
      <div className="space-y-4">
        <div className="relative">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value as City)}
            className="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Chitwan">Chitwan</option>
          </select>
          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-900">{selectedCity}</h4>
              <p className="text-gray-600">{currentWeather.condition}</p>
            </div>
            <div className="text-right">
              <i className={`${currentWeather.icon} text-3xl text-blue-600 w-8 h-8 flex items-center justify-center`}></i>
              <p className="text-2xl font-bold text-blue-900">{currentWeather.temperature}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <i className="ri-drop-line text-blue-500 mr-2 w-4 h-4 flex items-center justify-center"></i>
              <span className="text-gray-600">Humidity: {currentWeather.humidity}</span>
            </div>
            <div className="flex items-center">
              <i className="ri-windy-line text-gray-500 mr-2 w-4 h-4 flex items-center justify-center"></i>
              <span className="text-gray-600">Wind: {currentWeather.windSpeed}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">3-Day Forecast</h4>
          <div className="space-y-2">
            {currentWeather.forecast.map((day: ForecastItem, index: number) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-sm text-gray-600">{day.day}</span>
                <div className="flex items-center space-x-2">
                  <i className={`${day.icon} text-blue-600 w-4 h-4 flex items-center justify-center`}></i>
                  <span className="text-sm font-medium">{day.high}</span>
                  <span className="text-sm text-gray-500">{day.low}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
