"use client";

import { createContext, useContext, useState } from "react";

interface TimeContextType {
  stoppedTime: number;
  setStoppedTime: (time: number) => void;
  clearStoppedTime: () => void;
}

const initialContext: TimeContextType = {
  stoppedTime: 0,
  setStoppedTime: () => {},
  clearStoppedTime: () => {},
};

const TimeContext = createContext<TimeContextType>(initialContext);

export const useTimeContext = () => useContext(TimeContext);

const TimeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stoppedTime, setStoppedTime] = useState<number>(0);

  const clearStoppedTime = () => {
    setStoppedTime(0);
  };

  return (
    <TimeContext.Provider value={{ stoppedTime, setStoppedTime, clearStoppedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeContextProvider };
