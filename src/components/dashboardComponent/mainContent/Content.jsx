import UsersRate from 'components/dashboardComponent/mainContent/UsersRate';
import "components/dashboardComponent/mainContent/stylesContent.css";
import UsersInfo from './UsersInfo';


const Content = () => {
  return (
    <div className='content-wrapper'>
      <p>Users</p>
      <UsersRate/>
      <div className='content-userdetail-wrapper'>
      <UsersInfo/>
      </div>
    </div>
  )
}

export default Content;