import { db, Product } from 'astro:db';
import { v4 as UUID } from 'uuid';
import { seedProducts } from './seed-data';

// https://astro.build/db/seed
export default async function seed() {
    // TODO
    const queries: any = [];
    seedProducts.forEach((product) => {
        const id = UUID();
        queries.push(
            db.insert(Product).values({
                id,
                name: product.NombreProducto,
                price: Number(product.Precio),
                category: product.Categoria,
            })
        );
    });

    await db.batch(queries);
}
