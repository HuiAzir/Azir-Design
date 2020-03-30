import React, { useEffect, useState, useRef } from "react";
import Progress from "./progress";

function useInterval(callback: () => any, delay: number | null) {
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
    if (delay) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default () => {
  const [percent, setPercent] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useInterval(
    () => {
      setPercent(percent =>
        percent + 9 > 100 ? 100 : percent + Math.floor(Math.random() * 10)
      );
      if (percent >= 100) {
        setIsRunning(false);
      }
    },
    isRunning ? 500 : null
  );
  return (
    <div style={{ padding: 10 }}>
      <Progress percent={percent} />
    </div>
  );
};
