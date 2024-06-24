import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    await prisma.series.deleteMany({
        where: {
            title: data.title
        }
    })
    return Response.json({ status: true, data: data })
}