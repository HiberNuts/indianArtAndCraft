"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { client, urlFor } from "../lib/sanity";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({ currency, description, image, name, price, price_id, sizeData }: any) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [size, setsize] = useState("");
  const [contactMode, setcontactMode] = useState("");
  const [buttonText, setbuttonText] = useState("Submit");
  const [number, setnumber] = useState("");

  console.log(sizeData);

  const sendEnquery = () => {
    const doc = {
      _type: "enquries",
      name: userName,
      email: email,
      productName: name,
      size: size,
      contactMode: contactMode,
      number: number,
    };
    client.create(doc).then((res) => {
      console.log(res);

      setbuttonText("Inquiry Sent, Thank you!");
      setemail("");
      setuserName("");
      setnumber("");
      setcontactMode("");
      setsize("");
    });
  };

  return (
    // <Button
    //   onClick={() => {
    //     addItem(product), handleCartClick();
    //   }}
    // >
    //   Get Quote
    // </Button>
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Get Quote</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>We are just one step away from crafting you an amazing gift</DialogTitle>
            {/* <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                placeholder="What should we call you?"
                id="name"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                className="col-span-3 border-purple-500"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                className="col-span-3 border-purple-500"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right">
                Number
              </Label>
              <Input
                id="number"
                value={number}
                placeholder="Enter your Number"
                onChange={(e) => setnumber(e.target.value)}
                className="col-span-3 border-purple-500"
              />
            </div>
          </div>
          <Select onValueChange={(value) => setsize(value)}>
            <SelectTrigger className="border-purple-500">
              <SelectValue placeholder="Select size you are intrested in!" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sizeData.map((s: any, index: number) => (
                  <SelectItem key={index} value={s.size}>
                    {s.size}
                  </SelectItem>
                ))}
                {/* <SelectLabel>Fruits</SelectLabel> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setcontactMode(value)}>
            <SelectTrigger className="border-purple-500">
              <SelectValue placeholder="How would you like us to contact you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem className="hover:text-purple-500" value="Whatsapp">
                  Whatsapp
                </SelectItem>
                <SelectItem value="Email">Email</SelectItem>

                {/* <SelectLabel>Fruits</SelectLabel> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <DialogFooter className="flex justify-evenly flex-wrap w-full ">
            <Button onClick={sendEnquery}>{buttonText}</Button>
            {/* <a
              target="_blank"
              aria-label="Chat on WhatsApp"
              href={`https://wa.me/+919915907188?text=Hey there \n I'am intrested in ${name} of size ${size}`}
            >
              {" "}
              <img
                className="h-14 w-50 cursor-pointer hover:scale-110"
                alt="Chat on WhatsApp"
                src="https://static.xx.fbcdn.net/assets/?revision=368225889292641&name=platform-agnostic-green-medium-en-us&density=1"
              />
            </a> */}

            {/* <img
            className="h-14 w-50 cursor-pointer hover:scale-110"
            src="https://static.xx.fbcdn.net/assets/?revision=368225889292641&name=platform-agnostic-green-medium-en-us&density=1"
          /> */}
            {/* <Button type="submit">Save changes</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
