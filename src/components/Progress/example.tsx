import React, { useEffect, useState, useRef } from "react";
import Progress from "./progress";

function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef<() => any>();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default () => {
  const [percent, setPercent] = useState(30);
  return (
    <div style={{ padding: 10 }}>
      <Progress percent={percent} />
    </div>
  );
};
