function App() {
  return (<div class="flex justify-center items-center h-screen bg-gray-100">
		<div class="flex flex-row bg-black text-white font-sans w-4/5 max-w-3xl h-80 rounded-lg">
			<div>
				<img class="h-full rounded-tl-lg rounded-bl-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"/>
			</div>

			<div class="w-3/4 p-6">
				<h1 class="text-4xl tracking-widest h-10 min-h-10 max-h-10 overflow-hidden">KILL BILL: VOL. 1</h1>
				<div class="space-x-8">
					<span>2003</span>
					<span>111 min</span>
					<span>Action</span>
				</div>
				<div class="text-yellow-400 tracking-widest">**********</div>
				<p class="h-fit min-h-16 max-h-28 overflow-hidden text-ellipsis line-clamp-4">
				The lead character, called 'The Bride,' was a member of the Deadly Viper
				Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant
				with Bill's child, 'The Bride' decided to escape her life as a killer. She
				fled to Texas, met a young man, who, on the day of their wedding rehearsal was
				gunned down by
				</p>
				<div class="my-2 text-yellow-400"><a href="/">Read more</a></div>
				<button class="transition ease-in delay-150 duration-300 my-2 rounded bg-black
				px-2 py-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400
				hover:text-black hover:font-bold hover:p-1">WATCH TRAILER</button>
			</div>
		</div>
	</div>)
}

export default App
