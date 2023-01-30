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
        <div className='customers-box'>
            <FaUsers/>
            <p className='icon-name'>Guarantors</p>
        </div>
        <div className='customers-box'>
            <MdLockOutline/>
            <p className='icon-name'>Loans</p>
        </div>
        <div className='customers-box'>
            <FaHandshake/>
            <p className='icon-name'>Decision Models</p>
        </div>
        <div className='customers-box'>
            <MdLockOutline/>
            <p className='icon-name'>Savings</p>
        </div>
        <div className='customers-box'>
            <FaHandHoldingUsd/>
            <p className='icon-name'>Loan Requests</p>
        </div>
        <div className='customers-box'>
            <FaUserCheck/>
            <p className='icon-name'>Whitelist</p>
        </div>
        <div className='customers-box'>
            <FaUserTimes/>
            <p className='icon-name'>Karma</p>
        </div>

    </div>
  )
}

export default Customers;