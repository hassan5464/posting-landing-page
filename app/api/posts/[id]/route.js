import { NextResponse } from "next/server"
import Post from "@/models/Post"
import connect from "@/utils/db"



export const GET = async (request, {params})=>{
  //fetch data from database
  const { id } = params;
  try{
    await connect()
    const posts = await Post.findById(id);
    
    return new NextResponse(JSON.stringify(posts), {status: 200})
  }catch(error){
    NextResponse
    return new NextResponse("Database Errorrrrrr", {status: 500})
  }

}

