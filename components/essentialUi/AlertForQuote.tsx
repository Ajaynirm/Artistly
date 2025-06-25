import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { toast } from "sonner";
  type props={
    button_name:string;
    name:string;
    category:string;
    location:string;
  }
  export function AlertDialogDemo({name,button_name,category,location}:props) {
    name=name.toUpperCase();
    button_name=button_name.toUpperCase();
    category=category.toUpperCase();
    location=location.toUpperCase();
    
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button  className="bg-white text-black border border-gray-300 hover:bg-gray-100">{button_name}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will {button_name} for {category} named {name} from {location}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={()=>toast.error("Quotation Request Cancelled",{
                 description: new Date().toLocaleString(),
                 position: "top-center",
                 duration: 10000,
            })}>Cancel</AlertDialogCancel>
            <AlertDialogAction  onClick={()=>{
          toast.success(`Quotation Request Send to Manager for ${category} Name ${name} From ${location}`,{
            description: new Date().toLocaleString(),
            position: "top-center",
            duration: 5000,
          });
          
        }}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  