import LapTable from "@/components/LapTable";
import Stopwatch from "@/components/Stopwatch";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Stopwatch />
      <LapTable />
    </div>
  );
}
