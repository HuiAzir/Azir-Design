import React, {
  FC,
  ReactNode,
  CSSProperties,
  useContext,
  useEffect,
  useState
} from "react";
import ClassNames from "classnames";
import { RowContext } from "./row";
export interface ColProps {
  className?: string;
  flex?: string | number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

const Col: FC<ColProps> = props => {
  const { className, style = {}, span, offset, children, pull, push } = props;
  const [colStyle, setColStyle] = useState<CSSProperties>({ ...style });
  const { gutter } = useContext(RowContext);

  const classes = ClassNames("azir-col", className, {
    [`azir-col-${span}`]: span,
    [`azir-col-offset-${offset}`]: offset,
    [`azir-col-pull-${pull}`]: pull,
    [`azir-col-push-${push}`]: push
  });

  // 水平垂直间距
  useEffect(() => {
    if (Object.prototype.toString.call(gutter) === "[object Number]") {
      const padding = gutter as number;
      if (padding >= 0) {
        setColStyle(style => ({
          padding: `${padding / 2}px`,
          ...style
        }));
      }
    }
    if (Object.prototype.toString.call(gutter) === "[object Array]") {
      const [paddingX, paddingY] = gutter as [number, number];
      if (paddingX >= 0 && paddingY >= 0) {
        setColStyle(style => ({
          padding: `${paddingY / 2}px ${paddingX / 2}px`,
          ...style
        }));
      }
    }
  }, [gutter]);

  return (
    <div className={classes} style={colStyle}>
      {children}
    </div>
  );
};
Col.defaultProps = {
  offset: 0,
  order: 0,
  pull: 0,
  push: 0,
  span: 24
};
Col.displayName = "Col";

export default Col;
