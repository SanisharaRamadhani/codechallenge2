import Image from 'next/image';
import Navbar from './navbar/page';
import Herosection from './homepage/page';
import Consultation from './consultation/page';
import Footer from './footer/page';
import Registration from './registration/page';

export default function Home() {
  return (
    <div>
      <Herosection />
    </div>
  );
}
