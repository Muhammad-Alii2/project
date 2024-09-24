import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export async function POST(req, res) {
  try {
    const session = await getAuthSession()

    if (!session || !session.user.role === "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthoirized request" },
        { status: 404 }
      );
    }

    const allUsers = await prisma.user.findMany({});

    return NextResponse.json({
      success: true,
      allUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
