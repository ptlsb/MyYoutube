import React, { useState } from "react";
// import GoogleLogin from 'react-google-login';
import Login from "./Login";
import Register from "./Register";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default SignUp;

//     const [name,setname]=useState("");

//     const [email,setemail]=useState("");

//     const [url,seturl]=useState("");

//     const responseGoogle=(response)=>{
//         setname(response.profileObj.name);
//         setemail(response.profileObj.email);
//         seturl(response.profileObj.imageurl);
//     };

//     return (
//         <div>
//             <div className="sign-up-cont">

//             </div>
//             <div className="google-sign-in">

//             {/* <h1>login with google</h1>
//             <h2>Welcome: {name}</h2>
//             <h2>Email: {email}</h2>
//         <img src="{url}" alt="{name}" /> */}
//             {/* <GoogleLogin
//     clientId="229476328365-33f0u9v0pb6h0lvkev2307u5g3rpvjui.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
// /> */}
// </div>

//         </div>
//     )

// {
