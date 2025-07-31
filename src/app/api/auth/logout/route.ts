import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const response = NextResponse.json(
      { success: "Logged out successfully" },
      { status: 200 }
    );

    // Set the cookie with a past expiry date to remove it
    response.cookies.set("userLoggedIn", "", {
      httpOnly: true,
      sameSite: "strict",
      maxAge: -1, // Expire immediately
      secure: process.env.NODE_ENV === 'production',
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
