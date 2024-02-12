"use client";

import { useTimeContext } from "@/hooks/useTimeContext";
import { useEffect, useState } from "react";

export default function Stopwatch() {
  const { setLaps, setStoppedTime, clearStoppedTime } = useTimeContext();
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    if (isRunning) {
      setStoppedTime(time);
    }
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    clearStoppedTime();
    setLaps([]);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <p className="text-[80px] text-center">
        {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="flex justify-center">
        <button
          className="m-[20px] border-0 px-10 py-2 rounded-md cursor-pointer bg-indigo-500 text-white"
          onClick={startAndStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="m-[20px] border-0 px-10 py-2 rounded-md cursor-pointer bg-rose-500 text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
