import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, image, id }) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <img
                src={image}
                alt={title}
                className="h-60 w-full object-cover" // Set height and width to fill the card
            />
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
        </Link>
    );
};

export default AnimeList;
