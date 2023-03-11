import { FC, useState } from "react";

import "./Login.scss";
import logoAlta from "../assets/logo_alta.png";
import resetImage from "../assets/reset.png";
import eyeImage from "../assets/u_eye-slash.png";

export interface Props {}

export const ForgotPassword: FC<Props> = (props) => {
  const defaultValid = {
    isValidRePassword: true,
    isValidPassword: true,
  };

  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidForm, setIsValidForm] = useState(defaultValid);

  const handleLogin = () => {
    setIsValidForm(defaultValid);

    if (!repassword || !password) {
      setIsValidForm({
        ...defaultValid,
        isValidPassword: false,
        isValidRePassword: false,
      });
    }
  };

  return (
    <div className="login-container">
      <img className="logo_alta" src={logoAlta} alt="" />

      {isValidEmail ? (
        <>
          <span className="reset-text">Đặt lại mật khẩu mới</span>

          <div className="password-reset">
            <label htmlFor="">Mật khẩu</label>

            <div className="position-relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="hide-icon position-absolute top-50 end-0 translate-middle"
                src={eyeImage}
                alt=""
              />
            </div>
          </div>

          <div className="repassword-reset">
            <label htmlFor="">Nhập lại mật khẩu</label>

            <div className="position-relative">
              <input
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              />
              <img
                className="hide-icon position-absolute top-50 end-0 translate-middle"
                src={eyeImage}
                alt=""
              />
            </div>
          </div>

          <div className="reset-btn">
            <span onClick={() => handleLogin()}>Xác nhận</span>
          </div>
        </>
      ) : (
        <>
          <span className="re-enter-password">Đặt lại mật khẩu</span>
          <span className="re-enter-email">
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </span>

          <input className="email-form" type="text" />

          <div>
            <button className="close-btn">
              <span>Huỷ</span>
            </button>
          </div>

          <div>
            <button className="next-btn">
              <span onClick={() => setIsValidEmail(true)}>Tiếp Tục</span>
            </button>
          </div>
        </>
      )}

      <div className="right-side"></div>

      <img className="manager-img" src={resetImage} alt="" />
    </div>
  );
};
