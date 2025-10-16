
'use client';

import { useState } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NPR');
  const [result, setResult] = useState('');

  type Currency = 'USD' | 'NPR' | 'EUR' | 'GBP';
  type ExchangeRates = {
    [K in Currency]: {
      [J in Currency]?: number;
    };
  };

  const exchangeRates: ExchangeRates = {
    USD: { NPR: 132.50, EUR: 0.85, GBP: 0.73 },
    NPR: { USD: 0.0075, EUR: 0.0064, GBP: 0.0055 },
    EUR: { USD: 1.18, NPR: 156.25, GBP: 0.86 },
    GBP: { USD: 1.37, NPR: 181.25, EUR: 1.16 }
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'NPR', name: 'Nepalese Rupee', symbol: 'रू' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' }
  ];

  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency) {
      if (fromCurrency === toCurrency) {
        setResult(amount);
      } else {
        const rate = exchangeRates[fromCurrency as Currency]?.[toCurrency as Currency];
        if (rate !== undefined) {
          const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
          setResult(convertedAmount);
        } else {
          setResult('N/A');
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
        <i className="ri-exchange-dollar-line text-red-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
        Currency Converter
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter amount"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div className="relative">
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="relative">
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
        >
          Convert
        </button>
        
        {result && (
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-blue-900">
              {amount} {fromCurrency} = {result} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
