"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { TextGenerateEffect } from "@/components/ui/text-generation-effect"
import {motion} from 'framer-motion'
import { AuroraBackground } from "@/components/ui/aurora-background"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const Generatedwords = `""Generosity fuels the heartbeat of healthcare campaigns, igniting hope and healing in the lives of countless individuals. Together, our contributions form a symphony of compassion, creating a healthier world for all.""
`

export default function SignIn() {
  return (
    <div className="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-muted lg:block">
      <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <Image
                    src='/logo-white.svg'
                    width={45}
                    height={45}
                    alt="donateHealthLogo"
                    className="mb-5"
                />
                <TextGenerateEffect words={Generatedwords}/>
                <div className="flex items-center justify-center mt-5">
                    <Avatar>
                        <AvatarImage src="/isheeta.jpeg" alt="@shadcn" />
                        <AvatarFallback>IS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start px-4">
                        <p className="text-l text-white font-medium leading-none mb-0.5">Isheeta Sehgal</p>
                        <p className="text-sm text-slate-200 text-muted-foreground">Founder, DonateHealth Inc</p>
                    </div>
                </div>   
            </motion.div>
        </AuroraBackground>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">
              Sign in to your account
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline text-[#DE2737]"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href='/dashboard'>
            <Button type="submit" className="w-full">
                Login
              
            </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline text-[#DE2737]">
              Sign up
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
