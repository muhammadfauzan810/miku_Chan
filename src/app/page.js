import AnimeList from "@/components/AnimeList";
const Home = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
    const anime = await response.json();
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
                <h1 className="text-3xl font-extrabold text-gray-800">Paling Populer</h1>
                <a href="/semua-anime" className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    Lihat Semua
                </a>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                {anime.data.map((data) => {
                    return (
                        <div key={data.mal_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl hover:scale-103">
                            <AnimeList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
