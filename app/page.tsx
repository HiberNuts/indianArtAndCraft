import Hero from "./components/Hero";
import Newest from "./components/Newest";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import SwiperGallery from "../app/components/SwiperGallery";
import { client } from "./lib/sanity";
import { simplifiedProduct } from "./interface";
// export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
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

export default async function Home() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="flex flex-col">
      <Hero />
      <Newest />
      <SwiperGallery data={data} />
      <Footer style={{ backgroundColor: "#7c3aed" }} container>
        <div className="w-full bg-primary !text-white">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              {/* <FooterBrand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              /> */}
              <h1 className="text-2xl text-white md:text-4xl font-bold">
                India Art <span className="">& Craft</span>
              </h1>
            </div>
            <div className="grid grid-cols-2 justify-between gap-8 sm:mt-4 text-white sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle style={{ color: "white" }} title="Contact Us" />
                <FooterLinkGroup col>
                  <FooterLink style={{ color: "white" }} href="tel:+919915907188">
                    +91 9915907188
                  </FooterLink>
                  <FooterLink style={{ color: "white" }} href="mailto:info@indiaartandcraft.com">
                    info@indiaartandcraft.com
                  </FooterLink>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle style={{ color: "white" }} title="Address" />
                <FooterLinkGroup col>
                  <FooterLink style={{ color: "white" }} href="#">
                    Sultanwind road, Amritsar.
                  </FooterLink>
                  {/* <FooterLink href="#">Terms &amp; Conditions</FooterLink> */}
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div style={{ color: "white" }} className="w-full  sm:flex sm:items-center sm:justify-between">
            <FooterCopyright style={{ color: "white" }} href="#" by="Indiaartandcraft" year={2024} />
          </div>
        </div>
      </Footer>
    </div>
  );
}
