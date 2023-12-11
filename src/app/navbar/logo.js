import Image from 'next/image';
import paramedis from './logo.png';
import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <div>
      <Link href="/" className="flex justify-start items-center cursor-pointer">
        <Image
          src={paramedis}
          alt="logo"
          style={{ maxWidth: '50px', height: '50px' }}
        />
        <h1 className="text-4xl font-extrabold text-gray-600">
          MEDI<span className="text-cyan-500">san</span>
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
