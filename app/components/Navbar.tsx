import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { DropdownMeu } from "./NavDropDown";
import PathMenu from "./PathMenu";

const menus = [
  { title: "Home", path: "/your-path" },
  { title: "Blog", path: "/your-path" },
  { title: "About Us", path: "/your-path" },
  { title: "Contact Us", path: "/your-path" },
];

export default function Navbar() {
  // const { handleCartClick } = useShoppingCart();
  return (
    <div className="flex justify-between w-full  bg-primary py-6">
      <div className="flex items-center w-full  justify-between px-4 ">
        <Link href="/">
          <h1 className="text-2xl text-white md:text-4xl font-bold">
            India Art <span className="text-primary india">& Craft</span>
          </h1>
        </Link>
        <DropdownMeu />
        {/* <PathMenu /> */}

        {/* <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
