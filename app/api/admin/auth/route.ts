import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Admin authentication API route
// Password is stored in environment variable ADMIN_PASSWORD
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, action } = body;

    // Handle logout
    if (action === "logout") {
      cookies().delete("admin-authenticated");
      return NextResponse.json({ success: true, authenticated: false });
    }

    // Handle login
    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Verify password
    if (password === adminPassword) {
      // Set httpOnly cookie for secure session
      cookies().set("admin-authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return NextResponse.json({ success: true, authenticated: true });
    } else {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Admin auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

