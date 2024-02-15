import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Création de l'interface pour typer les props du composant 'MenuIcon' (2 props).
interface MenuIconProps {
  // Props
  isMenuOpen: boolean; // Un booléen
  toggleMenu: () => void; // Une fonction qui sera appelé lorsque l'utilisateur clique sur l'icone
}

// Déclaration du composant 'MenuIcon' en utilisant une fonction fléchée accèptant les props typées de 'MenuIconProps'.
const MenuIcon = ({ isMenuOpen, toggleMenu }: MenuIconProps) => {
  return (
    <button className="text-2xl md:hidden" onClick={toggleMenu} aria-label="Toggle Menu" type="button">
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default MenuIcon;
