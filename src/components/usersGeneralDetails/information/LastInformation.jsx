import axios from "axios";
import { useEffect, useState } from "react";
import "components/usersGeneralDetails/information/stylesInformation.scss";

const LastInformation = () => {
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
      <p className="fadded-out">Guarantor</p>
      <div className="row-box">
        <div>
          <span>
            <p className="un-filled">Full Name</p>
            <p className="filled">Debby Ogana</p>
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
            <p className="un-filled">Email Address</p>
            <p className="filled">debby@gmail.com</p>
          </span>
        </div>
        <div>
          <span>
            <p className="un-filled">Relationship</p>
            <p className="filled">Sister</p>
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

export default LastInformation;
