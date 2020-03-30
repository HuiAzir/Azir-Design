import React, { FC } from "react";
import ClassNames from "classnames";
export interface RowProps {
  className?: string;
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  gutter?: number | object | [number, number];
}

const Row: FC<RowProps> = (props) => {
  const { className, align, justify, gutter } = props;
  const classes = ClassNames("azir-row", className, {});
};
Row.defaultProps = {
  align: "top",
  justify: "start",
  gutter: [1, 2],
};
export default Row;
