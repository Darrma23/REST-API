import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../Header/Header';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span>Dark Mode</span>
          </label>
        </div>

        {/* Developer List */}
        <div>
          <p><strong>Nama Putra</strong> - Developer</p>
          <p><strong>Ilham</strong> - Developer</p>
        </div>

        {/* Table */}
        <div>
          <h2 className="text-center font-semibold text-lg mb-4">Tugas & Status (Khusus 2ka14)</h2>
          <table className="w-full text-sm text-left border border-gray-300 shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-2">No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Action</th>
                <th className="p-2">Cek Table</th>
                <th className="p-2">Cek JSON</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="border-t">
                <td className="p-2 text-center">1</td>
                <td className="p-2 text-center">Tugas Mahasiswa</td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/login1" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Tambah Data
                    </Link>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/Tabletugas" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Cek Table
                    </Link>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/try-api" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Try Api
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 text-center">2</td>
                <td className="p-2 text-center">Status Dosen</td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/login2" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Tambah Data
                    </Link>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/Tablestatus" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Cek Table
                    </Link>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/try-api" className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Try Api
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form Saran & Pesan */}
        <div className="mt-8">
          <h3 className="text-center font-medium mb-2">Saran & Pesan</h3>
          <form className="space-y-4">
            <div>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tulis pesan atau saran Anda di sini..."
                rows="4"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Nama Anda"
              />
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
