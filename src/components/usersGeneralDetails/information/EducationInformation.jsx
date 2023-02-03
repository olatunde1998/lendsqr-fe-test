import "components/usersGeneralDetails/information/stylesInformation.scss";

const EducationInformation = () => {
  let data = localStorage.getItem("grace_effiom");
  data = JSON.parse(data);
  console.log(data);
  

  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Education and Employment</p>
      <div className="row-box">
        <div>
          <span className="row-1">
            <p className="un-filled">LEVEL OF EDUCATION</p>
            <p className="filled">{data.education.level}</p>
          </span>
          <span>
            <p className="un-filled">OFFICIAL EMAIL</p>
            <p className="filled" style={{marginRight: "10px"}}>{data.education.office_email}</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled" style={{marginRight:"10px"}}>EMPLOYMENT STATUS</p>
            <p className="filled">{data.education.employment_status}</p>
          </span>
          <span>
            <p className="un-filled">MONTHLY INCOME</p>
            <p className="filled">{data.education.monthly_income}</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled" style={{marginRight:"10px"}}>SECTOR OF EMPLOYMENT</p>
            <p className="filled" style={{marginRight: "10px"}}>{data.education.sector_employment}</p>
          </span>
          <span>
            <p className="un-filled">LOAN REPAYMENT</p>
            <p className="filled">{data.education.loan}</p>
          </span>
        </div>
        <span className="row-1">
          <p className="un-filled">DURATION OF EMPLOYMENT</p>
          <p className="filled">{data.education.duration_employment}</p>
        </span>
      </div>

      <div></div>
    </div>

  );
};

export default EducationInformation;
