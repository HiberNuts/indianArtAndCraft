import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { client } from "../lib/sanity";
import DropDownElements from "./DropDownElements";

export const dynamic = "force-dynamic";
async function getData() {
  const query = `*[_type == 'mastercategory']`;
  const data = await client.fetch(query, { cache: "no-store" });

  return data;
}

export async function DropdownMeu() {
  const dataa = await getData();

  return (
    <div>
      <DropDownElements dataa={dataa} />
    </div>
  );
}
