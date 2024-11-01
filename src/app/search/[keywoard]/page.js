"use client";
import React, { useCallback, useEffect, useState } from "react"; // Import React here
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { FaExclamationTriangle } from "react-icons/fa";

const Page = ({ params }) => {
    const { keywoard } = React.use(params); // Unwrap params with React.use()
    const [anime, setAnime] = useState([]); // State for storing anime data
    const [errorMessage, setErrorMessage] = useState(""); // State for storing error messages
    const [loading, setLoading] = useState(false); // State for loading status

    const SearchAnime = useCallback(async () => {
        if (!keywoard) return; // Exit if no keyword

        setLoading(true); // Set loading to true
        setErrorMessage(""); // Reset error message before search
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${keywoard}`);
            if (!response.ok) throw new Error("Something went wrong!");

            const res = await response.json();
            if (res.data && res.data.length > 0) {
                setAnime(res.data);
            } else {
                setAnime([]); // Clear anime data if no results
                setErrorMessage("Judul tidak ditemukan."); // Set error message
            }
        } catch (error) {
            console.error("Error fetching anime data:", error);
            setAnime([]); // Clear anime data
            setErrorMessage("Terjadi kesalahan saat mengambil data."); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    }, [keywoard]);

    useEffect(() => {
        if (keywoard) {
            SearchAnime(); // Trigger anime search whenever keyword changes
        }
    }, [SearchAnime, keywoard]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                SearchAnime(); // Trigger search on Enter key press
            }
        };

        window.addEventListener("keydown", handleKeyDown); // Add event listener
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Remove listener on unmount
        };
    }, [SearchAnime]);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-102">
                <section className="flex flex-col items-center justify-center min-h-[60vh]">
                    <Header title={`Hasil Pencarian untuk: ${keywoard}...`} />
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
                    ) : null}
                </section>
            </div>
        </div>
    );
};

export default Page;
