import './chunks/_astro_actions_BflDQ4RQ.mjs';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { sql } from '@astrojs/db/dist/runtime/virtual.js';
import 'html-escaper';
import 'neotraverse/modern';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import './chunks/astro/server_CCyU3dUX.mjs';
import 'clsx';
import { d as defineAction } from './chunks/server_BbTPWX_m.mjs';
import * as mod from 'zod';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://tecnostore-borismoreno.aws-us-east-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Product = asDrizzleTable("Product", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Product", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Product", "primaryKey": false, "optional": false } }, "price": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "price", "collection": "Product", "primaryKey": false, "optional": false } }, "category": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "category", "collection": "Product", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCategories = defineAction({
  handler: async () => {
    const categoryQuery = sql`SELECT DISTINCT category FROM ${Product}`;
    const { rows } = await db.run(categoryQuery);
    return {
      categories: rows
    };
  }
});
const getProductsByCategory = defineAction({
  accept: "json",
  input: mod.string(),
  handler: async (name) => {
    const productQuery = sql`SELECT * FROM ${Product} WHERE category = ${name}`;
    const { rows } = await db.run(productQuery);
    return {
      products: rows
    };
  }
});

const server = {
  //actions
  //Products
  getCategories,
  getProductsByCategory
};

export { server };
