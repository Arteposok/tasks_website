import { NextResponse } from "next/server";

let tasks: string[] = [];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const { action, body } = await req.json();
  if (action=="add"){
    tasks.push(body);
  }else if(action=="del"){
    tasks = tasks.filter(x=>x!=body);
  }
  return NextResponse.json(tasks);
}
