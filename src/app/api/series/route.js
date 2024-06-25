import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const getSeries = await prisma.series.findMany({
        take: data.limit,
        where: {
            type: data.type
        }
    })

    return Response.json({ status: true, getSeries })
}