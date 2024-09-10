import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDetails() {
  return (
    <div className="lg:col-span-3 border p-8 rounded-3xl h-fit">
      <Skeleton className="w-1/6 h-[28px] rounded-lg mb-4" />
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="p-8 border rounded-3xl">
            <div className="mb-8">
              <div className="flex flex-col md:justify-between md:flex-row md:items-center space-y-4 md:space-y-0">
                <Skeleton className="w-[120px] h-[24px] rounded-lg" />
                <div className="text-gray-950 px-3 rounded-full w-fit"></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-4 md:space-y-0 mb-8">
              <div>
                <Skeleton className="w-[56px] h-[56px] rounded-full" />
              </div>
              <div className="flex flex-col lg:items-center">
                <Skeleton className="w-[66px] h-[64px] rounded-lg" />
              </div>
              <div className="flex flex-col lg:items-center">
                <Skeleton className="w-[66px] h-[64px] rounded-lg" />
              </div>
              <div className="flex flex-col lg:items-center">
                <Skeleton className="w-[66px] h-[64px] rounded-lg" />
              </div>
              <div className="flex flex-col lg:items-center">
                <Skeleton className="w-[66px] h-[64px] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="p-8 border rounded-3xl">
            <div className="mb-8">
              <Skeleton className="w-[120px] h-[24px] rounded-lg" />
            </div>
            <div className="grid lg:grid-cols-2 mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center md:items-end justify-between lg:justify-start gap-8">
                <div>
                  <Skeleton className="w-[56px] h-[56px] rounded-full" />
                </div>
                <div>
                  <Skeleton className="w-[85px] h-[64px] rounded-lg" />
                </div>
              </div>
              <div className="flex items-center md:items-end justify-between lg:justify-start gap-8">
                <div>
                  <Skeleton className="w-[56px] h-[56px] rounded-full" />
                </div>
                <div>
                  <Skeleton className="w-[85px] h-[64px] rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 border rounded-3xl">
          <div className="mb-8">
            <Skeleton className="w-[65px] h-[24px] rounded-lg" />
          </div>
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="w-[56px] h-[56px] rounded-full" />
            <Skeleton className="w-[58px] h-[41px] rounded-lg" />
          </div>
        </div>
        <div className="p-8 border rounded-3xl">
          <div className="mb-8">
            <Skeleton className="w-[65px] h-[24px] rounded-lg" />
          </div>
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="w-[56px] h-[56px] rounded-full" />
            <Skeleton className="w-[116px] h-[41px] rounded-lg" />
          </div>
        </div>
        <div className="p-8 border rounded-3xl">
          <div className="mb-8">
            <Skeleton className="w-[65px] h-[24px] rounded-lg" />
          </div>
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="w-[56px] h-[56px] rounded-full" />
            <Skeleton className="w-[58px] h-[41px] rounded-lg" />
          </div>
        </div>
        <div className="p-8 border rounded-3xl">
          <div className="mb-8">
            <Skeleton className="w-[65px] h-[24px] rounded-lg" />
          </div>
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="w-[56px] h-[56px] rounded-full" />
            <Skeleton className="w-[58px] h-[41px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
