'use client';

import { useState } from 'react';

export default function TravelPersonalityQuiz() {
  type Personality = 'adventure' | 'relaxation' | 'cultural' | 'spiritual';
  interface Destination {
    name: string;
    description: string;
    image: string;
    highlights: string[];
  }
  interface Option { text: string; value: Personality }
  interface Question { question: string; options: Option[] }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Personality>>({});
  const [result, setResult] = useState<Destination | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const questions: Question[] = [
    {
      question: "What's your ideal vacation pace?",
      options: [
        { text: "Fast-paced adventures", value: "adventure" },
        { text: "Relaxed and peaceful", value: "relaxation" },
        { text: "Mix of both", value: "cultural" },
        { text: "Spiritual and mindful", value: "spiritual" }
      ]
    },
    {
      question: "Which activity excites you most?",
      options: [
        { text: "Mountain trekking", value: "adventure" },
        { text: "Lakeside relaxation", value: "relaxation" },
        { text: "Temple visits", value: "spiritual" },
        { text: "Local market exploration", value: "cultural" }
      ]
    },
    {
      question: "How do you prefer to travel?",
      options: [
        { text: "Solo backpacking", value: "adventure" },
        { text: "Luxury resort stays", value: "relaxation" },
        { text: "Cultural group tours", value: "cultural" },
        { text: "Meditation retreats", value: "spiritual" }
      ]
    },
    {
      question: "What's your ideal accommodation?",
      options: [
        { text: "Mountain lodge", value: "adventure" },
        { text: "Lakeside resort", value: "relaxation" },
        { text: "Heritage hotel", value: "cultural" },
        { text: "Monastery guesthouse", value: "spiritual" }
      ]
    }
  ];

  const destinations: Record<Personality, Destination> = {
    adventure: {
      name: "Everest Base Camp Trek",
      description: "Perfect for thrill-seekers! Experience the ultimate mountain adventure with breathtaking views and challenging trails.",
      image: "https://readdy.ai/api/search-image?query=Everest%20Base%20Camp%20adventure%20trekking%20with%20mountain%20peaks%2C%20challenging%20hiking%20trails%2C%20adventure%20seekers%2C%20Nepal%20Himalayas%20expedition%2C%20mountaineering%20equipment%2C%20high%20altitude%20adventure%2C%20extreme%20sports%20tourism&width=400&height=300&seq=quiz-everest&orientation=landscape",
      highlights: ["14-day trek", "Sherpa culture", "Mountain views"]
    },
    relaxation: {
      name: "Pokhara Lakeside Retreat",
      description: "Ideal for peaceful souls! Enjoy serene lake views, spa treatments, and gentle boat rides in Nepal's most beautiful valley.",
      image: "https://readdy.ai/api/search-image?query=Pokhara%20peaceful%20lakeside%20resort%20with%20mountain%20reflections%2C%20relaxing%20spa%20treatments%2C%20serene%20boat%20rides%2C%20tranquil%20vacation%20destination%2C%20luxury%20wellness%20retreat%2C%20peaceful%20mountain%20lake%20scenery&width=400&height=300&seq=quiz-pokhara&orientation=landscape",
      highlights: ["Spa treatments", "Boat rides", "Mountain views"]
    },
    cultural: {
      name: "Kathmandu Cultural Tour",
      description: "Great for culture enthusiasts! Explore ancient temples, traditional crafts, and vibrant local markets in Nepal's historic capital.",
      image: "https://readdy.ai/api/search-image?query=Kathmandu%20cultural%20heritage%20tour%20with%20ancient%20temples%2C%20traditional%20Nepali%20architecture%2C%20vibrant%20local%20markets%2C%20cultural%20tourism%2C%20historical%20monuments%2C%20UNESCO%20world%20heritage%20sites%2C%20authentic%20cultural%20experience&width=400&height=300&seq=quiz-kathmandu&orientation=landscape",
      highlights: ["Ancient temples", "Local markets", "Traditional crafts"]
    },
    spiritual: {
      name: "Lumbini Spiritual Journey",
      description: "Perfect for spiritual seekers! Visit the birthplace of Buddha and experience peace through meditation and temple visits.",
      image: "https://readdy.ai/api/search-image?query=Lumbini%20spiritual%20meditation%20garden%20with%20Buddha%20statue%2C%20peaceful%20monastery%20complex%2C%20meditation%20practitioners%2C%20spiritual%20pilgrimage%20site%2C%20Buddhist%20temples%2C%20serene%20spiritual%20atmosphere%2C%20religious%20tourism&width=400&height=300&seq=quiz-lumbini&orientation=landscape",
      highlights: ["Buddha's birthplace", "Meditation", "Peace gardens"]
    }
  };

  const handleAnswer = (value: Personality) => {
    const newAnswers: Record<number, Personality> = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, Personality>) => {
    const counts: Record<Personality, number> = { adventure: 0, relaxation: 0, cultural: 0, spiritual: 0 };
    Object.values(finalAnswers).forEach((answer: Personality) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    
    const topChoice = (Object.keys(counts) as Personality[]).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(destinations[topChoice]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowQuiz(true);
  };

  if (!showQuiz && !result) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-questionnaire-line text-3xl text-blue-600 w-10 h-10 flex items-center justify-center"></i>
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Find Your Nepal Adventure</h3>
        <p className="text-gray-600 mb-6">Discover your perfect travel style and get personalized destination recommendations</p>
        <button
          onClick={() => setShowQuiz(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-trophy-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Your Perfect Match!</h3>
        </div>
        
        <div className="mb-6">
          <img 
            src={result.image} 
            alt={result.name}
            className="w-full h-48 object-cover object-top rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold text-blue-900 mb-3">{result.name}</h4>
          <p className="text-gray-600 mb-4">{result.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {result.highlights.map((highlight, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Book Now
          </button>
          <button
            onClick={resetQuiz}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-blue-900">Travel Personality Quiz</h3>
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-4">
          {questions[currentQuestion].question}
        </h4>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}