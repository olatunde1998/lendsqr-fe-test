// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { APIRequest } from "utils/APIRequest";
// import { FiUser } from "react-icons/fi";
import { MdOutlineStarBorder, MdOutlineStarPurple500 } from "react-icons/md";
import NavTabs from "./NavTabs";


const UsersProfile = () => {
  
  
  return (
    <div className="usersProfile-wrapper">
      <div className="profile-box">
        <div className="avatar-username">
          <div className="avatar-username-img">
            {/* <FiUser size={40}/> */}
            {/* <img src={userDetail.profile.avatar} alt="hello" /> */}
          </div>
          <div className="username">
            <p className="user-fullname">
              {/* {userDetail.orgName} */}
              </p>
            <p>LSQFf587g90</p>
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
          <p className="account-amount"> <span>N</span>200,000.00</p>
          <p>9912345678/Providus Bank</p>
        </div>

      </div>
      <div className="profile-list-link">
        <NavTabs/>
      </div>
            
    </div>
  );
};

export default UsersProfile;
