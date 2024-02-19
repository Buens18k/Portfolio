import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuIconProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuIcon = ({ isMenuOpen, toggleMenu }: MenuIconProps) => {
  return (
    <button className="text-4xl md:hidden" onClick={toggleMenu} aria-label="Toggle Menu" type="button">
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default MenuIcon;
