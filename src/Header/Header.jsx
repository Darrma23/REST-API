import React, { useEffect, useState } from 'react';

export default function Header() {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setClock(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-blue-500 text-white text-center py-4">
      <h1 className="text-2xl font-bold">DANA'P Scraper API Documentation</h1>
      <div className="text-sm font-normal mt-1">{new Date().toLocaleDateString()} - {clock}</div>
    </header>
  );
}
