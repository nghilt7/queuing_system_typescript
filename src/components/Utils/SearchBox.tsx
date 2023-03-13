import { FC } from "react";
import "./SearchBox.scss";

export interface Props {}

export const SearchBox: FC<Props> = (props) => {
  return (
    <div className="search-container">
      <span>Từ khóa</span>
      <div className="search position-relative mt-1">
        <input type="text" placeholder="Nhập từ khóa" />
        <i className="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle"></i>
      </div>
    </div>
  );
};
