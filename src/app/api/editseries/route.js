import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    await prisma.series.updateMany({
        where: {
            title: data.before
        },
        data: {
            status: data.status,
            title: data.title,
            type: data.type,
            genre: data.genre,
            release: data.release
        }
    })

    return Response.json({ status: true, data: data })
}