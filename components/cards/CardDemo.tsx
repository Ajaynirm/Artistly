'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner";
import { AlertDialogDemo } from "../essentialUi/AlertForQuote";

type cardProps={
  name:string;
  category:string;
  location:string;
  language:string;
  priceStart: number;
  priceEnd: number;
}

export function CardDemo({name,category,location,language, priceStart,priceEnd}: cardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name} </CardTitle>
        
        <CardAction>
          <Button variant="link">{category}</Button>
        </CardAction>

      
      </CardHeader>

      <CardContent>
      <CardTitle>Language: <span className="font-light pl-5">{language}</span> </CardTitle>        
      </CardContent>

      <CardContent>
      <CardTitle>Location: <span className="font-light pl-5">{location}</span> </CardTitle>        
      </CardContent>
      <CardContent>
      <CardTitle>Price: <span className="font-light pl-11">${priceStart}-${priceEnd}</span></CardTitle>
      
      </CardContent>
        
      <CardFooter className="flex-col gap-2">
        {/* <Button  className="w-full" 
        onClick={()=>{
          toast(`Quotation Request Send to Manager for ${category} Name ${name} From ${location}`,{
            description: new Date().toLocaleString(),
            position: "top-center",
            duration: 5000,
          });
          
        }}
        >
          ASK QUOTE
        </Button> */}
        <AlertDialogDemo name={name} button_name={"Ask Quote"} category={category} location={location} />
      
      </CardFooter>
    </Card>
  )
}
