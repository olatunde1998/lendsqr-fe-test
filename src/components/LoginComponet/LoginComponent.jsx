import 'components/LoginComponet/stylesLogin.scss';
import LeftContainer from 'components/LoginComponet/LeftContainer'
import RightContainer from './RightContainer';


const LoginComponent = () => {
  return (
    <div className='Login-component'>
        <LeftContainer/>
        <RightContainer/>
    </div>

  )
}

export default LoginComponent;