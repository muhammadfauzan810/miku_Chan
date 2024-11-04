import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    if (!api || api.length === 0) {
        return <span>Tidak ada anime ditemukan.</span>;
    }

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {api.map((topAnime) => {
                // Pastikan mal_id dan images.webp.image_url ada sebelum menggunakan
                if (!topAnime.mal_id || !topAnime.images.webp.image_url) {
                    console.warn("Data tidak lengkap untuk anime:", topAnime); // Log untuk membantu debugging
                    return null; // Jangan render item jika data tidak ada
                }

                return (
                    <Link key={topAnime.mal_id} href={`/${topAnime.mal_id}`} className="group block rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg">
                            <Image src={topAnime.images.webp.image_url} alt={topAnime.title} width={240} height={360} className="object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 transition-opacity duration-300 ease-in-out" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="font-bold text-lg text-white">{topAnime.title}</h3>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                            <span className="text-teal-500 font-semibold">{topAnime.score ? `Rating: ${topAnime.score}` : "N/A"}</span>
                            <span className="text-gray-400 text-sm">{topAnime.season || "Season: Unknown"}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default AnimeList;
