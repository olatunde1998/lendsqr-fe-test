import BlankPage from 'components/blankPage/BlankPage';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "pages/stylesDashboard.scss";

const AuditLogs = () => {
    return (
        <div className="dashboard-wrapper">
          <div>
            <SideBar/>
          </div>
          <div className="header-content">
            <Header />
           <BlankPage blankInfo="welcome to Audit Logs page"/>
          </div>
        </div>
      );
}

export default AuditLogs;