import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Verify if user is authenticated
export async function GET(request: NextRequest) {
  try {
    const authCookie = cookies().get("admin-authenticated");
    const isAuthenticated = authCookie?.value === "true";

    return NextResponse.json({ authenticated: isAuthenticated });
  } catch (error) {
    console.error("Admin verify error:", error);
    return NextResponse.json({ authenticated: false });
  }
}

