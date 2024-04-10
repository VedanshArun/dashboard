import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Input } from "@/components/ui/input"
export default function Clinics() {
  return (
    <div className="flex max-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
       
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex flex-col items-start, justify-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Hospitals
        </h2>
        <Input className="rounded-lg mt-5" placeholder="Search for hospitals..." type="search" />
        </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="w-full max-w-xs">
                  <Image
                    src='/hospital.png'
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-[1.6]"
                  />
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl">Apollo Hospital</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Apollo hospitals is one of the biggest chains of hospitals and clinics in India.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>See Donation Programs</Button>
                </CardFooter>
              </Card>
              <Card className="w-full max-w-xs">
                  <Image
                    src='/ven.jpeg'
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-[1.6]"
                  />
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl">Venteshwar</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Apollo hospitals is one of the biggest chains of hospitals and clinics in India.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>See Donation Programs</Button>
                </CardFooter>
              </Card>
              <Card className="w-full max-w-xs">
                  <Image
                    src='/max.jpg'
                    width={400}
                    height={250}
                    alt="image"
                    className="aspect-[1.6]"
                  />
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl">Max Hospital</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Max hospitals is one of the biggest chains of hospitals and clinics in India.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>See Donation Programs</Button>
                </CardFooter>
              </Card> 
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
