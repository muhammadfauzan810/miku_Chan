"use client";

import React, { useCallback, useEffect, useState } from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { FaExclamationTriangle } from "react-icons/fa";

const Page = ({ params }) => {
    // Ubah 'keyword' menjadi 'keywoard'
    const { keywoard } = params || {}; // Menambahkan fallback untuk params
    const [anime, setAnime] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const searchAnime = useCallback(async () => {
        if (!keywoard) {
            console.warn("Keywoard tidak ditemukan"); // Log jika keywoard tidak ada
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            const formattedKeywoard = encodeURIComponent(keywoard.trim());
            console.log("Mencari anime dengan keywoard:", formattedKeywoard); // Log keywoard yang dicari

            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${formattedKeywoard}`);
            if (!response.ok) throw new Error("Terjadi kesalahan saat mengambil data.");

            const res = await response.json();
            console.log("Respons API:", res); // Log respons dari API

            if (res.data && res.data.length > 0) {
                setAnime(res.data);
            } else {
                setAnime([]);
                setErrorMessage("Judul tidak ditemukan.");
            }
        } catch (error) {
            console.error("Error fetching anime data:", error);
            setAnime([]);
            setErrorMessage("Terjadi kesalahan saat mengambil data.");
        } finally {
            setLoading(false);
        }
    }, [keywoard]);

    useEffect(() => {
        console.log("Keywoard di useEffect:", keywoard); // Log keywoard sebelum pencarian
        if (keywoard) {
            searchAnime();
        }
    }, [searchAnime, keywoard]);

    const displayKeywoard = keywoard ? keywoard.replace(/%20/g, " ") : "";

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-102">
                <section className="flex flex-col items-center justify-center min-h-[60vh]">
                    <Header
                        title={`Hasil Pencarian untuk: ${displayKeywoard}...`}
                        linkTitle={`/search?keywoard=${encodeURIComponent(displayKeywoard)}`} // Ubah di sini juga
                    />
                    {loading ? (
                        <span className="text-xl text-gray-600">Sedang mencari...</span>
                    ) : errorMessage ? (
                        <div className="flex flex-col items-center mb-6">
                            <div className="flex items-center mb-2">
                                <FaExclamationTriangle className="text-red-600 text-3xl mr-2" />
                                <span className="font-bold text-3xl text-red-600 hover:scale-110 transition-transform duration-300 relative">
                                    Oops!
                                    <span className="absolute inset-0 bg-red-200 rounded-md blur-md opacity-50" />
                                </span>
                            </div>
                            <span className="text-base text-gray-800 bg-red-100 p-4 rounded-lg shadow-md border border-red-300 text-center">{errorMessage}</span>
                        </div>
                    ) : anime.length > 0 ? (
                        <AnimeList api={anime} />
                    ) : (
                        <span className="text-xl text-gray-600">Tidak ada hasil ditemukan.</span>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Page;
