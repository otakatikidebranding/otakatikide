import React from 'react';
import { AnnouncementCard } from './components/AnnouncementCard.tsx';

export default function App() {
  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-[#120820] text-slate-100 flex flex-col items-center justify-center p-3 sm:p-6 lg:p-8 selection:bg-purple-700 selection:text-white"
    >
      {/* Main Responsive Container */}
      <main
        id="main-stage"
        className="w-full flex items-center justify-center"
      >
        <div className="relative w-full max-w-[430px]">
          {/* Subtle ambient lighting */}
          <div
            className="hidden sm:block absolute -inset-2 bg-gradient-to-r from-purple-800/25 via-indigo-700/20 to-purple-900/25 rounded-[44px] blur-xl opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <div
            id="card-wrapper"
            className="relative w-full sm:rounded-[42px] sm:p-2 sm:bg-[#1B0B2E] sm:ring-1 sm:ring-purple-900/50 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
          >
            <AnnouncementCard />
          </div>
        </div>
      </main>
    </div>
  );
}
