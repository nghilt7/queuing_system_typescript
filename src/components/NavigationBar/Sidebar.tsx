import { FC } from "react";

import "./Sidebar.scss";
import logoutIcon from "../assets/fi_log-out.png";
import logoAlta from "../assets/logo_alta.png";
import dashboardIcon from "../assets/dashboard.png";
import monitorIcon from "../assets/monitor.png";
import monitorATIcon from "../assets/deviceAT.png";
import serviceIcon from "../assets/service.png";
import numberIcon from "../assets/number.png";
import reportIcon from "../assets/report.png";
import settingIcon from "../assets/setting.png";

export interface Props {
  active: string;
}

export const Sidebar: FC<Props> = (props) => {
  return (
    <>
      <div className="side-bar">
        {/* Logo */}
        <div>
          <img className="logo" src={logoAlta} alt="" />
        </div>

        {/* Dashboard */}
        <div
          className={
            props.active === "dashboard" ? `dashboard active` : "dashboard"
          }
        >
          <div className="dashboard-1">
            <img src={dashboardIcon} alt="" />
            <span className="">Dashboard</span>
          </div>
        </div>

        {/* Device */}
        <div
          className={props.active === "device" ? `monitor active` : "monitor"}
        >
          <div className="monitor-1">
            <img
              src={props.active === "device" ? monitorATIcon : monitorIcon}
              alt=""
            />
            <span className={props.active === "device" ? "active" : ""}>
              Thiết bị
            </span>
          </div>
        </div>

        {/* Service */}
        <div className="service">
          <div className="service-1">
            <img src={serviceIcon} alt="" />
            <span>Dịch vụ</span>
          </div>
        </div>

        {/* Number */}
        <div className="number">
          <div className="number-1">
            <img src={numberIcon} alt="" />
            <span>Cấp số</span>
          </div>
        </div>

        {/* Report */}
        <div className="report">
          <div className="report-1">
            <img src={reportIcon} alt="" />
            <span>Báo cáo</span>
          </div>
        </div>

        {/* Setting */}
        <div className="setting">
          <div className="setting-1">
            <img src={settingIcon} alt="" />
            <span>Cài đặt hệ thống</span>
          </div>
        </div>

        {/* Logout */}
        <div className="logout">
          <div className="icon">
            <img src={logoutIcon} alt="" />
          </div>
          <div className="text">Đăng xuất</div>
        </div>
      </div>
    </>
  );
};
