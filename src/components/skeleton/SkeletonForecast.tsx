import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonForecast() {
  return (
    <div className="hoverGlow border p-8 rounded-3xl">
      <Skeleton className="w-[140px] h-[28px] rounded-lg mb-4" />
      <div className="space-y-4">
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[50px] h-[32px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-text/30 text-end md:text-start">
            <Skeleton className="w-[53px] h-[24px] rounded-lg" />
            <Skeleton className="w-[64px] h-[24px] rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[50px] h-[32px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-text/30 text-end md:text-start">
            <Skeleton className="w-[53px] h-[24px] rounded-lg" />
            <Skeleton className="w-[64px] h-[24px] rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[50px] h-[32px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-text/30 text-end md:text-start">
            <Skeleton className="w-[53px] h-[24px] rounded-lg" />
            <Skeleton className="w-[64px] h-[24px] rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[50px] h-[32px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-text/30 text-end md:text-start">
            <Skeleton className="w-[53px] h-[24px] rounded-lg" />
            <Skeleton className="w-[64px] h-[24px] rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[50px] h-[32px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-text/30 text-end md:text-start">
            <Skeleton className="w-[53px] h-[24px] rounded-lg" />
            <Skeleton className="w-[64px] h-[24px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
