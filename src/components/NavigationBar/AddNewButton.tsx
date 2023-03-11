import { FC } from "react";

import "./AddNewButton.scss";

export interface Props {
  icon: string;
  title: string;
}

export const AddNewButton: FC<Props> = (props) => {
  return (
    <>
      <div className="icon-container">
        <img className="icon" src={props.icon} alt="" />
        <span className="text">{props.title}</span>
      </div>
    </>
  );
};
