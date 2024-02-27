import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

//
const MenuItems: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = ({ isMenuOpen, toggleMenu }) => (
  <ul
    className={`${
      isMenuOpen
        ? 'md:flex md:items-center z-50 top-7 md:z-auto md:static absolute right-5 md:w-auto md:opacity-100 border-solid border-2 border-gray-300 bg-menu rounded-s-lg'
        : 'md:flex md:items-center z-[-1] top-[-400px] md:z-auto md:static absolute opacity-0 right-5 md:w-auto '
    } md:opacity-100 transition-all ease-out duration-700`}
  >
    {isMenuOpen && (
      <li className="md:my-0 cursor-pointer absolute right-1 top-1">
        <button className="text-3xl" onClick={toggleMenu} aria-label="Close menu" type="button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </li>
    )}
    <li className="mx-4 my-5 md:my-0 cursor-pointer">
      <Link href="/#skills" className="text-3xl hover:underline duration-100">
        Skills
      </Link>
    </li>
    <li className="mx-4 my-5 md:my-0 cursor-pointer">
      <Link href="/#projects" className="text-3xl hover:underline duration-100">
        Projects
      </Link>
    </li>
    <li className="mx-4 my-5 md:my-0 cursor-pointer">
      <Link href="/about" className="text-3xl hover:underline duration-100" target="blank">
        About
      </Link>
    </li>
    {/* <li className="mx-4 my-5 md:my-0 cursor-pointer">
      <Link href="" className="text-3xl hover:underline duration-100" target="blank">
        Dev JV
      </Link>
    </li> */}
  </ul>
);

export default MenuItems;
