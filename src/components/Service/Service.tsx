import { FC } from "react";
import "./Service.scss";
import { AddNewButton } from "../NavigationBar/AddNewButton";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import { SearchBox } from "../Utils/SearchBox";

const headers = [
  {
    title: "Mã dịch vụ",
  },
  {
    title: "Tên dịch vụ",
  },
  {
    title: "Mô tả",
  },
  {
    title: "Trạng thái hoạt động",
  },
  {},
  {},
];

const datas = [
  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },
  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },
];

export interface Props {}

export const Service: FC<Props> = (props) => {
  return (
    <>
      <div className="service-container">
        {/* Sidebar */}
        <Sidebar active="service" />

        {/* Topbar */}
        <Topbar root="Dịch vụ" rootNext="Danh sách dịch vụ" />

        <div className="title">Quản lý dịch vụ</div>

        {/* Seach box */}
        <div className="search-box">
          <div className="d-flex gap-3">
            <div className="status-action">
              <span>Trạng thái hoạt động</span>
              <div className="mt-1 position-relative">
                <input type="text" placeholder="Tất cả" />
                <i className="fa-solid fa-sort-down position-absolute top-50 end-0 translate-middle"></i>
              </div>
            </div>

            <div className="time-action">
              <span>Chọn thời gian</span>
              <div className="mt-1 d-flex align-items-center gap-2">
                <div>
                  <input type="date" />
                </div>
                <div>
                  <i className="fa-solid fa-caret-right"></i>
                </div>
                <div>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>

          <div className="search-field">
            <SearchBox />
          </div>
        </div>

        {/* Table */}
        <Table headers={headers} datas={datas} />

        {/* Add icon */}
        <AddNewButton icon={addIcon} title="Thêm dịch vụ" />

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
};
