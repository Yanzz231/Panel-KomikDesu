import Swal from "sweetalert2";
import "@/app/globals.css";

export const textPopUp = async (title, text, icon) => {
    const result = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel'
    });

    return result
}

export const textEditPopUp = async (title, series) => {
    const result = await Swal.fire({
        title: title,
        customClass: {
            htmlContainer: 'html-container',
        },
        html: `
        <div class="grid grid-cols-1">
            <div class="mt-4 mx-4">
                <h1 class="text-md font-bold text-start">Title</h1>
                <input id="swal-input1" value="${series.title}" class="focus:outline-none border rounded-md p-2 mt-1 w-full" placeholder="Naruto...">
            </div>

            <div class="mt-4 mx-4">
                <h1 class="text-md font-bold text-start">Type</h1>
                <select id="swal-select1" class="w-full border rounded-md p-2 mt-1 focus:outline-none">
                    <option value="Manga">Manga</option>
                    <option value="Manhwa">Manhwa</option>
                    <option value="Manhua">Manhua</option>
                </select>
            </div>

            <div class="mt-4 mx-4">
                <h1 class="text-md font-bold text-start">Genre</h1>
                <input id="swal-input2" value="${series.genre}" class="focus:outline-none border rounded-md p-2 mt-1 w-full" placeholder="Action,Adventure...">
            </div>

            <div class="mt-4 mx-4">
                <h1 class="text-md font-bold text-start">Status</h1>
                <select id="swal-select2" class="w-full border rounded-md p-2 mt-1 focus:outline-none">
                    <option value="Manga">Manga</option>
                    <option value="Manhwa">Manhwa</option>
                    <option value="Manhua">Manhua</option>
                </select>
            </div>

            <div class="mt-4 mx-4">
                <h1 class="text-md font-bold text-start">Release</h1>
                <input id="swal-input3" value="${series.release}" class="focus:outline-none border rounded-md p-2 mt-1 w-full" placeholder="17 Agustus 1945...">
            </div>
        </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
            return {
                title: document.getElementById('swal-input1').value,
                type: document.getElementById('swal-select1').value,
                genre: document.getElementById('swal-input2').value,
                status: document.getElementById('swal-select2').value,
                release: document.getElementById('swal-input3').value
            }

        }
    });

    return result
}