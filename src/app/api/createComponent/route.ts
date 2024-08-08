import { createComposableSchema } from "./create"
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const body = await request.json()
    let parsed = createComposableSchema.safeParse(body);
    if(!parsed.success) {
        return NextResponse.json({error: parsed.error.issues[0].message}, {status: 400})
    }
    let data = parsed.data;


    return Response.json({ data })
}