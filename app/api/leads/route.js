import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("[Lead Captured]:", body);
    return NextResponse.json({ ok: true, message: "Lead captured successfully" });
  } catch (error) {
    return NextResponse.json({ ok: true, message: "Lead received" });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
