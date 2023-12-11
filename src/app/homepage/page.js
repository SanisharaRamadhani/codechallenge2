import React from 'react';
import Image from 'next/image';
import paramedis from './logo.png';
import hours from './24hours.png';
import doctor from './doctor.png';
import ambulance from './ambulance.png';
import operation from './operation.png';
import rawat from './rawat-inap.avif';
import Link from 'next/link';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

function Herosection() {
  return (
    <div>
      <Navbar />
      <div className="mt-40 md:mt-40 md:mb-40 mb-0 flex md:flex-row flex-col h-[800px] md:h-[400px]">
        <div className="ml-20 md:ml-40 md:w-[700px] w-[300px]">
          <h1 className="md:text-4xl text-xl mb-5 mt-20 font-bold text-left text-gray-900">
            Lorem Ipsum.
          </h1>
          <p className="md:text-lg text-sm mb-5 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-start">
            <Link href="/">
              <button className="w-20 h-16 text-sm md:w-48 md:h-10 mx-10 bg-black opacity-30 text-white md:text-md font-bold rounded-2xl hover:bg-cyan-300 hover:text-black duration-300">
                See More
              </button>
            </Link>
            <Link href="/consultation">
              <button className="w-22 h-16 text-sm md:w-48 md:h-10 mx-10 bg-black opacity-30 text-white md:text-md font-bold rounded-2xl hover:bg-cyan-300 hover:text-black duration-300">
                Make an Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex-row hidden lg:inline-flex">
          <div className=" w-[250px] h-[500px] bg-blue-500 rounded-3xl absolute top-[125px] right-[200px]"></div>
          <div className=" w-[240px] h-[480px] bg-white rounded-3xl absolute top-[135px] right-[205px]"></div>
          <div className=" w-[150px] h-[10px] bg-blue-500 rounded-3xl absolute top-[130px] right-[245px]"></div>
          <div className="absolute top-[130px] right-[195px]">
            <Image src={paramedis} alt="logo mobile" />
            <h3 className="text-4xl font-extrabold text-gray-600 text-center">
              MEDI<span className="text-cyan-500">san</span>
            </h3>
          </div>
          <div className="absolute top-[500px] right-[190px] z-0">
            <Link href="/registration">
              <button className="w-48 h-10 mx-10 bg-black opacity-30 text-white text-md font-bold rounded-2xl hover:bg-cyan-300 hover:text-black duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-around items-start p-20 gap-5">
        <Link href="/registration">
          <div className="text-center mx-5 bg-cyan-500 rounded-xl py-10 shadow-2xl hover:bg-white cursor-pointer">
            <div className="flex justify-center">
              <Image
                src={hours}
                alt="hours"
                style={{ maxWidth: '100px', height: '100px' }}
              ></Image>
            </div>
            <h3 className="my-5 font-bold">24 Hours Sevice</h3>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been{' '}
            </p>
          </div>
        </Link>
        <Link href="/consultation">
          <div className="text-center mx-5 bg-cyan-500 rounded-xl py-10 shadow-2xl hover:bg-white cursor-pointer">
            <div className="flex justify-center">
              <Image
                src={doctor}
                alt="doctor"
                style={{ maxWidth: '100px', height: '100px' }}
              ></Image>
            </div>
            <h3 className="my-5 font-bold">Qualified Doctor</h3>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been{' '}
            </p>
          </div>
        </Link>
        <Link href="/registration">
          <div className="text-center mx-5 bg-cyan-500 rounded-xl py-10 shadow-2xl hover:bg-white cursor-pointer">
            <div className="flex justify-center">
              <Image
                src={ambulance}
                alt="ambulance"
                style={{ maxWidth: '100px', height: '100px' }}
              ></Image>
            </div>
            <h3 className="my-5 font-bold">Emergency Care</h3>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been{' '}
            </p>
          </div>
        </Link>
        <Link href="/registration">
          <div className="text-center mx-5 bg-cyan-500 rounded-xl py-10 shadow-2xl hover:bg-white cursor-pointer">
            <div className="flex justify-center">
              <Image
                src={operation}
                alt="operation"
                style={{ maxWidth: '100px', height: '100px' }}
              ></Image>
            </div>
            <h3 className="my-5 font-bold">Operation Theater</h3>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been{' '}
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-20 mb-20 flex md:flex-row flex-col">
        <div className="ml-20 md:ml-40 md:w-[600px] w-[300px]">
          <h1 className="md:text-4xl text-xl mb-5 mt-20 font-bold text-left text-gray-900">
            Lorem Ipsum.
          </h1>
          <p className="md:text-lg text-sm mb-5 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <button className="w-20 h-16 text-sm md:w-48 md:h-10 mx-10 bg-black opacity-30 text-white md:text-md font-bold rounded-2xl hover:bg-cyan-300 hover:text-black duration-300">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="m-10 hidden md:inline-block">
          <Image
            src={rawat}
            alt="rawat"
            style={{ maxWidth: '700px', height: '450px' }}
          ></Image>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Herosection;
