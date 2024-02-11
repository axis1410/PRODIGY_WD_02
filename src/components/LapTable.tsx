"use client";

import { useTimeContext } from "@/context/TimeContext";
import { useEffect, useState } from "react";

export default function LapTable() {
  const { stoppedTime } = useTimeContext();
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    if (stoppedTime !== 0) {
      setLaps((prevLaps) => [...prevLaps, stoppedTime]);
    }
  }, [stoppedTime]);

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-2">Lap Times</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Lap</th>
            <th className="border border-gray-400 px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lapTime, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{formatTime(lapTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatTime(time: number): string {
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}
