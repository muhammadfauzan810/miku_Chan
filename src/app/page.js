"use client";
import AnimeList from "@/components/AnimeList";
import { apiUrl } from "@/utility";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const apiUrl = new URL(process.env.NEXT_PUBLIC_API_BASE_URL ?? "");

const Home = () => {
    const [anime, setAnime] = useState([]);

    const getAnime = useCallback(async () => {
        try {
            const response = await fetch(`${apiUrl}/top/anime?limit=8`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const res = await response.json();
            setAnime(res.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getAnime();
    }, []);
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
                <h1 className="text-3xl font-extrabold text-gray-800">Paling Populer</h1>
                <Link href="/semua-anime" className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    Lihat Semua
                </Link>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                {anime.map((data) => {
                    return (
                        <div key={data.mal_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl hover:scale-103">
                            <AnimeList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
                        </div>
                    );
                })}
                {anime.length < 1 && <h1 className="font-bold text-gray-500">Not Found</h1>}
            </div>
        </div>
    );
};

export default Home;
