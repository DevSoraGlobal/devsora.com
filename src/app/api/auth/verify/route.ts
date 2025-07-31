import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/db/mongoose";
import UserData from "@/lib/models/UserData";

export async function GET(request: NextRequest) {
  try {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32)
      throw new Error("JWT_SECRET must be at least 32 characters long");

    const token = request.cookies.get("userLoggedIn")?.value;

    if (!token)
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    await dbConnect();

    const user = await UserData.findById(decoded.id).select("-password");

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(
      {
        success: "User verified successfully",
        user: user
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    let statusCode, message;

    if (error instanceof jwt.JsonWebTokenError) {
      statusCode = 401;
      message = "Invalid token";
    } else if (error instanceof jwt.TokenExpiredError) {
      statusCode = 401;
      message = "Token expired";
    } else {
      statusCode = 500;
      message = "Internal server error";
    }

    const response = NextResponse.json(
      { error: message },
      { status: statusCode }
    );
    
    // Clear the invalid cookie
    if (statusCode === 401) {
        response.cookies.set("userLoggedIn", "", { maxAge: -1 });
    }

    return response;
  }
}
