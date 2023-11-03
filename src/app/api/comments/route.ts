import { NextRequest } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const movieId = searchParams.get('movie');
  try {
    if (movieId) {
      const existingComments = await prisma.comment.findMany({
        where: { movieId: Number(movieId) },
      });
      return Response.json(existingComments);
    }
    const allComments = await prisma.comment.findMany();
    return Response.json(allComments);
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { movieId, username, comment, type } = await request.json();

  try {
    const newComment = await prisma.comment.create({
      data: {
        movieId,
        username,
        comment,
        type,
      },
    });
    return Response.json(newComment, { status: 201 });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
