import BlankPage from 'components/blankPage/BlankPage';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "pages/stylesDashboard.scss";

const Organization = () => {
    return (
        <div className="dashboard-wrapper">
          <div>
            <SideBar/>
          </div>
          <div className="header-content">
            <Header />
           <BlankPage blankInfo="welcome to Organization page"/>
          </div>
        </div>
      );
}

export default Organization;