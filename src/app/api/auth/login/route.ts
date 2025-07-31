import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/db/mongoose";
import UserData from "@/lib/models/UserData";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32)
      throw new Error("JWT_SECRET must be at least 32 characters long");

    const requestData = await req.json();
    if (!requestData) return NextResponse.json({ error: "No request body" }, { status: 400 });
    const { username_email, password } = requestData;

    // Input validation with length limits
    if (
      !password ||
      !username_email ||
      password.length > 128 ||
      username_email.length > 254
    )
      return NextResponse.json({ error: "Fields Missing" }, { status: 400 });

    const trimmedUsername_Email = username_email.trim();
    const trimmedPassword = password.trim();

    await dbConnect();

    const userDBData = await UserData.findOne({
      $or: [
        { username: trimmedUsername_Email },
        { email: trimmedUsername_Email },
      ],
    });

    if (!userDBData)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const isValidPass = await bcrypt.compare(
      trimmedPassword,
      userDBData.password
    );

    if (!isValidPass)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const returnResponse = NextResponse.json(
      { success: "Password correct & validated" },
      { status: 200 }
    );

    const token = jwt.sign(
      {
        id: userDBData._id.toString(),
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    // Set HTTP-only cookie
    returnResponse.cookies.set("userLoggedIn", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production',
      path: "/",
    });

    return returnResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
