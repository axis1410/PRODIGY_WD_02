"use client";

import { createContext, useContext, useState } from "react";

interface TimeContextType {
  stoppedTime: number;
  setStoppedTime: (time: number) => void;
  clearStoppedTime: () => void;
  laps: any[];
  setLaps: (laps: any) => void;
}

const initialContext: TimeContextType = {
  stoppedTime: 0,
  setStoppedTime: () => {},
  clearStoppedTime: () => {},
  laps: [],
  setLaps: () => {},
};

const TimeContext = createContext<TimeContextType>(initialContext);

const TimeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stoppedTime, setStoppedTime] = useState<number>(0);
  const [laps, setLaps] = useState<any>([]);

  const clearStoppedTime = () => {
    setStoppedTime(0);
  };

  return (
    <TimeContext.Provider value={{ stoppedTime, setStoppedTime, clearStoppedTime, laps, setLaps }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeContextProvider };
