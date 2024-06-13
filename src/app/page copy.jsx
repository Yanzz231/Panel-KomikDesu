"use client"
import Sidebar from "@/components/sidebar";
import { CaretRight } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex xl:container xl:mx-auto">
      <Sidebar />
      <div class="flex-1 p-10 text-color-putih">
        <h1 class="text-2xl font-bold">Welcome to the Dashboard</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

          <div className="bg-color-red1 rounded-lg w-full">
            <h1 className="px-6 pt-6">Total Series Availabel</h1>
            <h1 className="px-6 pb-6 pt-2"><span className="text-3xl">2000</span> <span className="text-xl">Chapter</span></h1>
          </div>

          <div className="bg-color-ungu1 rounded-lg w-full">
            <h1 className="px-6 pt-6">Manga</h1>
            <h1 className="px-6 pb-6 pt-2"><span className="text-3xl">2000</span> <span className="text-xl">Chapter</span></h1>
          </div>

          <div className="bg-color-biru1 rounded-lg w-full">
            <h1 className="px-6 pt-6">Manhwa</h1>
            <h1 className="px-6 pb-6 pt-2"><span className="text-3xl">2000</span> <span className="text-xl">Chapter</span></h1>
          </div>

          <div className="bg-color-kuning rounded-lg w-full">
            <h1 className="px-6 pt-6">Manhua</h1>
            <h1 className="px-6 pb-6 pt-2"><span className="text-3xl">2000</span> <span className="text-xl">Chapter</span></h1>
          </div>

        </div>

        <div className="flex mt-10 items-center justify-between">
          <h1 class="lg:text-2xl text-xl font-bold">Recent Series Update</h1>
          <h1 class="text-md font-bold text-color-ungu1 flex items-center gap-2">See All <CaretRight size={24} /></h1>
        </div>

        <table className="w-full bg-color-abu2 rounded-lg mt-6 text-sm">
          <thead>
            <tr className="border-b border-color-abu4">
              <th class="px-6 py-2 text-left">Name</th>
              <th class="px-6 py-2 text-left">Last Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-color-abu5">
            <tr>
              <th class="px-6 py-2 text-left">Naruto</th>
              <th class="px-6 py-2 text-left">14 January, 2023</th>
              <th></th>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
