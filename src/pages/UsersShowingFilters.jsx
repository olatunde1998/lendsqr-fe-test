import Content from 'components/usersShowingFilterComponent/mainContent/Content';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "pages/stylesUserShowingFilters.scss";

const UsersShowingFilters = () => {
  return (
    <div className="dashboard-wrapper">
      <div>
        <SideBar />
      </div>
      <div className="header-content">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default UsersShowingFilters