import {  MdOutlineStarBorder, MdOutlineStarPurple500 } from "react-icons/md";
import NavTabs from "./NavTabs";


const UsersProfile = ({user}) => {
  
  return (
    <div className="usersProfile-wrapper">
      <div className="profile-box">
        <div className="avatar-username">
          <div className="avatar-username-img">
            <img className="user-avatar" src={user?.profile.avatar} alt="User Avatar" />
          </div>
          <div className="username">
            <p className="user-fullname">{user?.profile.firstName} {user?.profile.lastName}</p>
            <p>{user.userName}</p>
          </div>
        </div>

        <div className="tier">
          <div className="tier-box">
          <p>User's Tier</p>
          <MdOutlineStarPurple500 style={{color: "rgba(233, 178, 0, 1)"}}/>
          <MdOutlineStarBorder style={{color: "rgba(233, 178, 0, 1)"}}/>
          <MdOutlineStarBorder style={{color: "rgba(233, 178, 0, 1)"}}/>

          </div>
        </div>
        <div className="account-naira">
          <p className="account-amount"> <span>N</span>{user?.accountBalance}</p>
          <p>{user?.accountNumber}/Providus Bank</p>
        </div>

      </div>
      <div className="profile-list-link">
        <NavTabs/>
      </div>
            
    </div>
  );
};

export default UsersProfile;
