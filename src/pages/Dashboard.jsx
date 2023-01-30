import Content from 'components/dashboardComponent/mainContent/Content';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "components/navBar/stylesHeader.css";
import "components/sideBar/stylesSideBar.css";
import "pages/stylesDashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
          <div>
            <SideBar/>
          </div>
          <div className="header-content">
            <Header />
            <Content />
          </div>
        </div>
      );
}

export default Dashboard