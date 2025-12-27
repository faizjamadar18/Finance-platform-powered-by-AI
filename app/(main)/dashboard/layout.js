import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5 md:px-40">
      <div className="flex items-center justify-between mb-5">
        <h1 className="md:text-6xl text-4xl font-bold tracking-tight">
          Dashboard 
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#0055ff" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}