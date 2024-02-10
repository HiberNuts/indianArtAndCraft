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
    <div className="h-20 mt-10 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            District<span className="text-primary">Hub</span>
          </h1>
          {/* <h1 className="text-2xl md:text-4xl font-bold">
            India Art <span className="text-primary">& Craft</span>
          </h1> */}
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
