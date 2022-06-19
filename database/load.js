import Migration from './migration.js';
import seedPontos from './data-pontos/seed.js';
import seedUser from './data-login/seed.js'; 

async function load() {
	try {
  	await Migration.up().then(async () => {
		await seedUser.loadSeed();
		await seedPontos.loadSeed();
		}, {})
	} catch (err) {
		console.error(err);
	}

}

load();