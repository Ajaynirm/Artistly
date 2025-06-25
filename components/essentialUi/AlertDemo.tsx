import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

type props={
  name:string;
}

export function AlertDemo({name}:props) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
     
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{name}</AlertTitle>
        <AlertDescription>
          <p>Something Went Wrong, try again.</p>
         
        </AlertDescription>
      </Alert>
    </div>
  )
}
