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
import { Link } from "lucide-react";

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
      <Menubar className="gap-10">
        {dataa?.map((d: any, index: number) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>
              <span className="cursor-pointer ">{d?.name}</span>
            </MenubarTrigger>
            <MenubarContent>
              {d?.childcategories?.catname?.map((c: any, index: number) => (
                <MenubarItem key={index}>
                  <a className="text-black cursor-pointer" href={`/${c}`}>
                    {c}
                  </a>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};

export default DropDownElements;
