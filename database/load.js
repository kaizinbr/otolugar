import Migration from './migration.js';

async function load() {
  await Migration.up();
}

load();