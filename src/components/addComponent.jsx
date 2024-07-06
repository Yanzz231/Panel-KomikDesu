"use client"

import { textPopUp } from "@/libs/swal"
import { useState } from "react"

export default function AddComponent() {

    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [genre, setGenre] = useState("")
    const [status, setStatus] = useState("")
    const [release, setRelease] = useState("")

    const handleData = (event, data) => {
        if (data === "title") setTitle(event.target.value)
        if (data === "type") setType(event.target.value)
        if (data === "genre") setGenre(event.target.value)
        if (data === "status") setStatus(event.target.value)
        if (data === "release") setRelease(event.target.value)
    }

    const handlePost = async (event) => {
        event.preventDefault()
        let data = { title, type, genre, status, release }
        if (title === '') return textPopUp("Error!", "Isi Dulu Bagian Title", "error")
        if (genre === '') return textPopUp("Error!", "Isi Dulu Bagian Genre", "error")
        if (release === '') return textPopUp("Error!", "Isi Dulu Bagian Release", "error")
        data.status === '' ? data.status = "Ongoing" : data.status
        data.type === '' ? data.type = "Manga" : data.type

        const response = await fetch('/api/addseries/', {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postData = await response.json()
        if(postData.status) {
            textPopUp("Succes", "Berhasil Menambah data ke dalam database", "success")
            setTitle("")
            setGenre("")
            setRelease("")
        }
        return
    }


    return (
        <div className="mt-28 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2 text-color-putih">
            <div className="w-full bg-color-abu2 p-4">
                <h1 className="text-xl font-medium">Add Series</h1>

                {/* TITLE AND TYPE */}
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex flex-col me-4 gap-2">
                        <h1>Title</h1>
                        <input type="text" name="" id="" value={title} onChange={(event) => handleData(event, "title")} placeholder="Naruto.." className="focus:outline-none rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1" />
                    </div>

                    <div className="flex flex-col ms-4 gap-2">
                        <h1>Type</h1>
                        <select name="" id="" onChange={(event) => handleData(event, "type")} className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1">
                            <option value="Manga" className="">Manga</option>
                            <option value="Manhwa" className="">Manhwa</option>
                            <option value="Manhua" className="">Manhua</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex flex-col gap-2">
                        <h1>Genre</h1>
                        <input type="text" name="" id="" value={genre} onChange={(event) => handleData(event, "genre")} placeholder="Isekai, Romance" className="focus:outline-none rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1.5" />
                    </div>
                </div>

                {/* RELEASE AND STATUS */}
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex flex-col me-4 gap-2">
                        <h1>Release</h1>
                        <input type="text" name="" id="" value={release} onChange={(event) => handleData(event, "release")} placeholder="17 Agustus..." className="focus:outline-none rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1" />
                    </div>

                    <div className="flex flex-col ms-4 gap-2">
                        <h1>Status</h1>
                        <select name="" id="" onChange={(event) => handleData(event, "status")} className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1.5">
                            <option value="Ongoing" className="hover:bg-color-accent">Ongoing</option>
                            <option value="Complated" className="">Complated</option>
                            <option value="Hiatus" className="">Hiatus</option>
                        </select>
                    </div>
                </div>

                {/* BUTTON */}
                <button onClick={handlePost} className="w-full bg-color-ungu1 mt-8 rounded-md p-2">
                    Generate
                </button>

            </div>
        </div>
    )
}