import UsersRate from 'components/dashboardComponent/mainContent/UsersRate';
import UsersInfo from 'components/dashboardComponent/mainContent/UsersInfo';
import "components/dashboardComponent/mainContent/stylesContent.scss";


const Content = () => {
  return (
    <div className='content-wrapper'>
      <p style={{fontWeight: "600", fontSize:"24px"}}>Users</p>
      <UsersRate/>
      <div className='content-userdetail-wrapper'>
      <UsersInfo/>
      </div>
    </div>
  )
}

export default Content;