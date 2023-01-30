import { MdLockOutline, MdOutlineBrightness4 } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";


const Settings = () => {
    return (
        <div>
            <p className='customer-headings'>Settings</p>
            <div className='customers-box'>
                <MdLockOutline/>
                <p className='icon-name'>Preferences</p>
            </div>
            <div className='customers-box'>
                <MdOutlineBrightness4/>
                <p className='icon-name'>Fees and Pricing</p>
            </div>
            <div className='customers-box'>
                <FaRegClipboard/>
                <p className='icon-name'>Audit Logs</p>
            </div>
    
        </div>
      )
}

export default Settings