// 'use client' dit à NextJS que ce composant modulaire est un composant qui doit être rendu côté interface client et non server.
'use client';
import { useState } from 'react';
import Logo from './logo';
import MenuIcon from './menuIcon';
import MenuItems from './menuItems';

function Header() {
  // Utilise le hook 'useState' de React
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Création d'une constante pour mettre à jour le statut de la variable 'isMenuOpen' en utilisant la fonction 'setIsMenuOpen'
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(!isMenuOpen);
  };

  return (
    <header className=" text-test">
      <nav className="p-5 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          {/* Utilisation du composant réutilisable 'Logo' et de ces props typés */}
          <Logo src="LogoDiams.webp" alt="Logo Diamant Buens" className="w-20" priority={true} width={64} height={64} />
          {/* Utilisation du composant 'MenuIcon' et de ces props définit dans une interface*/}
          <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        {/* Utilisation du composant 'MenuItems' et ces props */}
        <MenuItems isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}

export default Header;
