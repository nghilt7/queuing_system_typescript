import { FC } from "react";
import { AddNewButton } from "../NavigationBar/AddNewButton";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import "./Number.scss";
import { SearchBox } from "../Utils/SearchBox";

export interface Props {}

const headers = [
  {
    title: "STT",
  },
  {
    title: "Tên khách hàng",
  },
  {
    title: "Tên dịch vụ",
  },
  {
    title: "Thời gian cấp",
  },
  { title: "Hạn sữ dụng" },
  { title: "Trạng thái" },
  { title: "Nguồn cấp" },
  {},
];

const datas = [
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
];

export const Number: FC<Props> = (props) => {
  return (
    <>
      <div className="number-container">
        {/* Sidebar */}
        <Sidebar active="number" />

        {/* Topbar */}
        <Topbar root="Cấp số" rootNext="Danh sách cấp số" />

        {/* Information */}
        <div className="title">Quản lý cấp số</div>

        <div className="search-box d-flex gap-3">
          {/* Service */}
          <div className="service">
            <span>Tên dịch vụ</span>
            <div className="mt-1 position-relative">
              <input type="text" placeholder="Tất cả" />
              <i className="fa-solid fa-sort-down position-absolute top-50 end-0 translate-middle"></i>
            </div>
          </div>

          {/* Status */}
          <div className="service">
            <span>Tình trạng</span>
            <div className="mt-1 position-relative">
              <input type="text" placeholder="Tất cả" />
              <i className="fa-solid fa-sort-down position-absolute top-50 end-0 translate-middle"></i>
            </div>
          </div>

          {/* Source */}
          <div className="service">
            <span>Nguồn cấp</span>
            <div className="mt-1 position-relative">
              <input type="text" placeholder="Tất cả" />
              <i className="fa-solid fa-sort-down position-absolute top-50 end-0 translate-middle"></i>
            </div>
          </div>

          {/* Time */}
          <div className="service">
            <span>Chọn thời gian</span>
            <div className="mt-1 d-flex align-items-center gap-2">
              <div>
                <input type="date" />
              </div>
              <div>
                <i className="fa-solid fa-caret-right time-icon"></i>
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
          </div>

          {/* Search */}
          <SearchBox />
        </div>

        {/* Table */}
        <Table headers={headers} datas={datas} />

        {/* Add Icon */}
        <AddNewButton icon={addIcon} title="Cấp số mới" />

        {/* Pagigation */}
        <Pagination />
      </div>
    </>
  );
};
