import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Link to="/dashboard" style={{textDecoration:"none"}}>
            <div className='customers-box'>
                <FaHome/>
                <p className='icon-name'>Dashboard</p>
            </div>
            </Link>
        </div>
      )
}

export default Dashboard;