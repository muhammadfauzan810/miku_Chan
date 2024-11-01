"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value;
        if (keyword) {
            router.push(`/search/${keyword}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(event); // Panggil handleSearch saat Enter ditekan
        }
    };

    return (
        <div className="mt-4 lg:mt-0 lg:ml-4 relative">
            <input
                type="text"
                placeholder="Cari Anime..."
                className="bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring focus:ring-teal-500"
                ref={searchRef}
                onKeyDown={handleKeyDown} // Tangkap event keydown
            />
            <svg className="cursor-pointer absolute left-2 top-2.5 fill-current text-teal-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" onClick={handleSearch}>
                <path d="M8.5 15c-3.59 0-6.5-2.91-6.5-6.5S4.91 2 8.5 2s6.5 2.91 6.5 6.5S12.09 15 8.5 15zm0-11C5.46 4 3 6.46 3 9.5S5.46 15 8.5 15 14 12.54 14 9.5 11.54 4 8.5 4zm7 11l-3.5-3.5 1.41-1.41L16 13.58 16.86 14.5z" />
            </svg>
        </div>
    );
};

export default InputSearch;
