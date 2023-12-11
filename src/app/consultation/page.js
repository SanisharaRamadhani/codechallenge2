'use client';

import React from 'react';
import Image from 'next/image';
import Doctor from './doctor.jpg';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

function Consultation() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center ">
        <div className="md:mb-40 mb-20 mt-40 md:w-[800px] w-[400px] text-center">
          <h1 className="md:text-6xl text-xl font-bold my-5">
            Our Expert Team
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div>
        <div className="w-full flex md:flex-row flex-col justify-around items-start p-20 gap-5">
          <div className="text-center">
            <div className="text-center mx-5 bg-cyan-500 rounded-xl shadow-2xl hover:bg-white cursor-pointer">
              <Image
                src={Doctor}
                alt="Doctor"
                style={{ maxWidth: '200px' }}
              ></Image>
            </div>
            <h1 className="font-bold">Patrick Cortez</h1>
            <h3 className="text-cyan-500 font-semibold">Doctor</h3>
            <div className="flex gap-6 pb-5 justify-center">
              <Link href="https://www.facebook.com/">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.google.com/">
                <FaGoogle className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-center mx-5 bg-cyan-500 rounded-xl shadow-2xl hover:bg-white cursor-pointer">
              <Image
                src={Doctor}
                alt="Doctor"
                style={{ maxWidth: '200px' }}
              ></Image>
            </div>
            <h1 className="font-bold">Patrick Cortez</h1>
            <h3 className="text-cyan-500 font-semibold">Doctor</h3>
            <div className="flex gap-6 pb-5 justify-center">
              <Link href="https://www.facebook.com/">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.google.com/">
                <FaGoogle className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-center mx-5 bg-cyan-500 rounded-xl shadow-2xl hover:bg-white cursor-pointer">
              <Image
                src={Doctor}
                alt="Doctor"
                style={{ maxWidth: '200px' }}
              ></Image>
            </div>
            <h1 className="font-bold">Patrick Cortez</h1>
            <h3 className="text-cyan-500 font-semibold">Doctor</h3>
            <div className="flex gap-6 pb-5 justify-center">
              <Link href="https://www.facebook.com/">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.google.com/">
                <FaGoogle className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-center mx-5 bg-cyan-500 rounded-xl shadow-2xl hover:bg-white cursor-pointer">
              <Image
                src={Doctor}
                alt="Doctor"
                style={{ maxWidth: '200px' }}
              ></Image>
            </div>
            <h1 className="font-bold">Patrick Cortez</h1>
            <h3 className="text-cyan-500 font-semibold">Doctor</h3>
            <div className="flex gap-6 pb-5 justify-center">
              <Link href="https://www.facebook.com/">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.google.com/">
                <FaGoogle className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-cyan-500 md:w-[600px] px-10 w-[200px] md:text-4xl text-lg font-bold text-center">
          Make An Appointment
        </div>
      </div>
      <div>
        <div className="w-full flex md:flex-row flex-col justify-center ">
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex md:flex-row flex-col justify-center">
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Departement
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex md:flex-row flex-col justify-center">
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Additional Information
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="text-left md:w-[300px] w-[200px] md:mx-40 mx-36 my-5 bg-white text-black rounded-md cursor-text">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Date and Time
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <div className="text-center bg-teal-500 w-[200px] rounded-lg hover:bg-blue-500 cursor-pointer hover:text-white">
          <button>Confirm</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultation;
