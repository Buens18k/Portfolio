'use client';
import { useState } from 'react';
import Logo from './logo';
import MenuIcon from './menuIcon';
import MenuItems from './menuItems';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-3 lg:p-10">
      <nav className=" md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Logo src="LogoDiams.webp" alt="Logo Diamant Buens" className="w-20 lg:w-28" width={500} height={500} />
          <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuItems isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}

export default Header;
