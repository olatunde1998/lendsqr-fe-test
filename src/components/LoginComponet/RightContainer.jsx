import {
  signInWithEmailAndPassword,
} from "firebase/auth";
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

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(<p style={{color:"red"}}>Invalid Email / Password</p>);
      });
  };
  return (
    <div className="right-container-wrapper">
      <div className="welcome">
        <img src="assets/img/Welcome.png" alt="" />
        <p>Enter details to login</p>
      </div>
      <form onSubmit={signIn}>
        {error}
        <div className="password-wrapper">
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        </div>
        <div className="password-wrapper">
          <input type={`${show ? "text" : "password"}`} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
          <span className="show-wrapper" onClick={() => setShow(!show)}>show</span>
        </div>
        <Link to="/forget-password" style={{textDecoration: "none"}}>
        <div className="forget-password">
          <p>Forget Password</p>
        </div>
        </Link>
        <div className="button-wrapper">
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  );
};

export default RightContainer;
