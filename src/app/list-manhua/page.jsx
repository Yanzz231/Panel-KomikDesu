import Navbar from "@/components/navbar"
import TableRecent from "@/components/tableRecent"

export default function page() {
    return (
        <>
            <Navbar />
            <div className=" text-color-putih mt-24 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2">
                <h1 className="text-2xl mx-2">List Manga</h1>
                <TableRecent limit={5} type={"Manhua"} />
            </div>
        </>
    )
}