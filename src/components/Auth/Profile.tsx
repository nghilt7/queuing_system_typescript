import { FC } from "react";

import "./Profile.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import avatarBig from "../assets/avatar_big.png";
import camera from "../assets/camera.png";
import "./Profile.scss";
import { Topbar } from "../NavigationBar/Topbar";

export interface Props {}

export const Profile: FC<Props> = (props) => {
  return (
    <>
      <div className="profile-container">
        <Sidebar active="profile" />

        <Topbar profileText="Thông tin cá nhân" />

        <div className="user-info">
          <div className="avatar-info">
            <div className="name">Lê Quỳnh Ái Vân</div>
            <div className="avatar-group">
              <img className="avatar" src={avatarBig} alt="" />
              <div className="camera-group">
                <img className="camera" src={camera} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="username">
              <input type="text" />
              <label htmlFor="">Tên đăng nhập</label>
            </div>

            <div className="password">
              <input type="text" />
              <label htmlFor="">Mật khẩu</label>
            </div>

            <div className="role">
              <input type="text" />
              <label htmlFor="">Vai trò</label>
            </div>

            <div className="email">
              <input type="email" />
              <label htmlFor="">Email</label>
            </div>

            <div className="name">
              <input type="text" />
              <label htmlFor="">Tên người dùng</label>
            </div>

            <div className="name">
              <input type="text" />
              <label htmlFor="">Tên người dùng</label>
            </div>

            <div className="phone">
              <input type="number" />
              <label htmlFor="">Số điện thoại</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
