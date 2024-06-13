export default function TableRecent() {
    return (
        <div className=" text-color-putih mt-10 lg:ml-96 lg:mr-32 md:ml-8 md:mr-8 ml-2 mr-2">
            <h1 className="text-xl mx-2">Recent Series Update</h1>
            <table className="w-full bg-color-abu2 rounded-lg mx-2 mt-3">
                <thead>
                    <tr className="border-b border-color-abu4 text-md">
                        <th className="ps-5 pt-2 text-left">Nama</th>
                        <th className="px-5 pt-2 text-left hidden lg:block">Last Update</th>
                        <th className="px-5 pt-2">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="border-b border-color-abu4 text-sm">
                        <td className="px-5 pt-3">Clever Cleaning Life Of The Returned Genius Hunter</td>
                        <td className="px-5 pt-3 hidden lg:block mt-2">17 Agustus 2028</td>
                        <td className="px-5 pt-3 text-center">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <button className="p-2 bg-color-accent rounded-md">View</button>
                                <button className="bg-color-red p-2 rounded-md">Delete</button>
                            </div>
                        </td>
                    </tr>

                    <tr className="border-b border-color-abu4 text-sm">
                        <td className="px-5 pt-3">Clever Cleaning Life Of The Returned Genius Hunter</td>
                        <td className="px-5 pt-3 hidden lg:block mt-2">17 Agustus 2028</td>
                        <td className="px-5 pt-3 text-center">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <button className="p-2 bg-color-accent rounded-md">View</button>
                                <button className="bg-color-red p-2 rounded-md">Delete</button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}