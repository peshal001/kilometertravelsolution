'use client';

import { useState } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help you with your travel plans. How can I assist you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    { text: 'Visa requirements', response: 'We provide visa services for all countries. Tourist visas typically take 5-7 business days. Would you like to know about a specific country?' },
    { text: 'Flight booking', response: 'We offer competitive flight booking for both domestic and international destinations. Our team can help you find the best deals. Which destination are you interested in?' },
    { text: 'Tour packages', response: 'We have exciting tour packages for Pokhara, Chitwan, Everest Base Camp, and more. Packages include accommodation, meals, and guided tours. Which package interests you?' },
    { text: 'Hotel booking', response: 'We can arrange accommodations from budget hotels to luxury resorts across Nepal. What type of accommodation are you looking for?' },
    { text: 'Trekking permits', response: 'We handle all trekking permits including TIMS cards and national park permits. Which trek are you planning?' }
  ];

  interface QuickReply {
    text: string;
    response: string;
  }

  const handleQuickReply = (reply: QuickReply) => {
    setMessages([...messages, 
      { type: 'user', text: reply.text },
      { type: 'bot', text: reply.response }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    const newMessages = [...messages, { type: 'user', text: inputText }];
    
    setTimeout(() => {
      setMessages([...newMessages, {
        type: 'bot',
        text: 'Thank you for your message! Our travel experts will get back to you shortly. For immediate assistance, please call us at 984-1975006 or visit our office at Lazimpat Rd, Kathmandu.'
      }]);
    }, 1000);
    
    setInputText('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mb-4 border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-customer-service-line text-white w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Travel Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 p-1 rounded cursor-pointer"
              >
                <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col h-80">
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs hover:bg-blue-100 transition-colors cursor-pointer"
                      >
                        {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-3 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <i className={`${isOpen ? 'ri-close-line' : 'ri-chat-smile-line'} text-xl w-6 h-6 flex items-center justify-center`}></i>
      </button>
    </div>
  );
}