import { FaBriefcase, FaCoins, FaFan, FaFileExport, FaHandHoldingUsd, FaRegChartBar, FaScroll, FaUserCog } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const Businesses = () => {
    return (
        <div>
            <p className='customer-headings'>Businesses</p>
            <div className='customers-box'>
                <FaBriefcase/>
                <Link to="/organization" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Organization</p></Link>
            </div>
            <div className='customers-box'>
                <FaHandHoldingUsd/>
                <Link to="/loan-products" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Loan Products</p></Link>
            </div>
            <div className='customers-box'>
                <MdLockOutline/>
                <Link to="/savings-products" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Savings Products</p></Link>
            </div>
            <div className='customers-box'>
                <FaCoins/>
                <Link to="/fees-charges" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Fees and Charges</p></Link>
            </div>
            <div className='customers-box'>
                <FaFileExport/>
                <Link to="/transactions" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Transactions</p></Link>
            </div>
            <div className='customers-box'>
                <FaFan/>
                <Link to="/services" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Services</p></Link>
            </div>
            <div className='customers-box'>
                <FaUserCog/>
                <Link to="/service-account" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Service Account</p></Link>
            </div>
            <div className='customers-box'>
                <FaScroll/>
                <Link to="/settlement" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Settlements</p></Link>
            </div>
            <div className='customers-box'>
                <FaRegChartBar/>
                <Link to="/reports" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Reports</p></Link>
            </div>
    
        </div>
      )
}

export default Businesses