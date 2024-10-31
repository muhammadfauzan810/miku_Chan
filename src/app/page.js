// app/page.js
import AnimeList from "@/components/AnimeList";

const Home = async () => {
    let anime;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`, {
            cache: "no-store", // Pastikan untuk selalu mengambil data terbaru
        });

        if (!response.ok) {
            console.error("Failed to fetch data:", response.statusText);
            // Jika gagal, Anda bisa mengembalikan nilai default atau mengatur anime menjadi array kosong
            anime = { data: [] };
        } else {
            anime = await response.json();
        }
    } catch (error) {
        console.error("An error occurred:", error);
        anime = { data: [] }; // Atau Anda bisa mengatur ini menjadi null atau nilai default lainnya
    }

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
                <h1 className="text-3xl font-extrabold text-gray-800">Paling Populer</h1>
                <a href="/semua-anime" className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    Lihat Semua
                </a>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                {anime.data.map((data) => (
                    <div key={data.mal_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl hover:scale-103">
                        <AnimeList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
                    </div>
                ))}
                ddddddd
            </div>
        </div>
    );
};

export default Home;
