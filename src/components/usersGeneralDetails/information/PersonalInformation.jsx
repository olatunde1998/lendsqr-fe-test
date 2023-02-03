import "components/usersGeneralDetails/information/stylesInformation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIRequest } from "utils/APIRequest";

const PersonalInformation = (props) => {
  
  // let data = localStorage.getItem("grace_effiom");
  // data = JSON.parse(data);
  // console.log(data);

  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});

  useEffect( () => {
    const fetchUserDetail = async (userId) => {
      try {
        const {data}  = await APIRequest.get(`/users/${userId}`);
        setUserDetail(data);
      } catch (error) {
        console.log("An error occurred", error);
      }
    };
    fetchUserDetail(id)

  }, [id]);

  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Personal Information</p>
      <div className="row-box">
        <div>
          <span className="row-1">
            <p className="un-filled">FULL NAME</p>
            <p className="filled">
              {/* {data.personalinformation.full_name} */}
              {userDetail.profile.firstName}
            </p>
          </span>
          <span>
            <p className="un-filled">MARITAL STATUS</p>
            <p className="filled">
              {/* {data.personalinformation.marital_status} */}
              </p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">PHONE NUMBER</p>
            <p className="filled">
              {/* {data.personalinformation.phone_number} */}
              {/* {userDetail.profile.phoneNumber} */}
              </p>
          </span>
          <span>
            <p className="un-filled">CHILDREN</p>
            <p className="filled">
              {/* {data.personalinformation.children} */}
              </p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">EMAIL ADDRESS</p>
            <p className="filled">
              {/* {data.personalinformation.email} */}
              </p>
          </span>
          <span>
            <p className="un-filled">TYPE OF RESIDENCE</p>
            <p className="filled">
              {/* {data.personalinformation.residence} */}
              </p>
          </span>
        </div>
        <span className="row-1">
          <p className="un-filled">BVN</p>
          <p className="filled">
            {/* {data.personalinformation.bvn} */}
            {/* {userDetail.profile.bvn} */}
            </p>
        </span>
        <span className="row-1">
          <p className="un-filled">GENDER</p>
          <p className="filled">
            {/* {data.personalinformation.gender} */}
            {/* {userDetail.profile.gender} */}
            </p>
        </span>
      </div>

      <div></div>
    </div>

  );
};

export default PersonalInformation;
