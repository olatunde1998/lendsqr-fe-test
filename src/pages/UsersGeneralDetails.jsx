import Content from 'components/usersGeneralDetails/mainContent/Content';
import Header from 'components/navBar/Header';
import SideBar from 'components/sideBar/SideBar';
import "pages/stylesUsersGenDetails.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIRequest } from 'utils/APIRequest';
import { getFromLocalStorage, saveToLocalStorage, isObjectEmpty } from 'utils/utils';
import Spinner from 'components/spinner';

const UsersGeneralDetails = () => {
  const {id} = useParams()
  const currentUser = JSON.parse(getFromLocalStorage("currentUser"))
  const initialState = !!currentUser ? currentUser: {}
  const [user, setUser] = useState(initialState)

  useEffect(() => {
     async function getUser (id) {
      try {
        if (!!currentUser && currentUser.id === id){
          return
        }
        const {data} = await APIRequest.get(`/users/${id}`)
        saveToLocalStorage("currentUser", data)
        setUser(data)
        return data
      } catch (error) {
        console.log(error, "An error occurred");
      }
    }
    getUser(id)
  }, [currentUser, id])

  return (
    <div className="dashboard-wrapper">
      <div>
        <SideBar logout="logout" version="v.1.2.0"/>
      </div>
      <div className="header-content">
        {!isObjectEmpty(user)? 
        <>
          <Header/>
          <Content user={user}/>
        </>
        : <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
          
          <Spinner/>
          </div>
          }
      </div>
    </div>
  );
}

export default UsersGeneralDetails