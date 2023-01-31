import { FaCoins, FaUsers, FaHockeyPuck } from "react-icons/fa";
import { MdGroup } from "react-icons/md";


const UsersRate = () => {
  return (
    <div className="usersRate-wrapper">
      <div className="users-container">
        <div className="users-icons-1">
          <MdGroup  style={{color:"#DF18FF"}}/>
        </div>
        <p className="diff-users">Users</p>
        <p>2,453</p>
      </div>
      <div className="users-container">
        <div className="users-icons-2">
          <FaUsers style={{color:"#5718FF"}}/>
        </div>
        <p className="diff-users">Active Users</p>
        <p>2,453</p>
      </div>
      <div className="users-container">
        <div className="users-icons-3">
          <FaHockeyPuck style={{color:"#F55F44"}}  />
          
        </div>
        <p className="diff-users">Users With Loans</p>
        <p>12,453</p>
      </div>
      <div className="users-container">
        <div className="users-icons-4">
          <FaCoins style={{color:"#FF3366"}} />
        </div>
        <p className="diff-users">Users With Savings</p>
        <p>102,453</p>
      </div>
      
    </div>
  );
};

export default UsersRate;
