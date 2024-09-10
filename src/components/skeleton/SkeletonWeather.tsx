import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonWeather() {
  return (
    <div className="border p-8 rounded-3xl h-fit space-y-4">
      <div className="flex flex-col justify-between gap-4">
        <div className="border-b pb-4 space-y-4">
          <Skeleton className="w-12 h-[28px] rounded-lg" />
          <div className="grid grid-cols-2 items-center gap-4">
            <Skeleton className="w-3/4 h-[72px] rounded-lg" />
            <Skeleton className="w-[60px] h-[60px] rounded-full" />
          </div>
          <Skeleton className="w-1/3 h-[24px] rounded-lg mb-4" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[24px] h-[24px] rounded-full" />
            <Skeleton className="w-1/3 h-[24px] rounded-lg" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="w-[24px] h-[24px] rounded-full" />
            <Skeleton className="w-1/3 h-[24px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
