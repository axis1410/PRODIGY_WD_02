"use client";

import { useTimeContext } from "@/context/TimeContext";
import formatTime from "@/utils/formatTime";
import { useEffect } from "react";

export default function LapTable() {
  const { stoppedTime, laps, setLaps } = useTimeContext();

  useEffect(() => {
    if (stoppedTime !== 0) {
      setLaps((prevLaps: any) => [...prevLaps, stoppedTime]);
    }
  }, [stoppedTime, setLaps]);

  return (
    <div className="mt-5 mb-10 w-[540px]">
      <div className="bg-gray-200 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Lap Times</h2>
        <div className="grid grid-cols-1 gap-4">
          {laps.map((lapTime, index) => (
            <div key={index} className="border border-gray-400 rounded-md p-2">
              <p className="font-bold">Lap {index + 1}</p>
              <p>{formatTime(lapTime)}</p>
            </div>
          ))}
        </div>
        {laps.length === 0 && <p>No laps recorded yet.</p>}
      </div>
    </div>
  );
}
