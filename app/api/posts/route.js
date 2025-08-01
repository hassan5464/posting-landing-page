import { NextResponse } from "next/server"
import Post from "@/models/Post"
import connect from "@/utils/db"



export const GET = async (request)=>{
  //fetch data from database

  try{
    await connect()
    const posts = await Post.find()
    return new NextResponse(JSON.stringify(posts), {status: 200})
  }catch(error){
    return new NextResponse("Database Errorr", {status: 500})
  }

}

