import React from "react";

import SkeletonWeather from "@/components/skeleton/SkeletonWeather";
import SkeletonForecast from "@/components/skeleton/SkeletonForecast";
import SkeletonDetails from "@/components/skeleton/SkeletonDetails";
import SkeletonHourly from "@/components/skeleton/SkeletonHourly";

export default function loading() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <SkeletonWeather />
        <SkeletonForecast />
      </div>
      <div className="col-span-3 flex flex-col gap-8">
        <SkeletonDetails />
        <SkeletonHourly />
      </div>
    </>
  );
}
