"use client"

import { textPopUp } from "@/libs/swal"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ListData({ res, setData }) {

    const router = useRouter()

    const handleRemove = async (event, series) => {
        event.preventDefault()

        const response = await fetch('/api/deleteseries', {
            method: "POST",
            body: JSON.stringify(series)
        })
        const postRemove = await response.json()
        if (postRemove.status) {
            textPopUp("Success", `Berhasil Menghapus Data ${series.title}`, "success")
            setData(res.filter(i => i.title !== series.title))
            router.refresh()
        }
    }


    return (
        <table className="w-full bg-color-abu2 rounded-lg mx-2 mt-3">
            <thead>
                <tr className="border-b border-color-abu4 text-md">
                    <th className="ps-5 pt-2 text-left">Nama</th>
                    <th className="px-5 pt-2 text-left hidden lg:block">Last Update</th>
                    <th className="px-5 pt-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {res?.map(res => {
                    return (
                        <tr key={res.id} className="border-b border-color-abu4 text-sm">
                            <td className="px-5 pt-3">{res.title}</td>
                            <td className="px-5 pt-3 hidden lg:block mt-2">{res.release}</td>
                            <td className="px-5 pt-3 text-center">
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <button className="p-2 bg-color-accent rounded-md">View</button>
                                    <button onClick={(event) => handleRemove(event, res)} className="bg-color-red p-2 rounded-md">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}