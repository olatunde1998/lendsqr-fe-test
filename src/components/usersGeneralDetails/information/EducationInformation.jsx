import "components/usersGeneralDetails/information/stylesInformation.scss";

const EducationInformation = ({ user }) => {
  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Education and Employment</p>
      <div className="row-box">
        <div>
          <span className="row-1">
            <p className="un-filled">LEVEL OF EDUCATION</p>
            <p className="filled">{user.education.level}</p>
          </span>
          <span>
            <p className="un-filled">Official Email</p>
            <p className="filled">{user.education.officeEmail}</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">EMPLOYMENT STATUS</p>
            <p className="filled">{user.education.employmentStatus}</p>
          </span>
          <span>
            <p className="un-filled">MONTHLY INCOME</p>
            <p className="filled"><span style={{textDecoration: "line-through double"}}>N</span>{user.education.monthlyIncome[1]}-<span style={{textDecoration: "line-through double"}}>N</span>{user.education.monthlyIncome[0]} </p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">SECTOR OF EMPLOYMENT</p>
            <p className="filled">{user.education.sector}</p>
          </span>
          <span>
            <p className="un-filled">LOAN REPAYMENT</p>
            <p className="filled">{user.education.loanRepayment}</p>
          </span>
        </div>
        <span className="row-1">
          <p className="un-filled">DURATION OF EMPLOYMENT</p>
          <p className="filled">{user.education.duration}</p>
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default EducationInformation;
