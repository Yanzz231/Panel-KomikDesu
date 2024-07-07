"use client"

import { textEditPopUp, textPopUp } from "@/libs/swal"

import { useRouter } from "next/navigation"

export default function ListData({ res, setData }) {

    const router = useRouter()

    const handleRemove = (event, series) => {
        event.preventDefault()
        textPopUp("Success", `Apakah Yakin ingin menghapus data ${series.title}`, "success").then(async (result) => {
            if (result.isConfirmed) {
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
        })
    }
    const handleEdit = (event, series) => {
        event.preventDefault()
        textEditPopUp("Edit Data", series).then(async (result) => {
            if(result.isConfirmed) {
                const response = await fetch('/api/editseries', {
                    method: "POST",
                    body: JSON.stringify(result.value)
                })
                const postEdit = await response.json()
                console.log(postEdit)
                if(postEdit.status) {
                    textPopUp("Success", `Berhasil Mengubah Data ${series.title}`, "success")
                    setData(res.filter(i => i.title !== series.title).concat(result.value))
                    router.refresh()
                }
            }
        })
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
                {res?.map((res, index) => {
                    return (
                        <tr key={index} className="border-b border-color-abu4 text-sm">
                            <td className="px-5 pt-3">{res.title}</td>
                            <td className="px-5 pt-3 hidden lg:block mt-2">{res.release}</td>
                            <td className="px-5 pt-3 text-center">
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <button onClick={(event) => handleEdit(event, res)} className="p-2 bg-color-accent rounded-md">Edit</button>
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