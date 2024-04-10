import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generation-effect";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {motion} from 'framer-motion'

const Generatedwords = `" Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows"
`;

export default function Hero() {
    return (
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
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>LJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start px-4">
                    <p className="text-l text-white font-medium leading-none mb-0.5">Lakshay Jakhar</p>
                    <p className="text-sm text-slate-200 text-muted-foreground">Founder, DonateHealth Inc</p>
                </div>
            </div>   
        </motion.div>
        </AuroraBackground>
    )
  }
  