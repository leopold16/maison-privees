import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { OwnersHero } from '../components/owners/OwnersHero';
import { BookingCalendar } from '../components/owners/BookingCalendar';
import { RentalManagement } from '../components/owners/RentalManagement';
import { SupportSection } from '../components/owners/SupportSection';

export function OwnersSpacePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <OwnersHero />
        <BookingCalendar />
        <RentalManagement />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}