import { NextRequest, NextResponse } from "next/server";

export default function Middleware(req){

    // console.log(req)
    // if(req.nextUrl.pathname !="/login"){
        return NextResponse.redirect(new URL("/login",req.url))

    // }



}

export const config={
    matcher:["/about/:path*"]
}