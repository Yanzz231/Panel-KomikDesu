import { prisma } from "@/libs/prisma"

export default async function page() {
  const user = await prisma.series.findMany()
  console.log(user)
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-color-putih shadow-md">

      </nav>
    </div>
   )
}