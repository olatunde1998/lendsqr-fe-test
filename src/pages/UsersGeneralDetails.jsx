import Content from 'components/usersGeneralDetails/mainContent/Content';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "components/navBar/stylesHeader.css";
import "components/sideBar/stylesSideBar.css";
import "pages/stylesUsersGenDetails.css";

const UsersGeneralDetails = () => {
  return (
    <div className="dashboard-wrapper">
      <div>
        <SideBar logout="logout" version="v.1.2.0"/>
      </div>
      <div className="header-content">
        <Header />
        <Content/>
      </div>
    </div>
  );
}

export default UsersGeneralDetails