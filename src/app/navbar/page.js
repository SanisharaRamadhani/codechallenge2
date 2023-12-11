import ActionButtons from './action-buttons';
import Logo from './logo';
import NavigationBar from './navigation';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 mx-auto h-24 px-8 lg:bg-white bg-gradient-to-b from-teal-500 to-white w-full flex justify-between items-center my-0 z-10">
      <Logo></Logo>
      <NavigationBar></NavigationBar>
      <ActionButtons></ActionButtons>
    </div>
  );
}
