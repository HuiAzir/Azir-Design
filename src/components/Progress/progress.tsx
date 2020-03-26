import React, { useRef, useEffect } from "react";
import classNames from "classnames";
export type ProgressType = "line" | "circle";
export interface ProgressProps {
  type?: ProgressType;
  percent?: number;
  strokeColor?: string; //  进度条的颜色
  trailColor?: string; //  未完成分段的颜色
  height?: string;
  width?: string; //  进度条的长度
}
const Progress: React.FC<ProgressProps> = (props) => {
  const { type, height, percent, width } = props;
  const progressOuter = useRef<HTMLDivElement>(null);
  const baseClasses = classNames("azir-progress", {
    [`azir-progress-${type}`]: type,
  });
  const progressBgStyle: React.CSSProperties = {
    height,
    width: percent + "%",
  };
  const classes = classNames(baseClasses);

  useEffect(() => {
    if (width && progressOuter.current) {
      progressOuter.current.style.width = `calc(3em + ${width} + 10px)`;
    }
  }, [width]);

  return (
    <div className={classes} ref={progressOuter}>
      <div className="azir-progress-outer">
        <div className="azir-progress-inner">
          <div className="azir-progress-bg" style={progressBgStyle}></div>
        </div>
      </div>
      <span className="title">{percent + "%"}</span>
    </div>
  );
};
Progress.defaultProps = {
  type: "line",
  percent: 0,
  height: "8px",
};
export default Progress;
