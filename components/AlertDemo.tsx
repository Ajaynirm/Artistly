import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
     
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>No Artist found based on filter</AlertTitle>
        <AlertDescription>
          <p>Please change the filter and try again.</p>
         
        </AlertDescription>
      </Alert>
    </div>
  )
}
