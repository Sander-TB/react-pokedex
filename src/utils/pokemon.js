export async function getAllPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((result) => result.json())
			.then((data) => {
				resolve(data);
			});
	});
}

export async function getOnePokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((result) => result.json())
			.then((data) => {
				resolve(data);
			});
	});
}
