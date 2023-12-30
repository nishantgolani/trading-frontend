import React , {useState} from 'react';
import './Login.css';

function Login(props) {
  const [isSignUp, setIsSignUp] = useState(false);
  props.funcNav(false);
  const toggle = () => {
    setIsSignUp(!isSignUp);
  };
  props.funcNav(false);
  return (
    <>
      <div id="container-login" className={`container-fuild ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <div className="row" id="login-row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
              <div className="input-group">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>

                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
              <div className="input-group">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row" id="login-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
      </div>
    </>
  );
}

export default Login;
