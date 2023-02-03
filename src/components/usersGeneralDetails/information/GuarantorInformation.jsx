import "components/usersGeneralDetails/information/stylesInformation.scss";

const GuarantorInformation = () => {
  let data = localStorage.getItem("grace_effiom");
  data = JSON.parse(data);
  console.log(data);

  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Guarantor</p>
      <div className="row-box">
        <div>
          <span>
            <p className="un-filled">FULL NAME</p>
            <p className="filled">{data.guarantor.full_name}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">PHONE NUMBER</p>
            <p className="filled">{data.guarantor.phone_number}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">EMAIL ADDRESS</p>
            <p className="filled">{data.guarantor.email}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">RELATIONSHIP</p>
            <p className="filled">{data.guarantor.relationship}</p>
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default GuarantorInformation;
