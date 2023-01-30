import axios from "axios";
import { useEffect, useState } from "react";
import "components/usersGeneralDetails/information/stylesInformation.css";
// import { BsThreeDotsVertical } from "react-icons/bs";

const EducationInformation = () => {
  const baseURL =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  console.log(posts);

  return (
    <div className="personal-information-wrapper">
      <p className="personal-info">Education and Employment</p>
      <div className="row-box">
        <div>
          <span className="row-1">
            <p className="un-filled">Full Name</p>
            <p className="filled">Grace Effiom</p>
          </span>
          <span>
            <p className="un-filled">Marital Status</p>
            <p className="filled">Single</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">Phone Number</p>
            <p className="filled">07034568975</p>
          </span>
          <span>
            <p className="un-filled">Children</p>
            <p className="filled">None</p>
          </span>
        </div>
        <div>
          <span className="row-1">
            <p className="un-filled">Email Address</p>
            <p className="filled">grace@gmail.com</p>
          </span>
          <span>
            <p className="un-filled">Type of Residence</p>
            <p className="filled">Parent's Apartment</p>
          </span>
        </div>
        <span className="row-1">
          <p className="un-filled">BVN</p>
          <p className="filled">05983672827282</p>
        </span>
        <span className="row-1">
          <p className="un-filled">Gender</p>
          <p className="filled">Female</p>
        </span>
      </div>

      <div></div>
    </div>

    // <div className='userinfo-container'>
    //   {posts.map((post,id)=>(

    //   <li key={id} className='items-box'>
    //     <span className='items-orgName'>{post.orgName}</span>
    //     <span className='items-userName'>{post.userName}</span>
    //     <span className='items-email'>{post.email}</span>
    //     <span className='items-number'>{post.phoneNumber}</span>
    //     <span className='items-date'>{post.lastActiveDate}</span>
    //     <span className='dot-name'>
    //     <p className='items-status'>{post.orgName}</p>
    //     <BsThreeDotsVertical/>
    //     </span>
    //   </li>
    //   ))}
    // </div>
  );
};

export default EducationInformation;
