import Migration from './migration.js';
import seedUser from './data-login/seed.js'; 


async function load() {
  await Migration.up();
  await seedUser.loadSeed();
}

load();