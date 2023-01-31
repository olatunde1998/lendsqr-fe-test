import axios from "axios";
import { useEffect, useState } from "react";
import "components/usersGeneralDetails/information/stylesInformation.scss";

const SocialInformation = () => {
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
      <p className="personal-info">Socials</p>
      <div className="row-box">
        <div>
          <span>
            <p className="un-filled">Marital Status</p>
            <p className="filled">Single</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">Children</p>
            <p className="filled">None</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">Type of Residence</p>
            <p className="filled">Parent's Apartment</p>
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

export default SocialInformation;
