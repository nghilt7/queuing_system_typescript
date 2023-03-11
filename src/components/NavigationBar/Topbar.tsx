import { FC } from "react";

import "./Topbar.scss";
import bell from "../assets/bell.png";
import avatar from "../assets/avatar.png";
import nextIcon from "../assets/u_angle-right.png";

export interface Props {
  root?: string;
  rootNext?: string;
  profileText?: string;
}

export const Topbar: FC<Props> = (props) => {
  return (
    <>
      <div className="top-bar">
        {props.profileText ? (
          <>
            <div className="text">
              <div>
                <span className="profileText">{props.profileText}</span>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {props.root ? (
          <>
            <div className="text">
              <div>
                <span>{props.root}</span>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {props.rootNext ? (
          <>
            <div className="text-2">
              <img className="nextIcon" src={nextIcon} alt="" />
              <span className="text-next">{props.rootNext}</span>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="bell">
          <img className="bellIcon" src={bell} alt="" />
        </div>

        <div className="info">
          <div className="text-1">
            <span className="greeting">Xin chào</span>
            <span className="name">Lê Quỳnh Ái Vân</span>
          </div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </>
  );
};
