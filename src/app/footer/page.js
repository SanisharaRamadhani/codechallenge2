import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-600 font-bold text-3xl pb-6">
              MEDI<span className="text-teal-800">san</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link href="https://www.instagram.com/">
                <FaInstagram className="text-2xl cursor-pointer hover:text-orange-600" />
              </Link>
              <Link href="https://twitter.com/">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.youtube.com/">
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Home</p>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Lorem Ipsum
              </li>
            </Link>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                24 Hours Service
              </li>
            </Link>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Qualified Doctor
              </li>
            </Link>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Emergency Care
              </li>
            </Link>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Operation Theater
              </li>
            </Link>
            <Link href="/">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Lorem Ipsum
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <Link href="/consultation">
              <p className="text-gray-800 font-bold text-2xl pb-4">
                Consultation
              </p>
            </Link>
            <Link href="/consultation">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Dr. Patrick Cortez
              </li>
            </Link>
            <Link href="/consultation">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Dr. Patrick Cortez
              </li>
            </Link>
            <Link href="/consultation">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Dr. Patrick Cortez
              </li>
            </Link>
            <Link href="/consultation">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Dr. Patrick Cortez
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023{' '}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            MEDIsan
          </span>
          . All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
