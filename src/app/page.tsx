import LapTable from "@/components/LapTable";
import Stopwatch from "@/components/Stopwatch";
import { TimeContextProvider } from "@/context/TimeContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <TimeContextProvider>
        <Stopwatch />
        <LapTable />
      </TimeContextProvider>
    </div>
  );
}
