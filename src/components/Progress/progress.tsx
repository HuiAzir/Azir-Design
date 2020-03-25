import React from "react";
import classNames from "classnames";
export type ProgressType = "line" | "circle";
export interface ProgressProps {
  type?: ProgressType;
  percent?: number;
  strokeColor?: string; //  进度条的颜色
  trailColor?: string; //  未完成分段的颜色
  height?: number;
}
const Progress: React.FC<ProgressProps> = (props) => {
  const { type, height, percent } = props;
  let baseClasses = classNames("azir-progress", {
    [`azir-progress-${type}`]: type,
  });
  const classes = classNames(baseClasses);
  const style: React.CSSProperties = {
    height: height + "px",
    width: percent + "%",
  };
  return (
    <div className={classes}>
      <div className="azir-progress-outer">
        <div className="azir-progress-inner">
          <div className="azir-progress-bg" style={style}></div>
        </div>
      </div>
      <span className="title">{percent + "%"}</span>
    </div>
  );
};
Progress.defaultProps = {
  type: "line",
  percent: 0,
  height: 8,
};
export default Progress;
