import { FC } from "react";

import "./Table.scss";

interface Field {
  text: string;
}

interface Datas {
  rows: Field[];
}

interface HeaderType {
  title?: string;
}

export interface Props {
  headers: HeaderType[];
  datas?: Datas[];
}

export const Table: FC<Props> = (props) => {
  return (
    <>
      <div className="table-display">
        <table className="table table-striped">
          <thead>
            <tr>
              {props.headers &&
                props.headers.length > 0 &&
                props.headers?.map((header, index) => {
                  return <th key={index}>{header.title}</th>;
                })}
            </tr>
          </thead>

          <tbody>
            {props.datas &&
              props.datas.length > 0 &&
              props.datas.map((data, index) => {
                return (
                  <tr key={index}>
                    {data &&
                      data.rows.length > 0 &&
                      data.rows.map((row, index) => {
                        return (
                          <>
                            {row.text.includes("...") ? (
                              <>
                                <td key={index}>
                                  <span>{row.text}</span>
                                  <div className="blueText">Xem thêm</div>
                                </td>
                              </>
                            ) : (
                              <>
                                <td
                                  className={
                                    row.text === "Chi tiết" ||
                                    row.text === "Cập nhật"
                                      ? "blueText"
                                      : ""
                                  }
                                  key={index}
                                >
                                  {row.text}
                                </td>
                              </>
                            )}
                          </>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
