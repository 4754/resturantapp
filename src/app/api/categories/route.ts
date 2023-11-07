import { NextResponse } from "next/server"
import prisma from "@/utils/connect";

export const GET = async () =>{
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), { status: 200});
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!"}),{ status: 500 })
    }
    
}

export const PUT = () =>{
    return new NextResponse("Hello", { status : 200})
}