// app/api/comments/route.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = parseInt(url.searchParams.get("limit")) || 5;
  const skip = (page - 1) * limit;

  try {
    const comments = await prisma.comment.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });
    const total = await prisma.comment.count();

    return NextResponse.json({ comments, total });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching comments" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { text, author } = await request.json();

  try {
    const newComment = await prisma.comment.create({
      data: { text, author },
    });
    return NextResponse.json(newComment);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 500 }
    );
  }
}
