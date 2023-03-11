import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import logoAlta from "../assets/logo_alta.png";
import managerSystem from "../assets/manage_system.png";
import eyeImage from "../assets/u_eye-slash.png";
import warningImage from "../assets/fi_alert-circle.png";

export interface IAppProps {}

export const Login: FC<IAppProps> = (props) => {
  const navigate = useNavigate();

  const defaultValid = {
    isValidUsername: true,
    isValidPassword: true,
  };

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState(defaultValid);

  const handleLogin = () => {
    setIsValidForm(defaultValid);

    if (!username || !password) {
      setIsValidForm({
        ...defaultValid,
        isValidPassword: false,
        isValidUsername: false,
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <img className="logo_alta" src={logoAlta} alt="" />

        <div className="username">
          <label htmlFor="">Tên đăng nhập</label>
          <input
            className={
              isValidForm.isValidUsername ? "valid-form" : "invalid-form"
            }
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password ">
          <label htmlFor="">Mật khẩu</label>

          <div className="position-relative">
            <input
              className={
                isValidForm.isValidPassword ? "valid-form" : "invalid-form"
              }
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

        {!isValidForm.isValidPassword && !isValidForm.isValidUsername ? (
          <>
            <div className="validate">
              <img className="warning-icon" src={warningImage} alt="" />
            </div>
            <span className="validate-text">
              Sai mật khẩu hoặc tên đăng nhập
            </span>
          </>
        ) : (
          ""
        )}

        <div
          className={
            isValidForm.isValidPassword && isValidForm.isValidUsername
              ? "forgot-password"
              : "forgot-password-invalid"
          }
          onClick={() => navigate("/forgot-password")}
        >
          Quên mật khẩu?
        </div>

        <div className="login-btn">
          <span onClick={() => handleLogin()}>Đăng nhập</span>
        </div>

        <div className="right-side"></div>

        <img className="manager-img" src={managerSystem} alt="" />

        <span className="system-text">Hệ thống</span>
        <span className="manager-text">QUẢN LÝ XẾP HÀNG</span>
      </div>
    </>
  );
};
