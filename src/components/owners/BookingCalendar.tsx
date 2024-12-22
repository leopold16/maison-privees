import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export function BookingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-4xl text-green-950">
              Réservation de Séjours
            </h2>
            <div className="flex items-center space-x-4">
              <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-lg font-medium">
                {MONTHS[currentMonth]} {currentYear}
              </span>
              <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                <div key={day} className="bg-gray-50 p-4 text-center font-medium">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {Array.from({ length: 35 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-white p-4 min-h-[100px] hover:bg-gray-50 cursor-pointer"
                >
                  <span className="text-gray-400">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-barnes-green/20 rounded-full mr-2"></div>
                <span className="text-gray-600">Disponible</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-barnes-green rounded-full mr-2"></div>
                <span className="text-gray-600">Réservé</span>
              </div>
            </div>
            <button className="btn-primary">
              Réserver un séjour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}