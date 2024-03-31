import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
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
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "India Art and Craft",
  description: "Top Chess for top brains",

  icons: "https://t3.ftcdn.net/jpg/05/71/99/86/360_F_571998686_7q0qDN2lvCn5wv90SHEepoffd0Pq8NRY.jpg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer style={{ backgroundColor: "#7c3aed" }} container>
            <div className="w-full bg-primary !text-white ">
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                  <h1 className="text-2xl text-white md:text-4xl font-bold india">India Art & Craft</h1>
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
        </CartProvider>
      </body>
    </html>
  );
}
