import "components/usersGeneralDetails/information/stylesInformation.scss";

const LastInformation = ({ user }) => {
  return (
    <div className="personal-information-wrapper">
      <p className="fadded-out">Guarantor</p>
      <div className="row-box">
        <div>
          <span>
            <p className="un-filled">FULL NAME</p>
            <p className="filled">
              {user?.guarantor.firstName} {user?.guarantor.lastName}
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">PHONE NUMBER</p>
            <p className="filled">{user.guarantor.phoneNumber}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">EMAIL ADDRESS</p>
            <p className="filled">{user.guarantor.address}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">RELATIONSHIP</p>
            <p className="filled">Sister</p>
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default LastInformation;
