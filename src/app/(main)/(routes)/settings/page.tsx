"use client"
import Link from "next/link"
import Image from "next/image"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {toast} from "sonner"

import { Input } from "@/components/ui/input"

export default function Settings() {
  return (
    <div className="flex min-h-screen w-full flex-col">
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
            </div>
        </div>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              General
            </Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  You can update your account information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                    <Label htmlFor="Name">Name</Label>
                    <Input defaultValue="Lakshay Jakhar" />
                </form>
                <form className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input defaultValue="lakshayjakhar@gmail.com" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button
                    onClick={() =>
                        toast("Account Information Updated.", {
                          description: "Your account info has been updated",
                          action: {
                            label: "X",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      }
                >Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Request Password Reset</CardTitle>
                <CardDescription>
                  You can only change your password every 30 days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                    <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="m@gmail.com"
                  />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button
                 onClick={() =>
                    toast("Password Reset Link Sent", {
                      description: "You will receive a reset link on your email",
                      action: {
                        label: "X",
                        onClick: () => console.log("Undo"),
                      },
                    })
                  }
                >Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
