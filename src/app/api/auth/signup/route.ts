import dbConnect from "@/lib/db/mongoose";
import UserData from "@/lib/models/UserData";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32)
      throw new Error("JWT_SECRET must be at least 32 characters long");

    const requestData = await request.json();
    if (!requestData) return NextResponse.json({ error: "No request body" }, { status: 400 });
    const { fullname, username, email, password } = requestData;

    // Input validation with length limits
    if (
      !fullname ||
      !username ||
      !email ||
      !password ||
      fullname.length > 100 ||
      username.length > 50 ||
      email.length > 254 ||
      password.length > 128
    ) {
      return NextResponse.json(
        { error: "Invalid input fields" },
        { status: 400 }
      );
    }

    const trimmedFullname = fullname.trim();
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Password strength validation
    if (trimmedPassword.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if username or email already exist
    const existingUser = await UserData.findOne({
      $or: [{ username: trimmedUsername }, { email: trimmedEmail }],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username or email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(trimmedPassword, 12);

    const saveData = new UserData({
      fullName: trimmedFullname,
      username: trimmedUsername,
      email: trimmedEmail,
      password: hashedPassword,
    });

    await saveData.save();

    const returnResponse = NextResponse.json(
      { success: "Account created successfully" },
      { status: 201 }
    );

    const userDBData = await UserData.findOne({ username: trimmedUsername });
    
    if (!userDBData) {
        return NextResponse.json({ error: "Could not find user after creation" }, { status: 500 });
    }

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
