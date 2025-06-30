import dbConnect from "@/app/lib/db.connect";
import Contact from "@/app/models/Contact";
import { NextResponse } from "next/server";

// POST handler
export async function POST(req) {
  try {
    const data = await req.json();
    await dbConnect();

    const newContact = new Contact(data);
    await newContact.save();
    return NextResponse.json({ success: true, message: "Saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
