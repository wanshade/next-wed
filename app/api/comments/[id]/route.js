import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await prisma.comment.delete({ where: { id: parseInt(id) } });

    // Jangan kirim body response untuk status 204
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error saat delete:", error);
    return NextResponse.json(
      { error: "Error deleting comment" },
      { status: 500 }
    );
  }
}
