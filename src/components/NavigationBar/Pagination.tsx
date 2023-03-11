import { FC } from "react";

import iconBack from "../assets/pagination-back.png";
import iconNext from "../assets/pagination-next.png";
import "./Pagination.scss";

export interface Props {}

export const Pagination: FC<Props> = (props) => {
  return (
    <div className="pagination-container">
      <span>
        <img src={iconBack} alt="" />
      </span>
      <span className="s-first">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>...</span>
      <span>10</span>
      <span>
        <img src={iconNext} alt="" />
      </span>
    </div>
  );
};
