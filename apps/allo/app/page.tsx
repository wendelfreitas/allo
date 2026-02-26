'use client';

import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { CartDrawer } from '../components/layout/CartDrawer/CartDrawer';
import { HeroSection } from '../components/home/HeroSection/HeroSection';
import { CategoryCarousel } from '../components/home/CategoryCarousel/CategoryCarousel';
import { FeaturedRestaurants } from '../components/home/FeaturedRestaurants/FeaturedRestaurants';
import { PromoBanners } from '../components/home/PromoBanners/PromoBanners';
import { MetricsSection } from '../components/home/MetricsSection/MetricsSection';
import { HowItWorks } from '../components/home/HowItWorks/HowItWorks';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoryCarousel />
        <FeaturedRestaurants />
        <PromoBanners />
        <MetricsSection />
        <HowItWorks />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
