"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useCallback, useEffect, useState } from "react";

const Page = ({ params }) => {
    console.log("Params received:", params); // Log params untuk debugging
    const { keywoard } = params; // Ambil keyword dari params
    const [anime, setAnime] = useState([]); // State untuk menyimpan data anime

    const SearchAnime = useCallback(async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${keywoard}`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const res = await response.json();
            setAnime(res.data || []);
        } catch (error) {
            console.error("Error fetching anime data:", error);
            setAnime([]);
        }
    }, [keywoard]);

    useEffect(() => {
        if (keywoard) {
            // Pastikan keyword tidak undefined sebelum memanggil fungsi
            SearchAnime();
        }
    }, [SearchAnime, keywoard]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                SearchAnime(); // Panggil fungsi pencarian jika Enter ditekan
            }
        };

        window.addEventListener("keydown", handleKeyDown); // Tambahkan event listener
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Hapus event listener saat komponen di-unmount
        };
    }, [SearchAnime]); // Tambahkan SearchAnime sebagai dependency

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <section>
                <Header title={`Berikut hasil Pencarian: ${keywoard}...`} />
                <AnimeList api={anime} />
            </section>
        </div>
    );
};

export default Page;
