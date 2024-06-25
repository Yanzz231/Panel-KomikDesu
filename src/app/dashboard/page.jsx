import CardStat from "@/components/cardStat"
import Navbar from "@/components/navbar"
import TableRecent from "@/components/tableRecent"


export default function Page() {
  return (
    <>
      <Navbar />
      <CardStat />
      <div className=" text-color-putih mt-10 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2">
        <h1 className="text-xl mx-2">Recent Series Update</h1>
        <TableRecent />
      </div>
    </>
  )
}