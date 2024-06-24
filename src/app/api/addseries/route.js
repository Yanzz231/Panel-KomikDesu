import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const { title, type, genre, release, status } = await request.json()
    const data = { title, type, genre, release, status }

    await prisma.series.create({ data })
    return Response.json({ status: true, data: data })
}