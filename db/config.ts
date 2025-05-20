import { defineDb, defineTable, column } from 'astro:db';

const Product = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        name: column.text(),
        price: column.number(),
        category: column.text(),
    }
});

// https://astro.build/db/config
export default defineDb({
    tables: { Product }
});
