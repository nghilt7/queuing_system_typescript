import { FC } from "react";

import "./Device.scss";
import addIcon from "../assets/add-square.png";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { AddNewButton } from "../NavigationBar/AddNewButton";
import { Pagination } from "../NavigationBar/Pagination";
import arrowDownIcon from "../assets/fi_chevron-down.png";
import searchIcon from "../assets/fi_search.png";

const datas = [
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
  {
    deviceId: "KID_01",
    nameDevice: "Kiosk",
    ipAddress: "192.168.1.0",
    statusAction: "Hoạt động",
    statusConnect: "Mất kết nối",
    serviceUse: "Khám tim mạch, Khám mắt...",
    detail: "Chi tiết",
    update: "Cập nhật",
  },
];

export interface Props {}

export const Device: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="device-container">
        <Sidebar active="device" />
        <Topbar root="Thiết bị" rootNext="Danh sách thiết bị" />

        <span className="title">Danh sách thiết bị</span>

        <div className="status-action">
          <span>Trạng thái hoạt động</span>
          <select>
            <option value="">Tất cả</option>
          </select>
          <img className="arrowIcon-1" src={arrowDownIcon} alt="" />
        </div>

        <div className="status-connect">
          <span>Trạng thái kết nối</span>
          <select>
            <option value="">Tất cả</option>
          </select>
          <img className="arrowIcon-2" src={arrowDownIcon} alt="" />
        </div>

        <div className="search-box">
          <span>Từ khóa</span>
          <input type="text" placeholder="Nhập từ khóa" />
          <img className="searchIcon" src={searchIcon} alt="" />
        </div>

        <div className="table-display">
          <div className="table-header">
            <span className="s-first">Mã thiết bị</span>
            <span className="s-second">Tên thiết bị</span>
            <span className="s-third">Địa chỉ IP</span>
            <span className="s-four">Trạng thái hoạt động</span>
            <span className="s-fit">Trạng thái kết nối</span>
            <span className="s-six">Dịch vụ sữ dụng</span>
            <span className="s-seven"></span>
            <span className="s-last"></span>
          </div>
          <div className="table-body">
            {datas.map((data, index) => {
              return (
                <div className={`table-group-${index} d-flex`}>
                  <div className="b-first">
                    <span>{data.deviceId}</span>
                  </div>
                  <div className="b-second">
                    <span>{data.nameDevice}</span>
                  </div>
                  <div className="b-third">
                    <span>{data.ipAddress}</span>
                  </div>
                  <div className="b-four">
                    <span>{data.statusAction}</span>
                  </div>
                  <div className="b-fit">
                    <span>{data.statusConnect}</span>
                  </div>
                  <div className="b-six">
                    <span>{data.serviceUse}</span>
                    <span className="more">Xem thêm</span>
                  </div>
                  <div className="b-seven">
                    <span>{data.detail}</span>
                  </div>
                  <div className="b-last">
                    <span>{data.update}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Add icon */}
        <AddNewButton icon={addIcon} title="Thêm thiết bị" />

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
};
