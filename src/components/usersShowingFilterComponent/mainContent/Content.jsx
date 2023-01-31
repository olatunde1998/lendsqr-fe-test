import UsersRate from 'components/usersShowingFilterComponent/mainContent/UsersRate';
import UsersInfo from 'components/usersShowingFilterComponent/mainContent/UsersInfo';
import "components/usersShowingFilterComponent/mainContent/stylesContent.scss";



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