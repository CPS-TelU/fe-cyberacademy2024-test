"use client";
import React, { useState } from 'react';
import { poppins } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; // Import js-cookie

const LoginPage: React.FC = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const LOGIN_API_URL = `${API_BASE_URL}/auth/login`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Log form data before submitting
    console.log("Submitting login with:", { nim, password });

    try {
      const response = await fetch(LOGIN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nim, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login error:", errorData);
        throw new Error('Login failed. Please check your credentials.');
      }
      const data = await response.json();
      Cookies.set('token', data.token, { expires: 7 }); // expires in 7 days
      router.push('/lms');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error("Caught error:", errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative min-h-screen w-full bg-[#ffffff] flex items-center justify-center p-4 ${poppins.className}`}>
      <Link href="/">
        <button
          aria-label="Go back"
          className="absolute top-12 left-4 sm:left-72 flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full z-10 transform hover:scale-105 hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </Link>

      <div className="flex flex-col items-center w-full max-w-2xl">
        <Image
          src="/LogoAbout.png"
          alt="Logo"
          width={800}
          height={800}
          className="w-48 sm:w-64 mx-auto mb-4 mt-1"
        />

        <div className="relative w-full bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-16 mt-4 border border-gray-100 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="nim" className="block text-gray-700 font-bold">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                placeholder="Enter your NIM here"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
            {error && <div className="mb-4 text-red-600" aria-live="assertive">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-6 text-white bg-gradient-to-r from-[#BA2025] to-[#133042] rounded-[12px] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#A31C21] hover:to-[#0F2A3C]'} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-300`}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
