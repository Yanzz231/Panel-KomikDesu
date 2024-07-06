"use client"

import { textPopUp } from "@/libs/swal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {

    const router = useRouter()

    const handleLogin = (event) => {
        event.preventDefault()
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username !== process.env.NEXT_PUBLIC_USERNAME_ADMIN || password !== process.env.NEXT_PUBLIC_PASSWORD_ADMI) return textPopUp("Error", "Terjadi Kesalahan", "error")

        localStorage.setItem("username", username)
        localStorage.setItem("password", password)

        router.replace("/dashboard")
    }

    useEffect(() => {
        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount || getPassword) {
            router.replace('/dashboard');
        }
    }, [router])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-5 bg-color-abu2 rounded-md">
                <h1 className="text-xl font-bold text-color-primary">LOGIN TO PANEL</h1>

                <div className="flex flex-col">
                    <div className="mt-6">
                        <input type="text" id="username" className="w-full focus:outline-none ps-2 p-1 rounded-md" placeholder="Username..." />
                    </div>

                    <div className="mt-4">
                        <input type="password" id="password" className="w-full focus:outline-none ps-2 p-1 rounded-md" placeholder="Password..." />
                    </div>

                    <button onClick={handleLogin} className="bg-color-biru1 w-full mt-10 rounded-md p-2 text-color-primary text-md font-bold">SUBMIT</button>
                </div>

            </div>
        </div>
    )
}