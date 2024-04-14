import { Button } from "@/components/ui/button";
import Hero from "@/components/www/hero/hero";
import Navbar from "@/components/www/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center">
      <Navbar/>
      <Hero/>
    </main>
  );
}
