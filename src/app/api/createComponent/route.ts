export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    const res = await request.json()
    return Response.json({ res })
}