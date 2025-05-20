// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import awsAmplify from 'astro-aws-amplify';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [db()],
    output: 'server',
    adapter: awsAmplify(),
});