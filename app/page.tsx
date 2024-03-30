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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why choose us?
            </h2>
            
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 justify-center align-middle">
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="#ffffff"
                >
                  <path d="M12,24c-1.611,0-3.131-.667-4.217-1.82-1.578,.043-3.129-.555-4.269-1.694-1.139-1.14-1.741-2.686-1.695-4.269C-.582,14.068-.582,9.932,1.819,7.783c-.046-1.583,.556-3.129,1.695-4.269,1.141-1.14,2.686-1.752,4.269-1.695,2.148-2.402,6.286-2.402,8.434,0,1.571-.057,3.128,.555,4.269,1.694,1.139,1.14,1.741,2.686,1.695,4.269,2.401,2.149,2.401,6.285,0,8.434,.046,1.583-.556,3.129-1.695,4.269-1.141,1.14-2.696,1.738-4.269,1.695-1.086,1.153-2.605,1.82-4.217,1.82Zm-3.563-4.897c.493,0,.962,.243,1.244,.662,1.031,1.628,3.608,1.628,4.639,0,.337-.499,.937-.752,1.53-.634,.92,.178,1.857-.108,2.515-.767,.657-.658,.944-1.598,.767-2.515-.114-.591,.135-1.193,.634-1.529,1.628-1.031,1.628-3.609,0-4.64-.499-.336-.748-.938-.634-1.529,.178-.917-.109-1.857-.767-2.515-.658-.658-1.595-.944-2.515-.767-.587,.12-1.193-.134-1.53-.634-1.031-1.628-3.608-1.628-4.639,0-.336,.499-.937,.752-1.53,.634-.919-.178-1.856,.109-2.515,.767-.657,.658-.944,1.598-.767,2.515,.114,.591-.135,1.193-.634,1.529-1.628,1.031-1.628,3.609,0,4.64,.499,.336,.748,.938,.634,1.529-.178,.917,.109,1.857,.767,2.515,.659,.658,1.596,.945,2.515,.767,.095-.019,.191-.028,.286-.028Zm4.563-3.905l4-3.58c.617-.552,.67-1.501,.118-2.118-.553-.617-1.501-.671-2.118-.117l-4.049,3.638c-.031-.032-1.989-1.671-1.989-1.671-.635-.531-1.583-.447-2.112,.188-.532,.636-.447,1.582,.188,2.113l1.847,1.544c.558,.531,1.286,.822,2.06,.822,.8,0,1.551-.311,2.056-.819Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">High-Quality Craftsmanship</h3>
              <p className="text-white">
                Highlight the superior quality of your chess boards, emphasizing premium materials, expert
                craftsmanship, and attention to detail.
              </p>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="m20.5,2h-5c-1.93,0-3.5,1.57-3.5,3.5v1.705l-3.143-5.206c-.361-.625-1.009-.999-1.731-.999s-1.37.374-1.733,1.001L.271,10.964c-.363.635-.361,1.392.006,2.025.367.633,1.023,1.011,1.755,1.011h3.26c-.189.634-.292,1.305-.292,2,0,3.86,3.141,7,7,7s7-3.14,7-7c0-.695-.102-1.366-.292-2h1.792c1.93,0,3.5-1.57,3.5-3.5v-5c0-1.93-1.57-3.5-3.5-3.5ZM2.031,13c-.371,0-.704-.191-.89-.513-.187-.321-.188-.705-.003-1.027L6.26,2.5c.363-.626,1.366-.634,1.737.007l3.92,6.494c-2.751.032-5.126,1.66-6.241,3.999h-3.645Zm9.969,9c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Zm11-11.5c0,1.378-1.121,2.5-2.5,2.5h-2.176c-.988-2.075-2.969-3.59-5.324-3.928v-3.572c0-1.378,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5v5Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Variety of Options</h3>
              <p className="text-white">Choose from our wide range of categories of chess boards!</p>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="#ffffff"
                >
                  <path d="M1.879,17.878a11.259,11.259,0,0,0-1.835,4,1.739,1.739,0,0,0,2.083,2.082,11.263,11.263,0,0,0,3.994-1.834h0A3,3,0,0,0,1.879,17.878Zm2.828,2.829h0a10.07,10.07,0,0,1-2.6,1.184,10.1,10.1,0,0,1,1.184-2.6,1,1,0,0,1,1.414,1.414ZM18,8.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,18,8.5ZM20.972,0h0A15.487,15.487,0,0,0,8.634,6.006,11.065,11.065,0,0,0,4.065,7.169,8.1,8.1,0,0,0,.243,10.835a2.955,2.955,0,0,0,.25,2.8A3.009,3.009,0,0,0,3.014,15H5.5A3.517,3.517,0,0,1,9,18.5v2.486a3.009,3.009,0,0,0,1.363,2.521,2.955,2.955,0,0,0,2.8.25,8.1,8.1,0,0,0,3.666-3.822,11.065,11.065,0,0,0,1.163-4.569A15.507,15.507,0,0,0,24,3,3.009,3.009,0,0,0,20.972,0ZM4.346,13H3.014a1,1,0,0,1-.85-.461.95.95,0,0,1-.085-.91A6.176,6.176,0,0,1,4.962,8.957a8.993,8.993,0,0,1,1.993-.72A34.361,34.361,0,0,0,4.346,13Zm10.7,6.038a6.18,6.18,0,0,1-2.671,2.883.951.951,0,0,1-.911-.085,1,1,0,0,1-.461-.85V19.654a34.361,34.361,0,0,0,4.763-2.609A8.993,8.993,0,0,1,15.043,19.038Zm.135-4.02a29.92,29.92,0,0,1-4.271,2.471,5.5,5.5,0,0,0-4.4-4.4A29.92,29.92,0,0,1,8.982,8.822C12.35,4.124,15.84,2.147,21,2a1,1,0,0,1,1,.972C21.853,8.16,19.876,11.65,15.178,15.018Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Fast and Reliable Shipping</h3>
              <p className="text-white">
                We understand that you're eager to receive your new chess board, which is why we prioritize fast and
                reliable shipping. With our streamlined shipping process and efficient delivery partners, you can expect
                your order to arrive promptly and in pristine condition, ready for your next game.
              </p>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="#ffffff"
                >
                  <path d="M24,12c0-1.626-.714-3.16-1.925-4.124,.14-1.622-.44-3.211-1.59-4.362-1.15-1.149-2.734-1.731-4.277-1.555-1.048-1.245-2.582-1.959-4.208-1.959s-3.16,.714-4.124,1.925c-1.624-.14-3.212,.439-4.362,1.59-1.15,1.15-1.729,2.74-1.555,4.277-1.245,1.048-1.959,2.582-1.959,4.208s.714,3.16,1.925,4.124c-.14,1.622,.44,3.212,1.59,4.362,1.15,1.151,2.744,1.732,4.277,1.555,1.048,1.245,2.582,1.959,4.208,1.959s3.16-.714,4.124-1.925c1.618,.139,3.21-.439,4.361-1.59,1.149-1.15,1.729-2.74,1.555-4.277,1.246-1.048,1.96-2.582,1.96-4.208Zm-3.247,2.678c-.479,.403-.724,.993-.67,1.617,.088,1.033-.28,2.045-1.012,2.776-.732,.732-1.742,1.099-2.776,1.012-.626-.051-1.213,.191-1.616,.67-.668,.793-1.644,1.248-2.679,1.248s-2.011-.455-2.679-1.248c-.367-.435-.887-.676-1.447-.676-.056,0-.113,.002-.169,.007-1.027,.089-2.044-.28-2.776-1.012-.731-.732-1.1-1.744-1.011-2.776,.053-.624-.19-1.212-.67-1.617-.793-.667-1.248-1.644-1.248-2.678s.455-2.011,1.248-2.679c.479-.404,.723-.993,.669-1.617-.088-1.032,.28-2.044,1.012-2.776,.732-.731,1.744-1.097,2.776-1.011,.621,.049,1.212-.191,1.617-.67,.667-.793,1.644-1.248,2.678-1.248s2.011,.455,2.679,1.248c.403,.478,.991,.726,1.617,.669,1.025-.084,2.043,.28,2.775,1.012,.731,.731,1.1,1.744,1.012,2.776-.054,.624,.19,1.213,.67,1.617,.792,.667,1.247,1.644,1.247,2.678s-.455,2.011-1.247,2.678Zm-4.753-.678c0,1.654-1.346,3-3,3v1c0,.552-.448,1-1,1s-1-.448-1-1v-1h-.268c-1.068,0-2.063-.574-2.598-1.499-.276-.478-.113-1.089,.365-1.366,.477-.277,1.089-.113,1.366,.365,.178,.308,.511,.5,.867,.5h2.268c.552,0,1-.449,1-1,0-.378-.271-.698-.644-.76l-3.042-.507c-1.341-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1c0-.552,.448-1,1-1s1,.448,1,1v1h.268c1.067,0,2.063,.575,2.598,1.5,.277,.478,.113,1.089-.364,1.366-.48,.276-1.092,.113-1.366-.365-.179-.309-.511-.5-.867-.5h-2.268c-.551,0-1,.449-1,1,0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Competitive Pricing</h3>
              <p className="text-white">
                Despite our unwavering commitment to quality, we believe that luxury shouldn't come with a luxury price
                tag. That's why we offer competitive pricing on all of our chess boards, ensuring that exceptional
                craftsmanship
              </p>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="m23.268.716c-.975-.975-2.561-.976-3.535,0l-1.592,1.595s-.008.004-.011.007c-.003.003-.004.008-.007.011l-5.804,5.817c-.838.838-1.318,1.997-1.318,3.182v1.172c0,.276.224.5.5.5h1.172c1.185,0,2.344-.48,3.182-1.318l7.414-7.431c.473-.473.732-1.101.732-1.768s-.26-1.296-.732-1.768Zm-8.121,10.259c-.651.651-1.554,1.025-2.475,1.025h-.672v-.672c0-.921.374-1.823,1.025-2.475l5.46-5.472,2.121,2.121-5.46,5.472Zm7.414-7.431l-1.248,1.25-2.121-2.121,1.248-1.25c.584-.584,1.537-.584,2.121,0,.283.283.439.659.439,1.061s-.156.777-.439,1.061Zm.115,12.47c.179.644.096,1.318-.234,1.899-.328.581-.864.999-1.508,1.178-.645.178-1.317.096-1.899-.235l-.751-.425c-1.063,1.041-2.358,1.796-3.783,2.208v.861c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-.861c-1.425-.412-2.72-1.167-3.783-2.208l-.752.426c-.582.33-1.258.409-1.898.234-.644-.179-1.18-.597-1.509-1.179-.329-.58-.412-1.255-.233-1.898.178-.644.597-1.18,1.178-1.509l.748-.423c-.166-.691-.25-1.391-.25-2.082s.084-1.391.25-2.082l-.748-.423c-.581-.33-1-.865-1.178-1.509-.179-.644-.096-1.318.234-1.899.328-.581.864-.999,1.508-1.178.645-.176,1.317-.096,1.899.235l.751.425c1.063-1.041,2.358-1.796,3.783-2.208v-.861c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v1.246c0,.23-.158.432-.383.486-1.513.366-2.878,1.162-3.947,2.303-.159.168-.41.205-.611.094l-1.086-.614c-.349-.198-.754-.246-1.14-.142-.386.107-.707.358-.904.707-.198.349-.248.753-.141,1.139.106.387.357.708.707.906l1.082.612c.201.114.298.351.234.572-.207.727-.312,1.464-.312,2.19s.104,1.464.312,2.19c.063.222-.033.458-.234.572l-1.083.613c-.349.197-.6.519-.706.904-.107.387-.058.791.14,1.139.198.35.52.601.905.708.386.106.79.057,1.139-.141l1.087-.615c.202-.11.453-.074.611.094,1.069,1.141,2.435,1.937,3.947,2.303.225.055.383.256.383.486v1.246c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-1.246c0-.23.158-.432.383-.486,1.513-.366,2.878-1.162,3.947-2.303.158-.169.409-.206.611-.094l1.086.614c.35.198.755.248,1.14.142.386-.107.707-.358.904-.707.198-.349.248-.753.141-1.14-.106-.386-.357-.707-.706-.904l-1.083-.613c-.201-.114-.298-.351-.234-.572.207-.727.312-1.464.312-2.19,0-.471-.044-.944-.129-1.409-.051-.271.129-.532.4-.582.267-.054.532.128.582.4.098.524.146,1.06.146,1.591,0,.691-.084,1.391-.25,2.082l.748.423c.581.329,1,.865,1.178,1.509Zm-14.398-5.48c-.444,1.128-.349,2.402.269,3.59.294.564.767,1.037,1.331,1.331,1.187.617,2.461.712,3.59.269,1.079-.426,1.92-1.297,2.306-2.39.094-.26.379-.396.639-.305.26.093.396.378.305.639-.483,1.366-1.534,2.454-2.883,2.985-.587.232-1.204.347-1.829.347-.866,0-1.747-.221-2.588-.658-.746-.387-1.37-1.011-1.757-1.757-.754-1.447-.864-3.017-.312-4.417.531-1.349,1.619-2.399,2.985-2.883.261-.093.545.044.639.305.092.261-.045.546-.305.639-1.093.386-1.964,1.227-2.39,2.306Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Customization Options</h3>
              <p className="text-white">
                Make your chess board truly one-of-a-kind with our customization options. Whether you're commemorating a
                special occasion, personalizing a gift, or simply adding a unique touch to your own board
              </p>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="#ffffff"
                >
                  <path d="M23.472,16.194l-1.641-2.486-1.668,1.1L21.8,17.3a1.1,1.1,0,0,1,.056,1.154,1.151,1.151,0,0,1-1.032.608H12.879l1.478-1.475-1.412-1.416-2.523,2.517a2.009,2.009,0,0,0,.01,2.843L12.951,24l1.4-1.427-1.542-1.515h8.019A3.164,3.164,0,0,0,23.621,19.4,3.077,3.077,0,0,0,23.472,16.194Z" />
                  <path d="M11.76,3.013a1.2,1.2,0,0,1,.994.522L17.027,10l-2.215-.437-.386,1.962,3.62.714A2,2,0,0,0,20.4,10.646l.684-3.664-1.967-.367-.425,2.279L14.423,2.433A3.175,3.175,0,0,0,9.087,2.5L7.852,4.468,9.545,5.532l1.238-1.971A1.146,1.146,0,0,1,11.76,3.013Z" />
                  <path d="M6.457,10.453l.43,2.31L8.854,12.4,8.17,8.732A2,2,0,0,0,5.818,7.138L2.2,7.851l.387,1.962,2.184-.431L.478,16.21A3.087,3.087,0,0,0,.4,19.378,3.129,3.129,0,0,0,3.171,21H7V19H3.171a1.154,1.154,0,0,1-1.024-.594,1.1,1.1,0,0,1,.027-1.136Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Sustainability</h3>
              <p className="text-white">
                As part of our commitment to sustainability, we prioritize eco-friendly practices throughout our
                production process. Our chess boards are crafted using responsibly sourced materials and
                environmentally-conscious manufacturing techniques, minimizing our carbon footprint and promoting a
                healthier planet for future generations to enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SwiperGallery data={data} />
      <Footer style={{ backgroundColor: "#7c3aed" }} container>
        <div className="w-full bg-primary !text-white">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
             
              <h1 className="text-2xl text-white md:text-4xl font-bold">
                India Art <span className="india">& Craft</span>
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
