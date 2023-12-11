import React from 'react';
import Link from 'next/link';

function NavigationBar() {
  return (
    <div className="hidden lg:inline-flex cursor-pointer">
      <ul className="flex items-center mx-2 text-white">
        <Link href="./">
          <li>
            <a className="text-white hover:text-gray-600 px-5 text-center text-md font-semibold">
              Home
            </a>
          </li>
        </Link>
        <Link href="./consultation">
          <li>
            <a className="text-white hover:text-gray-600 px-5 text-center text-md font-semibold">
              Consultation
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavigationBar;
