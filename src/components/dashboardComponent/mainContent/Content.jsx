import UsersRate from 'components/dashboardComponent/mainContent/UsersRate';
import UsersInfo from 'components/dashboardComponent/mainContent/UsersInfo';
import "components/dashboardComponent/mainContent/stylesContent.scss";


const Content = () => {
  return (
    <div>
      <p style={{fontWeight: "600", fontSize:"24px",paddingLeft:"10px", marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}}>Users</p>
      <UsersRate/>
      <div className='content-userdetail-wrapper'>
      <UsersInfo/>
      </div>
    </div>
  )
}

export default Content;