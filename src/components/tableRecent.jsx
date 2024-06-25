"use client"
import { useEffect, useState } from "react"

import ListData from "./listData"

export default function TableRecent({ limit, type }) {

    const [data, setData] = useState(undefined)

    const dataGet = async () => {
        const dataBody = { limit: limit, type: type }
        const getSeries = await fetch('/api/series', {
            method: "POST",
            body: JSON.stringify(dataBody)
        })
        const postSeries = await getSeries.json()
        setData(postSeries.getSeries)
    }

    useEffect(() => {
        dataGet()
    }, [])

    return (
        <ListData res={data} setData={setData} />
    )
}