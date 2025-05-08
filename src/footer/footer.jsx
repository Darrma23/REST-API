import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      <p>
        &copy; 2025 DANA'P Scraper |{' '}
        <a
          href="https://github.com/DanaPutra133"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          GitHub Profile
        </a>
      </p>
    </footer>
  );
}
