"use client"

import { List, MonitorPlay, Book, CaretDown, FolderSimplePlus } from "@phosphor-icons/react"
import Image from "next/image"
import { useState } from "react"


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [listButton, setListButton] = useState(false)

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-color-abu2 shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">

                    <div className="justify-between flex items-center">

                        <div className="flex items-center justify-center gap-4">
                            <button onClick={() => setSidebar(!sidebar)}><List size={34} className="text-color-putih lg:hidden block" /></button>
                            <span className="text-color-putih text-2xl">KomikDesu</span>
                        </div>

                        <div className="relative flex items-center text-color-putih">
                            <button onClick={() => setDropdown(!dropdown)}><Image src={"/favicon.png"} width={44} height={120} alt="Logo" className="" /></button>
                            {dropdown && (
                                <div className="absolute right-0 top-14 mt-2 w-60 bg-white rounded-md shadow-lg bg-color-abu2 z-50">
                                    <div className="flex flex-col p-4">
                                        <h1 className="text-md">Andrian</h1>
                                        <h1 className="text-sm">andrianpratama@gmail.com</h1>
                                        <div className="w-full border-b border-color-abu mt-1"></div>
                                        <button className="mt-2 text-start hover:bg-color-biru rounded-md p-1">Sign Out</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </nav>

            <aside className={`fixed top-0 left-0 z-40 w-64 h-screen ${sidebar ? "" : "hidden"} lg:block`}>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-color-abu2">
                    <ul className="space-y-2 font-medium pt-20 text-color-background text-sm">
                        <li>
                            <a href="/dashboard" className="cursor-pointer w-full flex items-center gap-2 p-2 hover:bg-color-biru rounded-lg">
                                <MonitorPlay size={34} />
                                <div>Dashboard</div>
                            </a>
                        </li>

                        <li>
                            <button onClick={() => setListButton(!listButton)} className={`${listButton ? "bg-color-biru" : ""} w-full flex items-center justify-between p-2 hover:bg-color-biru rounded-lg`}>
                                <div className="flex items-center gap-2">
                                    <Book size={34} />
                                    <div>List Series</div>
                                </div>
                                <CaretDown size={20} />
                            </button>
                            <div className={`w-full px-2 mt-2 ${listButton ? "" : "hidden"}`}>
                                <div className="bg-color-abu4 p-2 gap-2 flex flex-col rounded-lg">
                                    <a href="/list-manga" className="cursor-pointer flex w-full hover:bg-color-biru p-2 rounded-md">List Manga</a>
                                    <a href="/list-manhwa" className="cursor-pointer flex w-full hover:bg-color-biru p-2 rounded-md">List Manhwa</a>
                                    <a href="/list-manhua" className="cursor-pointer flex w-full hover:bg-color-biru p-2 rounded-md">List Manhua</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="/add" className="cursor-pointer w-full flex items-center gap-2 p-2 hover:bg-color-biru rounded-lg">
                                <FolderSimplePlus size={34} />
                                <div>Add Series</div>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}