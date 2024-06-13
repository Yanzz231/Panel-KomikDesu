export default function CardStat() {
    return (
        <div className="text-color-putih mt-24 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2">
            <h3 className="py-4 md:text-3xl text-2xl font-medium mx-2">Welcome Back, Admin!</h3>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8 mx-2">

                <div className="bg-color-red1 w-full rounded-lg p-5 flex flex-col gap-2">
                    <h1 className="text-md">Manga Available</h1>
                    <h1 ><span className="text-lg">150</span> <span className="text-xl">Manga</span></h1>
                </div>

                <div className="bg-color-ungu1 w-full rounded-lg p-5 flex flex-col gap-2">
                    <h1 className="text-md">Manhwa Available</h1>
                    <h1 ><span className="text-lg">150</span> <span className="text-xl">Manga</span></h1>
                </div>

                <div className="bg-color-kuning w-full rounded-lg p-5 flex flex-col gap-2">
                    <h1 className="text-md">Manhua Available</h1>
                    <h1 ><span className="text-lg">150</span> <span className="text-xl">Manga</span></h1>
                </div>

                <div className="bg-color-biru1 w-full rounded-lg p-5 flex flex-col gap-2">
                    <h1 className="text-md">Total Series Available</h1>
                    <h1 ><span className="text-lg">150</span> <span className="text-xl">Manga</span></h1>
                </div>

            </div>
        </div>
    )
}