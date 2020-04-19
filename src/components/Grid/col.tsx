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

interface ColCSSProps {
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
}
type map = {
  [key: string]: any;
};
type mediaScreen = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
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
  xs?: ColCSSProps;
  sm?: ColCSSProps;
  md?: ColCSSProps;
  lg?: ColCSSProps;
  xl?: ColCSSProps;
  xxl?: ColCSSProps;
}

const Col: FC<ColProps> = props => {
  const {
    className,
    style = {},
    span,
    offset,
    children,
    pull,
    push,
    order,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
  } = props;
  const [colStyle, setColStyle] = useState<CSSProperties>({ ...style });
  const [classes, setClasses] = useState<string>(
    ClassNames("azir-col", className, {
      [`azir-col-span-${span}`]: span,
      [`azir-col-offset-${offset}`]: offset,
      [`azir-col-pull-${pull}`]: pull,
      [`azir-col-push-${push}`]: push,
      [`azir-col-order-${order}`]: order
    })
  );
  const { gutter } = useContext(RowContext);

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
  // 响应式 xs,sm,md,lg,xl,xxl
  useEffect(() => {
    function sc(size: mediaScreen, value: map): Array<string> {
      const t: Array<string> = [];
      Object.keys(value).forEach(key => {
        t.push(`azir-col-${size}-${key}-${value[key]}`);
      });
      return t;
    }
    xs && setClasses(classes => ClassNames(classes, sc("xs", xs)));
    sm && setClasses(classes => ClassNames(classes, sc("sm", sm)));
    md && setClasses(classes => ClassNames(classes, sc("md", md)));
    lg && setClasses(classes => ClassNames(classes, sc("lg", lg)));
    xl && setClasses(classes => ClassNames(classes, sc("xl", xl)));
    xxl && setClasses(classes => ClassNames(classes, sc("xxl", xxl)));
  }, [xs, sm, md, lg, xl, xxl]);

  return (
    <div className={classes} style={colStyle}>
      {children}
    </div>
  );
};
Col.defaultProps = {
  offset: 0,
  pull: 0,
  push: 0,
  span: 24
};
Col.displayName = "Col";

export default Col;
