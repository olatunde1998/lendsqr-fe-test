import { MdCardTravel } from 'react-icons/md'
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom'

const SwitchOrganization = () => {
    return (
        <div style={{marginTop: "30px"}}>
            <div className='customers-box'>
                <MdCardTravel/>
            <Link to="/switch-org" style={{textDecoration: "none", color: "#8496bb", cursor: "pointer"}}>
                <p className='icon-name'>Switch Organization</p>
            </Link>
            <FiChevronDown style={{marginLeft: "5px"}}/>
            </div>
        </div>
      )
}

export default SwitchOrganization