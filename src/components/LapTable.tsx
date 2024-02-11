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
      {/* <h2 className="text-xl font-bold mb-2">Lap Times</h2> */}
      <table className="w-full border-collapse border-gray-400 text-center rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2 w-1/2">Lap</th>
            <th className="border border-gray-400 px-4 py-2 w-1/2">Time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lapTime, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2 w-1/2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2 w-1/2">{formatTime(lapTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
