import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export async function POST(req, res) {
  try {
    const session = await getAuthSession()

    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthoirized request" },
        { status: 404 }
      );
    }

    const historyEntries = await prisma.creditHistory.findMany({
      where: { userId: session.user.id },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      historyEntries,
    });
  } catch (error) {
    console.error("Error fetching credit history: ", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
