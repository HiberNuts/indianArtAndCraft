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

export default function AddToBag({ currency, image, name, price, price_id, sizeData }: any) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [size, setsize] = useState("");
  const [contactMode, setcontactMode] = useState("");
  const [buttonText, setbuttonText] = useState("Submit");
  const [number, setnumber] = useState("");


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
           
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
