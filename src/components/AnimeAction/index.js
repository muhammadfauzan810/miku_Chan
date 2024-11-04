import Image from "next/image";
import Link from "next/link";

const AnimeAction = ({ api }) => {
    const items = [...api, ...api]; // Duplikasi item untuk efek seamless

    return (
        <div className="overflow-hidden bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex space-x-6 animate-scroll">
                {items.map((actionAnime) => (
                    <Link key={actionAnime.mal_id} href={`/${actionAnime.mal_id}`} className="block transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                        <div className="relative inline-block w-48 overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200 transition-all duration-300 transform hover:translate-y-[-5px]">
                            <Image src={actionAnime.images.webp.image_url} alt={actionAnime.title} width={240} height={360} className="object-cover h-60 w-full transition-transform duration-300 ease-in-out" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-white bg-gradient-to-t from-purple-700 to-transparent">{actionAnime.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AnimeAction;
