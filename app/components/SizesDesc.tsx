"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const SizesDesc = ({ sizeData }: any) => {
  const [Index, setIndex] = useState(0);

  return (
    <div className="flex flex-col justify-evenly w-full mb-2">
      <p className="text-l font-bold text-gray-800 md:text-xl mb-1">Our Sizes in inches</p>
      <div className="flex justify-start flex-wrap w-full gap-4">
        {sizeData?.map((s: any, index: number) => (
          <Button
            key={index}
            onClick={() => setIndex(index)}
            className={` ${Index === index ? "bg-black text-white  hover:bg-black" : "text-white"}`}
          >
            {s.size}
          </Button>
        ))}
      </div>
      <p className="mt-4 text-base text-gray-500 tracking-wide">{sizeData[Index].description}</p>
    </div>
  );
};

export default SizesDesc;
