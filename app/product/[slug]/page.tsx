import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import SizesDesc from "@/app/components/SizesDesc";
import { simplifiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          sizes,
          content,
          "categoryName": category->name,
          price_id
      }`;

  const data = await client.fetch(query);
  return data;
}

async function getRelatedData() {
  const x = Math.floor(Math.random() * 11);
  const query = `*[_type == "product"][${x}...${x + 4}] | order(_createdAt asc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({ params }: { params: { slug: string } }) {
  const data: any = await getData(params.slug);
  console.log(data.content);

  const Relateddata: simplifiedProduct[] = await getRelatedData();

  const x = parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid mt-4 gap-8 md:grid-cols-2">
          <ImageGallery images={data?.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">{data?.categoryName}</span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data?.name}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">{x}</span>
                <Star className="h-5 w-5" />
              </Button>

              {/* <span className="text-sm text-gray-500 transition duration-100">56 Ratings</span> */}
            </div>

            <SizesDesc sizeData={data?.sizes} />

            <div className="flex gap-2.5">
              <AddToBag
                sizeData={data?.sizes}
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
          </div>
        </div>
        {/* <p className="mt-4 w-full text-base text-gray-500 tracking-wide">{data.description}</p> */}

        <PortableText components={components} listNestingMode="direct" value={data?.content} />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related Searches</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Relateddata.map((product, index) => (
            <div key={index} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
