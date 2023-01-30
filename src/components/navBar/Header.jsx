import { HiOutlineSearch } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="search-wrapper">
        <input className="input-element" type="text" placeholder="Search for anything" />
        <span className="search-icon">
          <HiOutlineSearch />
        </span>
      </div>
      <div className="docs-avatar">
        <div className="docs-bell">
          <p className="docs">Docs</p>
          <div className="bell">
          <FiBell />
          </div>
        </div>
        <div className="avatar-wrapper">
          <img className="avatar-img" src="assets/img/avatar-img.png" alt="" />
        </div>
        <div className="user-name-dropdown">
          <p className="ayodeji">Ayodeji</p>
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
