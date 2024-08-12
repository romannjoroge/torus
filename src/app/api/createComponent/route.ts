import { createEvent } from "@/mongo/events";
import { createComposableSchema } from "@/schema"
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const body = await request.json()
    let parsed = createComposableSchema.safeParse(body);
    if(!parsed.success) {
        return NextResponse.json({error: parsed.error.issues[0].message}, {status: 400})
    }
    let data = parsed.data;

    // Create in DB
    let eventID = await createEvent({
        title: data.title,
        bannerURL: data.bannerURL,
        description: data.description,
        rsvp: [data.userAddress],
        creator: data.userAddress
    });

    return Response.json({ data, eventID })
}