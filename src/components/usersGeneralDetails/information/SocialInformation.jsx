import "components/usersGeneralDetails/information/stylesInformation.scss";

const SocialInformation = () => {

  let data = localStorage.getItem("grace_effiom");
  data = JSON.parse(data);
  console.log(data);

  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Socials</p>
      <div className="row-box">
        <div>
          <span>
            <p className="un-filled">TWITTER</p>
            <p className="filled">{data.socials.twitter}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">FACEBOOK</p>
            <p className="filled">{data.socials.facebook}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">INSTAGRAM</p>
            <p className="filled">{data.socials.instagram}</p>
          </span>
        </div>
        <div className="fadded-out">
          <span>
            <p>Type of Residence</p>
            <p className="filled">Parent's Apartment</p>
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SocialInformation;
