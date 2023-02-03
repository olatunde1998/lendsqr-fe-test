import { MdLockOutline } from "react-icons/md";
import { FaHandHoldingUsd, FaHandshake, FaUserCheck, FaUserFriends, FaUsers, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Customers = () => {
    // const setPersonalData = () => {
    //     let graceData = {
    //       personalinformation: {
    //         full_name: "Grace Effiom",
    //         phone_number: "07036786589",
    //         email: "grace@gmail.com",
    //         bvn: "05983672827282",
    //         gender: "Female",
    //         marital_status: "Single",
    //         children: "none",
    //         residence: "Parent's applicant",
    //       },
    //       education: {
    //         level: "B.sc",
    //         employment_status: "Employed",
    //         sector_employment: "FinTech",
    //         duration_employment: "2years",
    //         office_email: "grace@lendsqr.com",
    //         monthly_income: "#200000.00 - #4000000.00",
    //         loan: "40,000",
    //       },
    //       socials: {
    //         twitter: "@grace_effiom",
    //         facebook: "Grace Effiom",
    //         instagram: "@grace_effiom",
    //       },
    //       guarantor: {
    //         full_name: "Debby Ogana",
    //         phone_number: "07060780922",
    //         email: "debby@gmail.com",
    //         relationship: "Sisters",
    //       },
    //       guarantorTwo: {
    //         full_name: "Debby Ogana",
    //         phone_number: "07060780922",
    //         email: "debby@gmail.com",
    //         relationship: "Sisters",
    //       },
    //   };
    //     localStorage.setItem("grace_effiom", JSON.stringify(graceData));
    //   };
    
  return (
    <div>
        <p className='customer-headings'>Customers</p>
        <Link to="/generalDetails" style={{textDecoration:"none", cursor:"pointer"}}>
        <div className='customers-box'>
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