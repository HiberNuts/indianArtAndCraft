"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a href={value?.href} target={target}>
          {children}
        </a>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-l">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xs">{children}</h5>,
    blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => <h2 className="text-lg text-primary text-purple-700">{children}</h2>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li style={{ listStyleType: "circle", marginLeft: "20px" }}>{children}</li>,
    number: ({ children }) => (
      <li style={{ listStyleType: "decimal", marginLeft: "20px" }} className="mt-lg">
        {children}
      </li>
    ),
    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

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
      <p className="mt-4 text-base text-gray-500 tracking-wide">
        <PortableText components={components} listNestingMode="direct" value={sizeData[Index]?.content} />
      </p>

    </div>
  );
};

export default SizesDesc;
