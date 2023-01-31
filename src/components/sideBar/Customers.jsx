import { MdLockOutline } from "react-icons/md";
import { FaHandHoldingUsd, FaHandshake, FaUserCheck, FaUserFriends, FaUsers, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Customers = () => {
    
    
  return (
    <div>
        <p className='customer-headings'>Customers</p>
        <Link to="/generalDetails" style={{textDecoration:"none", cursor:"pointer"}}>
        <div className='customers-box customer-box-1'>
            <FaUserFriends/>
            <p className='icon-name icon-name-1'>Users</p>
        </div>
        </Link>
        <div  className="customers-box">
            <FaUsers/>
            <Link to="/guarantors" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}><p className='icon-name'>Guarantors</p></Link>
        </div>
        <div className='customers-box'>
            <MdLockOutline/>
            <Link to="/loans" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Loans</p></Link>
        </div>
        <div className='customers-box'>
            <FaHandshake/>
            <Link to="/decision-models" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Decision Models</p></Link>
        </div>
        <div className='customers-box'>
            <MdLockOutline/>
            <Link to="/savings" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Savings</p></Link>
        </div>
        <div className='customers-box'>
            <FaHandHoldingUsd/>
            <Link to="/loan-requests" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Loan Requests</p></Link>
        </div>
        <div className='customers-box'>
            <FaUserCheck/>
            <Link to="/whitelist" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Whitelist</p></Link>
        </div>
        <div className='customers-box'>
            <FaUserTimes/>
            <Link to="/loans" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
            <p className='icon-name'>Karma</p></Link>
        </div>

    </div>
  )
}

export default Customers;