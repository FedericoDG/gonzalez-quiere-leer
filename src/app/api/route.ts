import { extract } from '@extractus/article-extractor';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const article = await extract(body.url);
    console.log(article);

    return NextResponse.json({
      article: article,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
