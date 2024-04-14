import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import user from "../../../../models/user";
import hospital from "../../../../models/hospital";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const {email,name,password,userType} = await req.json();

        await connectToDatabase();
        if (userType === 'individual'){
            const userExists = await user.findOne({email}).select("_id");
            if (userExists){
                return NextResponse.json({message: "User already exists"}, {status : 301});
            }

            const hashedPassword = await bcrypt.hash(password,10);
            await user.create({name,email,password: hashedPassword,userType});

            return NextResponse.json({message: "User Registered"}, {status : 201});

        }
        
        const hospitalExists = await hospital.findOne({email}).select("_id");
        if (hospitalExists){
            return NextResponse.json({message: "Hospital already exists"}, {status : 401});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        await hospital.create({name,email,password: hashedPassword,userType});

        return NextResponse.json({message: "Hospital Registered"}, {status : 201});

        
    } catch (error) {

        return NextResponse.json({message : "Error while registering"}, {status: 500});
        
    }
}