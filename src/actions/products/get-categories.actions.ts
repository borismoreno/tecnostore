import { defineAction } from "astro:actions";
import { db, Product, sql } from "astro:db";
import type { Category } from "../../interfaces/category.interface";
import { z } from "astro:content";
import type { IProduct } from '../../interfaces/product.interface';

export const getCategories = defineAction({
    handler: async () => {
        // Get all categories from the database
        const categoryQuery = sql`SELECT DISTINCT category FROM ${Product}`;
        const { rows } = await db.run(categoryQuery);

        // Return the categories
        return {
            categories: rows as unknown as Category[]
        }
    }
});

export const getProductsByCategory = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (name) => {
        // Get all products from the database
        const productQuery = sql`SELECT * FROM ${Product} WHERE category = ${name}`;
        const { rows } = await db.run(productQuery);

        // Return the products
        return {
            products: rows as unknown as IProduct[]
        }
    }
});