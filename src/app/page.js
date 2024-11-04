"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import AnimeAction from "@/components/AnimeAction";
import HeaderAction from "@/components/AnimeAction/HeaderAction";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
    const [topAnime, setTopAnime] = useState([]);
    const [latestAnime, setLatestAnime] = useState([]);
    const [actionAnime, setActionAnime] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTopAnime = useCallback(async () => {
        const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=8");
        if (!response.ok) throw new Error("Something went wrong!");
        const res = await response.json();
        setTopAnime(res.data || []);
    }, []);

    const getLatestAnime = useCallback(async () => {
        const response = await fetch("https://api.jikan.moe/v4/anime?limit=8&sort=updated");
        if (!response.ok) throw new Error("Something went wrong!");
        const res = await response.json();
        setLatestAnime(res.data || []);
    }, []);

    const getActionAnime = useCallback(async () => {
        const response = await fetch("https://api.jikan.moe/v4/anime?genre=1&limit=8");
        if (!response.ok) throw new Error("Something went wrong!");
        const res = await response.json();
        setActionAnime(res.data || []);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await Promise.all([getTopAnime(), getLatestAnime(), getActionAnime()]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getTopAnime, getLatestAnime, getActionAnime]);

    console.log("Top Anime:", topAnime); // Log data topAnime
    console.log("Latest Anime:", latestAnime); // Log data latestAnime
    console.log("Action Anime:", actionAnime); // Log data actionAnime

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            {loading ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-8 border-blue-500 border-t-transparent"></div>
                    <span className="mt-4 text-gray-600">Sedang memuat...</span>
                </div>
            ) : (
                <div>
                    <section>
                        <HeaderAction
                            title="Anime Action"
                            linkHref="Lihat Semua"
                            linkTitle="/action" // Pastikan URL ini sesuai dengan rute yang ada
                        />
                        {actionAnime.length > 0 ? <AnimeAction api={actionAnime} /> : <p>Tidak ada anime aksi untuk ditampilkan.</p>}
                    </section>

                    <section className="mb-8 mt-5">
                        <Header title="Paling Populer" linkHref="Lihat Semua" linkTitle="/populer" />
                        <AnimeList api={topAnime} />
                    </section>
                </div>
            )}
        </div>
    );
};

export default Page;
