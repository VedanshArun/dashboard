"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  CircleUser,
  BadgeIndianRupee,
  Compass,
  Home,
  Menu,
  Megaphone,
  ShoppingCart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Campaigns from "@/components/sections/campaigns/campaigns"
import Clinics from "@/components/sections/clinics/clinics"
import Donations from "@/components/sections/donations/donations"

const components = [
    <Clinics/>,
    <Campaigns/>,
    <Donations/>,
]

export default function Dashboard() {
    const [showComponent,setShowComponent] = useState(0);
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-background md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image
                    src='/logo.svg'
                    width={30}
                    height={30}
                    alt="logo"
                />
                <span className="text-lg font-bold">DonateHealth</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                    onClick={() => setShowComponent(0)}
                >
                    <Compass className="h-6 w-6" />
                    Explore Hospitals
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                    onClick={() => setShowComponent(1)}
                >
                    <Megaphone className="h-6 w-6" />
                    Campaigns
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                    onClick={() => setShowComponent(2)}
                >
                    <BadgeIndianRupee className="h-6 w-6" />
                    My Donations
                </Link>
                </nav>
            </div>
            </div>
        </div>
        <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                    >
                    <Image
                            src='/logo.svg'
                            width={30}
                            height={30}
                            alt="logo"
                        />
                    <span className="sr-only">DonateHealth</span>
                    </Link>
                    <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                    <Compass className="h-5 w-5" />
                    Explore Hospitals
                    </Link>
                    <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                    <Megaphone className="h-5 w-5" />
                    Campaigns
                    </Link>
                    <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                    <BadgeIndianRupee className="h-5 w-5" />
                    My Donations
                    </Link>
                </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href='/settings'>Settings</Link></DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href='/sign-in'>Logout</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {components[showComponent]}
            </main>
        </div>
        </div>
    )
}
