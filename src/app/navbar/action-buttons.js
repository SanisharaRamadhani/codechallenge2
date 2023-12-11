'use client';

import React from 'react';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

function ActionButtons() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center">
      <div className="hidden lg:inline-flex">
        <Link href={'./registration'}>
          <button className="w-28 h-14 bg-white opacity-70 text-black text-sm font-semibold rounded-2xl hover:bg-cyan-300 hover:text-white duration-300">
            LOGIN
          </button>
        </Link>
      </div>
      <div onClick={handleNav} className="inline-flex lg:hidden">
        <FiMenu className="text-3xl text-white font-bold hover:text-black cursor-pointer" />
      </div>
      <div
        className={
          menuOpen
            ? 'fixed right-0 top-0 w-[250px] h-screen bg-white p-10 ease-in duration-500'
            : 'fixed right-[-250px] top-0 h-screen p-10 ease-in duration-500'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cusrsor-pointer">
            <AiOutlineClose
              size={25}
              className="hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <ul>
            <Link href="/home">
              <li className="pb-5">
                <a className="text-black hover:text-teal-400 px-5 py-5 text-center text-md font-semibold">
                  Home
                </a>
              </li>
            </Link>
            <Link href="/consultation">
              <li className="pb-5">
                <a className="text-black hover:text-teal-400 px-5 text-center text-md font-semibold">
                  Consultation
                </a>
              </li>
            </Link>
            <Link href="/aboutus">
              <li className="pb-5">
                <a className="text-black hover:text-teal-400 px-5 text-center text-md font-semibold">
                  About Us
                </a>
              </li>
            </Link>
            <Link href="/contactus">
              <li className="pb-5">
                <a className="text-black hover:text-teal-400 px-5 text-center text-md font-semibold">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActionButtons;
