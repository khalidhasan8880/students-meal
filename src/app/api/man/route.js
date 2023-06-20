import { client } from '@/components/MongodbClient';
import { NextResponse } from 'next/server'




export async function POST() {
  try{
    await client.connect();
    console.log('success full ');
    const userCollection = client.db("studentMealDb").collection("users");
    
    

    return NextResponse.json(result)
  }catch{
    console.log('error');
  }
  
}



