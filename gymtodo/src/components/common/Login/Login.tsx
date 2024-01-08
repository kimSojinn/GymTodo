import styled from 'styled-components';
import Email from '../../../assets/svg/Email.svg';
import Password from '../../../assets/svg/Password.svg';

export const Login = () => {
  return (
    <SContainer>
      <div className="wrapper">
        <div className="select-wrapper">
          <span>LOG IN</span>
          <span>SIGN UP</span>
        </div>
        <div>
          <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
          <label htmlFor="reg-log"></label>
        </div>
      </div>
      <div className="layout">
        <div className="card-wrap">
          <span className="title">Log In</span>
          <div className="form-group">
            <form autoComplete="off">
              <input
                type="email"
                name="logemail"
                className="form-style"
                placeholder="Your Email"
                id="logemail"
              />
              <img src={Email} className="email-icon" alt="email" />
            </form>
          </div>
          <div className="form-group">
            <form autoComplete="off">
              <input
                type="password"
                name="logpass"
                className="form-style"
                placeholder="Your Password"
                id="logpass"
              />
            </form>
            <img src={Password} className="password-icon" alt="password" />
          </div>
          <a href="#" className="btn">
            submit
          </a>
        </div>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 600px;
  justify-content: center;
  align-items: center;
  color: #c4c3ca;
  font-weight: 700;
  margin: 0 auto;
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .select-wrapper {
    display: flex;
    gap: 30px;
    margin-bottom: 15px;
    font-size: 17px;
  }
  .layout {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #302e3f;
    padding: 40px 20px;
    margin-top: 13px;
    width: 100%;
  }
  .card-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .title {
    font-size: 25px;
    margin-bottom: 25px;
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .checkbox:checked + label,
  .checkbox:not(:checked) + label {
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 20px auto;
    cursor: pointer;
    background-color: #ffeba7;
  }
  .checkbox:checked + label:before,
  .checkbox:not(:checked) + label:before {
    position: absolute;
    display: block;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    color: #ffeba7;
    background-color: #102770;
    font-family: 'unicons';
    content: '';
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }
  .checkbox:checked + label:before {
    transform: translateX(44px) rotate(-270deg);
  }
  .btn {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    border: none;
    background-color: #ffeba7;
    color: #102770;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
    margin-top: 15px;
    text-decoration: none;
  }
  .btn:active,
  .btn:focus {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .btn:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .form-group {
    position: relative;
  }
  .email-icon,
  .password-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
  .form-style {
    padding-left: 55px;
    height: 48px;
    width: 400px;
    font-weight: 700;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    outline: none;
    color: #c4c3ca;
    background-color: #1f2029;
    border: none;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
  .form-style:focus,
  .form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
`;
