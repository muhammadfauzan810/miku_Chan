"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
    const [topAnime, setAnime] = useState([]);

    const getAnime = useCallback(async () => {
        try {
            const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=8");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const res = await response.json();
            setAnime(res.data || []); // Ensure setAnime is always called with an array
        } catch (error) {
            console.error("Error fetching anime data:", error);
            setAnime([]); // Set an empty array on error to avoid issues in AnimeList
        }
    }, []);

    useEffect(() => {
        getAnime();
    }, [getAnime]);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            {/* Anime Paling Populer */}
            <section>
                <Header title="Paling Populer" linkHref="Lihat Semua" linkTitle="/populer" />
                <AnimeList api={topAnime} />
            </section>

            {/* Anime Terbaru */}
        </div>
    );
};

export default Page;
