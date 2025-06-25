import { AlertDemo } from "@/components/essentialUi/AlertDemo";

export default async function DemoPage() {
 

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-center items-center lg:h-150">
          <div>
            <AlertDemo name={"Page is Developing"}/>
          </div>
        </div>
    </div>
  )
}


