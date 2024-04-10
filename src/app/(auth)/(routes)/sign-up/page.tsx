"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextGenerateEffect } from "@/components/ui/text-generation-effect"
import {motion} from 'framer-motion'
import {toast} from "sonner"
import { AuroraBackground } from "@/components/ui/aurora-background"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import { Tabs,TabsList, TabsTrigger } from "@/components/ui/tabs"


const Generatedwords = `""Empowerment lies in our ability to heal not just ourselves, but also our communities. Every donation to healthcare campaigns is a transformative investment in the wellness and resilience of humanity.""`;

export default function SignUp() {
  
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword , setRetypePassword] = useState("");
  const [userType , setUserType] = useState("individual");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email || !password || !retypePassword){
      if(!email){
        toast("Sign up error", {
          description: "Email input field is empty",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
      if(!password){
        toast("Sign up error", {
          description: "Password input field is empty",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
      if(!retypePassword){
        toast("Sign up error", {
          description: "Retype Password input field is empty",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    }

    if (password !== retypePassword){
      toast("Sign up error", {
        description: "Passwords don't match , recheck",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  }

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
                        <AvatarImage src="/lakshay.png" alt="@shadcn" />
                        <AvatarFallback>LJ</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start px-4">
                        <p className="text-l text-white font-medium leading-none mb-0.5">Lakshay Jakhar</p>
                        <p className="text-sm text-slate-200 text-muted-foreground">Founder, DonateHealth Inc</p>
                    </div>
                </div>   
            </motion.div>
        </AuroraBackground>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Get Started</h1>
            <p className="text-balance text-muted-foreground">
              Create an account
            </p>
          </div>
          <div className="grid gap-6">
          <div className="grid gap-2">
              <Tabs defaultValue="individual">
                <TabsList>
                  <TabsTrigger value="individual" onClick={(e) => setUserType('individual')}>Individual</TabsTrigger>
                  <TabsTrigger value="clinic" onClick={(e) => setUserType('clinic')}>Clinic</TabsTrigger>
                </TabsList>
      
              </Tabs>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Retype Password</Label>
                <Input id="retypePassword" type="password" required onChange={(e) => setRetypePassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              <Link href='/sign-in'>
                Create Account
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline text-[#DE2737]">
              Sign In
            </Link>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              By continuing, you agree to Our &nbsp;
              <span className="underline font-semibold">Terms of Service</span>&nbsp;
              and&nbsp; 
              <span className="underline font-semibold">Privacy Policy</span>,
              and to receive periodic emails with updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
