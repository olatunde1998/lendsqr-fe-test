// import React from 'react'
import { FaBriefcase, FaCoins, FaFan, FaFileExport, FaHandHoldingUsd, FaRegChartBar, FaScroll, FaUserCog } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";


const Businesses = () => {
    return (
        <div>
            <p className='customer-headings'>Businesses</p>
            <div className='customers-box'>
                <FaBriefcase/>
                <p className='icon-name'>Organization</p>
            </div>
            <div className='customers-box'>
                <FaHandHoldingUsd/>
                <p className='icon-name'>Loan Products</p>
            </div>
            <div className='customers-box'>
                <MdLockOutline/>
                <p className='icon-name'>Savings Products</p>
            </div>
            <div className='customers-box'>
                <FaCoins/>
                <p className='icon-name'>Fees and Charges</p>
            </div>
            <div className='customers-box'>
                <FaFileExport/>
                <p className='icon-name'>Transactions</p>
            </div>
            <div className='customers-box'>
                <FaFan/>
                <p className='icon-name'>Services</p>
            </div>
            <div className='customers-box'>
                <FaUserCog/>
                <p className='icon-name'>Service Account</p>
            </div>
            <div className='customers-box'>
                <FaScroll/>
                <p className='icon-name'>Settlements</p>
            </div>
            <div className='customers-box'>
                <FaRegChartBar/>
                <p className='icon-name'>Reports</p>
            </div>
    
        </div>
      )
}

export default Businesses