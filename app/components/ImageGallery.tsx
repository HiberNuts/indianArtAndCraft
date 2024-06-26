"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer border-purple-400"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg  lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-[500px] w-[500px] rounded-lg object-contain object-center border-2"
        />
      </div>
    </div>
  );
}
