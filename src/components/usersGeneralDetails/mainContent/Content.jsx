import UsersProfile from "components/usersGeneralDetails/mainContent/UsersProfile";
import "components/usersGeneralDetails/mainContent/stylesContent.scss";
import PersonalInformation from "components/usersGeneralDetails/information/PersonalInformation";
import EducationInformation from "components/usersGeneralDetails/information/EducationInformation";
import SocialInformation from "components/usersGeneralDetails/information/SocialInformation";
import GuarantorInformation from "components/usersGeneralDetails/information/GuarantorInformation";
import LastInformation from "components/usersGeneralDetails/information/LastInformation";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const Content = ({ user }) => {
  return (
    <div>
      {user ? (
        <div className="content-wrapper">
          <Link
            to="/users"
            className="back-arrow-link"
            style={{
              textDecoration: "none",
              color: "rgba(33, 63, 125, 1);",
              cursor: "pointer",
            }}
          >
            <div className="back-arrow">
              <MdKeyboardBackspace
                size={30}
                style={{ color: "rgba(33, 63, 125, 1);" }}
              />
              <p className="back">Back to Users</p>
            </div>
          </Link>

          <div className="users-blacklist-activate">
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Users Details</p>
            <div className="blacklist-activate">
              <button className="button-red">BlackList user</button>
              <button className="button-green">Activate user</button>
            </div>
          </div>
          <UsersProfile user={user} />
          <div className="content-information-wrapper">
            <PersonalInformation user={user} />
            <EducationInformation user={user} />
            <SocialInformation user={user}/>
            <GuarantorInformation user={user} />
            <LastInformation user={user} />
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Content;
