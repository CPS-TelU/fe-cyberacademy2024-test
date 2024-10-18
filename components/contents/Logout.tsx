"use client";
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Logout: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove the token from cookies
    Cookies.remove('token');
    // Redirect to the login page
    router.push('/login');
  }, [router]);

  return null; // Optionally render a loading state or nothing
};

export default Logout;
