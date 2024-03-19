import { NextResponse } from "next/server";
import '/blogdata/nextjs.json'
let data = "/blogdata/nextjs.json"
export async function POST(request) {
    let data =request.json()
    return NextResponse.json ({success:true,data})
}