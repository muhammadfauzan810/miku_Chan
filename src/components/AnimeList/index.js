import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {api.map((topAnime) => (
                <Link key={topAnime.mal_id} href={`/${topAnime.mal_id}`} className="cursor-pointer">
                    <div className="h-60 w-full overflow-hidden">
                        <Image src={topAnime.images.webp.image_url} alt={topAnime.title} width={240} height={360} className="object-cover h-full w-full" />
                    </div>
                    <h3 className="font-bold md:text-xl text-md p-4">{topAnime.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default AnimeList;
