
'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DistanceCalculator from '@/components/DistanceCalculator';
import Destinations from '@/components/Destinations';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DealsCarousel from '@/components/DealsCarousel';
import CurrencyConverter from '@/components/CurrencyConverter';
import WeatherWidget from '@/components/WeatherWidget';
import ItineraryBuilder from '@/components/ItineraryBuilder';
import TravelPersonalityQuiz from '@/components/TravelPersonalityQuiz';
import EcoTravelCalculator from '@/components/EcoTravelCalculator';
import InteractiveNepalMap from '@/components/InteractiveNepalMap';
import LiveChatWidget from '@/components/LiveChatWidget';
import SeasonalTravelPlanner from '@/components/SeasonalTravelPlanner';
import CulturalImmersionHub from '@/components/CulturalImmersionHub';
import TravelerStoriesGallery from '@/components/TravelerStoriesGallery';
import VirtualTourPreviews from '@/components/VirtualTourPreviews';
import LocalGuideSpotlight from '@/components/LocalGuideSpotlight';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <DistanceCalculator />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        <div className="lg:col-span-2">
          <Destinations />
        </div>
        <div className="space-y-6">
          <TravelPersonalityQuiz />
          <EcoTravelCalculator />
          <CurrencyConverter />
          <WeatherWidget />
          <SeasonalTravelPlanner />
          <ItineraryBuilder />
        </div>
      </div>
      <InteractiveNepalMap />
      <DealsCarousel />
      <VirtualTourPreviews />
      <CulturalImmersionHub />
      <TravelerStoriesGallery />
      <LocalGuideSpotlight />
      <Reviews />
      <Contact />
      <Footer />
      <LiveChatWidget />
    </div>
  );
}
