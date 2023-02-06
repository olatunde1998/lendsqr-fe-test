import "components/usersGeneralDetails/information/stylesInformation.scss";

const PersonalInformation = ({ user }) => {
  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Personal Information</p>
      <div className="row-box">
        <div>
          <span className="row-1">
            <p className="un-filled">FULL NAME</p>
            <p className="filled">
              {user?.profile.firstName} {user?.profile.lastName}
            </p>
          </span>
          <span>
            <p className="un-filled">MARITAL STATUS</p>
            <p className="filled">Single</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">PHONE NUMBER</p>
            <p className="filled">{user.profile.phoneNumber}</p>
          </span>
          <span>
            <p className="un-filled">CHILDREN</p>
            <p className="filled">None</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">EMAIL ADDRESS</p>
            <p className="filled">{user.email}</p>
          </span>
          <span>
            <p className="un-filled">TYPE OF RESIDENCE</p>
            <p className="filled">{user.profile.address}</p>
          </span>
        </div>
        <span className="row-1">
          <p className="un-filled">BVN</p>
          <p className="filled">{user?.profile.bvn}</p>
        </span>
        <span className="row-1">
          <p className="un-filled">GENDER</p>
          <p className="filled">{user.profile.gender}</p>
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default PersonalInformation;
