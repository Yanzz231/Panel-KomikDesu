import { prisma } from "@/libs/prisma"

import ListData from "./listData"

export default async function TableRecent() {
    
    const data = await prisma.series.findMany({ take: 10 })

    return (
        <div className=" text-color-putih mt-10 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2">
            <h1 className="text-xl mx-2">Recent Series Update</h1>
            <ListData res={data} />
        </div>
    )
}