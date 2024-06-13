export default function AddComponent() {
    return (
        <div className="mt-28 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2 text-color-putih">
            <div className="w-full bg-color-abu2 p-4">
                <h1 className="text-xl font-medium">Add Series</h1>

                {/* TITLE AND TYPE */}
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex flex-col me-4 gap-2">
                        <h1>Title</h1>
                        <input type="text" name="" id="" placeholder="Naruto.." className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1" />
                    </div>

                    <div className="flex flex-col ms-4 gap-2">
                        <h1>Type</h1>
                        <select name="" id="" className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1">
                            <option value="" className="">Manga</option>
                            <option value="" className="">Manhwa</option>
                            <option value="" className="">Manhua</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex flex-col gap-2">
                        <h1>Genre</h1>
                        <input type="text" name="" id="" placeholder="Isekai, Romance" className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1.5" />
                    </div>
                </div>

                {/* RELEASE AND STATUS */}
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex flex-col me-4 gap-2">
                        <h1>Release</h1>
                        <input type="text" name="" id="" placeholder="Naruto.." className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1" />
                    </div>

                    <div className="flex flex-col ms-4 gap-2">
                        <h1>Status</h1>
                        <select name="" id="" className="rounded-md border-color-abu5 border bg-color-abu2 px-2 py-1.5">
                            <option value="" className="hover:bg-color-accent">Ongoing</option>
                            <option value="" className="">Complated</option>
                            <option value="" className="">Hiatus</option>
                        </select>
                    </div>
                </div>

                {/* BUTTON */}
                <button className="w-full bg-color-ungu1 mt-8 rounded-md p-2">
                    Generate
                </button>

            </div>
        </div>
    )
}