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

async function getData() {
  const query = `*[_type == 'mastercategory']`;
  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export async function DropdownMeu() {
  const dataa = await getData();

  return (
    <div>
      <DropDownElements dataa={dataa} />
    </div>
  );
}
