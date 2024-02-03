"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DropDownElements = ({ dataa }: any) => {
  return (
    <div className="flex justify-center align-middle w-full ">
      {/* {dataa?.map((d: any, index: number) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{d?.name}</Button>
          </DropdownMenuTrigger>
          {d?.childcategories?.catname?.map((c: any, index: number) => (
            <DropdownMenuContent key={index} className="w-56">
              <DropdownMenuLabel>{c}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          ))}
        </DropdownMenu>
      ))} */}
      <Menubar className="sm:hidden md:flex py-6 border-purple-500">
        {dataa?.map((d: any, index: number) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>
              <span className="cursor-pointer ">{d?.name}</span>
            </MenubarTrigger>
            <MenubarContent className="border-b-purple-500 border-l-purple-500 border-r-purple-500">
              {d?.childcategories?.catname?.map((c: any, index: number) => (
                <MenubarItem key={index}>
                  <a className="text-black cursor-pointer hover:text-purple-400" href={`/${c}`}>
                    {c}
                  </a>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
      <div className="md:hidden flex justify-center align-middle ">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-glyphs/30/menu--v1.png" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[350px] rounded-none">
            <div className="w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Choose From Our Wide range of categories</DrawerTitle>
              </DrawerHeader>
              <Menubar className="flex flex-col min-h-[200px] justify-evenly align-middle">
                {dataa?.map((d: any, index: number) => (
                  <MenubarMenu key={index}>
                    <MenubarTrigger>
                      <span className="cursor-pointer text-l  border-b-2 border-black">{d?.name}</span>
                    </MenubarTrigger>
                    <MenubarContent className="border-2 mr-10 right-10  w-[250px] justify-center border-purple-500">
                      {d?.childcategories?.catname?.map((c: any, index: number) => (
                        <MenubarItem key={index}>
                          <a className="text-black cursor-pointer hover:text-purple-400 " href={`/${c}`}>
                            {c}
                          </a>
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </MenubarMenu>
                ))}
              </Menubar>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default DropDownElements;
