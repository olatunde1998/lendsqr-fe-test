import Customers from "components/sideBar/Customers";
import Businesses from "components/sideBar/Businesses";
import Settings from "components/sideBar/Settings";
import SwitchOrganization from "components/sideBar/SwitchOrganization";
import Dashboard from "components/sideBar/Dashboard";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import "components/sideBar/stylesSideBar.scss";


const SideBar = ({ logout, version }) => {
  return (
    <div className="sideBar-wrapper">
      <Link to="/">
        <div className="brand-logo-sidebar">
          <div className="union-logo">
            <img src="assets/img/Union.png" alt="" />
          </div>
          <div className="lendsqr-logo">
            <img src="assets/img/lendsqr.png" alt="" />
          </div>
        </div>
      </Link>
      <SwitchOrganization />
      <Dashboard />
      <Customers />
      <Businesses />
      <Settings />
      <div className="logout-version">
        <Link to="/" style={{textDecoration: "none", color: "rgba(33, 63, 125, 1)"}}><div className="logout"><BsBoxArrowRight style={{marginRight: "10px"}}/>{logout}</div></Link>
        <div className="version">{version}</div>
      </div>
    </div>
  );
};

export default SideBar;
