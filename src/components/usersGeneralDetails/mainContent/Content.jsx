import UsersProfile from "components/usersGeneralDetails/mainContent/UsersProfile";
import "components/usersGeneralDetails/mainContent/stylesContent.css";
import PersonalInformation from "../information/PersonalInformation";
import EducationInformation from "../information/EducationInformation";
import SocialInformation from "../information/SocialInformation";
import GuarantorInformation from "../information/GuarantorInformation";
import LastInformation from "../information/LastInformation";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Link to="/dashboard" className="back-arrow-link" style={{textDecoration:"none", color:"rgba(33, 63, 125, 1);", cursor:"pointer"}}>
        <div className="back-arrow">
          <MdKeyboardBackspace size={30} style={{color:"rgba(33, 63, 125, 1);"}}/>
          <p className="back">Back to Users</p>
        </div>
      </Link>

      <div className="users-blacklist-activate">
        <p>Users</p>
        <div className="blacklist-activate">
          <button className="button-red">BlackList user</button>
          <button className="button-green">Activate user</button>
        </div>
      </div>
      <UsersProfile />
      <div className="content-information-wrapper">
        <PersonalInformation />
        <EducationInformation />
        <SocialInformation />
        <GuarantorInformation />
        <LastInformation />
      </div>
    </div>
  );
};

export default Content;
