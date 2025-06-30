// app/api/quote/route.js
import dbConnect from "@/app/lib/db.connect";
import QuoteRequest from "@/app/models/QuoteRequest";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    const newQuote = new QuoteRequest(body);
    await newQuote.save();

    return NextResponse.json({
      success: true,
      message: "Quote saved successfully",
    });
  } catch (error) {
    console.error("Error saving quote:", error);
    return NextResponse.json({
      success: false,
      message: "Error saving quote",
    });
  }
}
