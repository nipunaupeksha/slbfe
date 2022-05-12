import React, {useState} from "react";
import SLBFE from "../../assets/img/slbfe.png";
import { BiUserCircle, BiLock } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './login.css';
import CitizenService from "../../services/CitizenService";

const Login = () =>{
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister(){
        history.push("/add-citizen/_add")
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        CitizenService.validateCitizen(email, password).then((res)=>{
            let nic = res.data.nic;
            if(res.data.email === email && res.data.password === password){
                history.push("/citizens");
            }
        })
    }

    return(
        <header>
      <div className="container_x header__container">
        <h1>Sri Lankan Bureau of Foreign Employment</h1>
        <h5 className="text-light">
          Sri Lanka to be the best choice
          <br />
          for competent human resources for overseas market
        </h5>

        <div className="l-form">
          <div className="form">
            <div className="slbfe__container">
              <div className="slbfe">
                <img src={SLBFE} alt="" />
              </div>
            </div>
            <form action="" className="form__content" onSubmit={handleLogin}>
              <h1 className="form__title">Welcome</h1>
              <div className="form__div form__div-one">
                <div className="form__icon">
                  <BiUserCircle />
                </div>
                <div className="form__div-input">
                  <label htmlFor="email" className="form__label"></label>
                  <input
                    type="email"
                    className="form__input"
                    name="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form__div">
                <div className="form__icon">
                  <BiLock />
                </div>
                <div className="form__div-input">
                  <label htmlFor="" className="form__label"></label>
                  <input
                    type="password"
                    className="form__input"
                    name="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input type="submit" className="form__button" value="Login"/>
              <p className="no__account">Do not have an account?</p>
              <input type="button" className="form__button" value="Register" onClick={handleRegister} />
            </form>
          </div>
        </div>
      </div>
    </header>
    );
};

export default withRouter(Login);