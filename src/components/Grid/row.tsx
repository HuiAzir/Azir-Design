import React, {
  FC,
  CSSProperties,
  useEffect,
  useState,
  createContext,
  ReactNode,
  FunctionComponentElement
} from "react";
import ClassNames from "classnames";
import { ColProps } from "./col";
export type gutter = number | [number, number];
export interface RowContext {
  gutter: gutter;
}
export interface RowProps {
  className?: string;
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  gutter?: gutter;
  style?: CSSProperties;
  children?: ReactNode;
}
export const RowContext = createContext<RowContext>({ gutter: 0 });
const Row: FC<RowProps> = props => {
  const { className, align, justify, gutter, children, style = {} } = props;
  const [rowStyle, setRowStyle] = useState<CSSProperties>(style);
  const classes = ClassNames("azir-row", className, {
    [`azir-row-${align}`]: align,
    [`azir-row-${justify}`]: justify
  });
  const passedContext: RowContext = {
    gutter: gutter!
  };
  useEffect(() => {
    if (Object.prototype.toString.call(gutter) === "[object Number]") {
      const margin = gutter as number;
      setRowStyle(style => ({
        margin: `0 ${-margin / 2}px`,
        ...style
      }));
    }
    if (Object.prototype.toString.call(gutter) === "[object Array]") {
      const [marginX, marginY] = gutter as [number, number];
      setRowStyle(style => ({
        margin: `${-marginY / 2}px ${-marginX / 2}px ${marginY / 2}px`,
        ...style
      }));
    }
  }, [gutter]);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      try {
        const childElement = child as FunctionComponentElement<ColProps>;
        const { displayName } = childElement?.type;
        if (displayName === "Col") {
          return child;
        }
      } catch (e) {
        console.error("Warning: Row has a child which is not a Col component");
        console.error(e);
      }
    });
  };
  return (
    <div className={classes} style={rowStyle}>
      <RowContext.Provider value={passedContext}>
        {renderChildren()}
      </RowContext.Provider>
    </div>
  );
};
Row.defaultProps = {
  align: "top",
  justify: "start",
  gutter: 0
};
export default Row;
