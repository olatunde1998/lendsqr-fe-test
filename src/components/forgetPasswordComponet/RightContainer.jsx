import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth  } from "components/LoginComponet/firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



const RightContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const ResetPassword = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        setError(<p style={{color:"red"}}>Invalid Email / Password</p>);
      });
  };
  return (
    <div className="right-container-wrapper">
      <div className="welcome-reset">
        <img src="assets/img/reset_password2.jpeg" alt="reset password logo" />

      </div>
      <p>Enter new details</p>

      <form onSubmit={ResetPassword}>
        {error}
        <div className="password-wrapper">
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        </div>
        <div className="password-wrapper">
          <input type={`${show ? "text" : "password"}`} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" required/>
          <span className="show-wrapper" onClick={() => setShow(!show)}>show</span>
        </div>
        <div className="password-wrapper">
          <input type={`${show ? "text" : "password"}`} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm New Password" required/>
          <span className="show-wrapper" onClick={() => setShow(!show)}>show</span>
        </div>
        <div className="forget-password">
          <p>Already have account?</p><Link to="/" style={{textDecoration:"none", color:"#39CDCC"}}><span className="login-btn">Login</span></Link>
        </div>
        <div className="button-wrapper">
          <button type="submit">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default RightContainer;
