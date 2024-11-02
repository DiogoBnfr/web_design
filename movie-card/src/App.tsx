import MovieCard from './components/MovieCardComponent';

function App() {
	const movies = [
		{
			id: 1,
			cover: "https://posters.movieposterdb.com/20_10/2012/848228/l_848228_9bc5bc2a.jpg",
			title: "Vingadores",
			year: "2012",
			duration: 143,
			genre: "Ação, Aventura, Ficção",
			synopsis: "Nick Fury, diretor da S.H.I.E.L.D., reúne os super-heróis mais poderosos do planeta para formar os Vingadores e proteger a Terra de uma ameaça extraterrestre."
		},
		{
			id: 2,
			cover: "https://posters.movieposterdb.com/22_06/2001/120737/l_120737_0ff31144.jpg",
			title: "O Senhor dos Anéis: A Sociedade do Anel",
			year: "2001",
			duration: 178,
			genre: "Aventura, Fantasia, Drama",
			synopsis: "Um hobbit chamado Frodo Baggins recebe a missão de destruir o Um Anel e salvar a Terra Média de Sauron."
		},
		{
			id: 3,
			cover: "https://posters.movieposterdb.com/22_07/1972/68646/l_68646_8c811dec.jpg",
			title: "O Poderoso Chefão",
			year: "1972",
			duration: 177,
			genre: "Drama, Crime",
			synopsis: "O filme conta a história de Don Vito Corleone, um poderoso chefão da máfia italiana nos EUA."
		},
		{
			id: 4,
			cover: "https://posters.movieposterdb.com/07_10/1997/119116/l_119116_392c38e7.jpg",
			title: "O Quinto Elemento",
			year: "1997",
			duration: 126,
			genre: "Ficção, Ação, Aventura",
			synopsis: "Em um futuro distante, um taxista chamado Korben Dallas se envolve em uma batalha para salvar o mundo de um mal antigo."
		},
		{
			id: 5,
			cover: "https://posters.movieposterdb.com/12_05/1977/76759/l_76759_efc02969.jpg",
			title: "Star Wars: Episódio IV - Uma Nova Esperança",
			year: "1977",
			duration: 121,
			genre: "Ficção, Ação, Aventura",
			synopsis: "O filme segue a jornada de Luke Skywalker, um jovem que se junta à Rebelião para derrotar o Império Galáctico."
		}
	];

	return (
		<div className="flex flex-col justify-center items-center h-full bg-gray-100">
			{movies.map((movie) => (
				<MovieCard
					cover={movie.cover}
					title={movie.title}
					year={movie.year}
					duration={movie.duration}
					genre={movie.genre}
					synopsis={movie.synopsis}
				/>
			))}
		</div>
	)
}

export default App
