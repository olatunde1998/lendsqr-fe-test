import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIRequest } from "utils/APIRequest";

const UserDetails = (props) => {
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
    <div>
      {userDetail && (
        <div>
          <div>{userDetail.orgName}</div>
          <div>{userDetail.email}</div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
