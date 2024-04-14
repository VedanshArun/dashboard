import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import campaign from "../../../../models/campaign";

export async function POST(req) {
    try {
        const {title,owner,description,targetFunds} = await req.json();
        console.log(title,owner,description,targetFunds);
        await connectToDatabase();
        await campaign.create({title,owner,description,targetFunds});
        return NextResponse.json({message: "Hospital Registered"}, {status : 201});

        
    } catch (error) {

        return NextResponse.json({message : "Error while registering"}, {status: 500});
        
    }
}