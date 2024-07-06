import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    await prisma.series.updateMany({
        where: {
            title: data.title
        },
        data: {
            title: data.title,
            type: data.type,
            genre: data.genre,
            release: data.release,
            status: data.status
        }
    })

    return Response.json({ status: true, data: data })
}