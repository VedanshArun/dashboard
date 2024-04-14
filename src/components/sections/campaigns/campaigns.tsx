import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import CreateCampaign from "./create-campaign"

export default function Campaigns() {
  return (
    <div className="flex max-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
       
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex flex-col items-start, justify-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Campaigns
        </h2>
        <div className="flex items-center justify-center mt-5">
          <Input className="rounded-lg mr-5" placeholder="Search for Campaigns..." type="search" />
          <CreateCampaign/>
        </div>
        </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="w-full max-w-xs">
          
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl">Fundraiser for Apollo..</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    <p className="text-primary/40 mb-5 ">By Apollo Hospital</p>
                    Apollo hospitals is one of the biggest chains of hospitals and clinics in India.
                    <Separator className="mt-5 mb-5"/>
                    <div className="text-lg text-primary mb-5">
                    +70% target funds raised
                    </div>
                    <Progress value={70} aria-label="70% increase" />
                  </CardDescription>
                </CardContent>
                
              </Card>
              <Card className="w-full max-w-xs">
                  
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl">Dilip Kumar Cancer Fund</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    <p className="text-primary/40 mb-5 ">By Max Hospital</p>
                    Max hospitals is one of the biggest chains of hospitals and clinics in India.
                    <Separator className="mt-5 mb-5"/>
                    <div className="text-lg text-primary mb-5">
                    +37% target funds raised
                    </div>
                    <Progress value={37} aria-label="70% increase" />
                  </CardDescription>
                </CardContent>
            
              </Card>            
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
