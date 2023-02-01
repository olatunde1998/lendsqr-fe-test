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
      <div className="welcome">
        <img src="assets/img/Welcome.png" alt="reset password logo" />
      </div>
      <p>Sign up an account</p>

      <form onSubmit={ResetPassword}>
        {error}
        <div className="password-wrapper">
          <input type="text" placeholder="Full Name" required/>
        </div>
        <div className="password-wrapper">
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        </div>
        <div className="password-wrapper">
          <input type={`${show ? "text" : "password"}`} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
          <span className="show-wrapper" onClick={() => setShow(!show)}>show</span>
        </div>
        <div className="have-account">
          <p>Already have account? <Link to="/" style={{textDecoration:"none", color:"#39CDCC"}}><span className="login-btn">Login</span></Link></p>
        </div>
        <div className="button-wrapper">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RightContainer;
