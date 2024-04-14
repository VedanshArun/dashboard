import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="/">
            <Image
              src='/logo.svg'
              width={30}
              height={30}
              alt="logo"
            />
            <p className="text-primary font-bold pl-2">DonateHealth</p>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              About
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Services
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href='/sign-in'>
              <Button size="sm" variant="outline">
                Sign in
              </Button>
            </Link>
            <Link href='/sign-up'><Button size="sm">Sign up</Button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
