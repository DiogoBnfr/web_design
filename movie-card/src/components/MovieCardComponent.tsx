import PrimaryButton from "./PrimaryButtonComponent";

interface MovieCardProps {
	cover: string;
	title: string;
	year: string;
	duration: number;
	genre: string;
	synopsis: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ cover, title, year, duration, genre, synopsis }) => {
	return (
		<div className="flex flex-row bg-black text-white font-sans w-3/5 max-w-3xl m-2 rounded-lg shadow-2xl">
			<div>
				<img className="h-full rounded-tl-lg rounded-bl-lg" src={cover} />
			</div>
			<div className="w-3/4 p-6">
				<h1 className="text-4xl tracking-widest h-12 min-h-12 max-h-12 overflow-hidden">{title}</h1>
				<div className="space-x-8">
					<span>{year}</span>
					<span>{duration}min</span>
					<span>{genre}</span>
				</div>
				<div className="text-yellow-400 tracking-widest">**********</div>
				<p className="h-fit min-h-16 max-h-28 overflow-hidden text-ellipsis line-clamp-4">{synopsis}</p>
				<div className="my-2 text-yellow-400"><a href="/">Read more</a></div>
				<PrimaryButton text="WATCH TRAILER" />
			</div>
		</div>
	)
}

export default MovieCard;
