// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.helloinsurance.dev',
    integrations: [sitemap(), tailwind()], //mdx(), 
    markdown: {
        smartypants: false,
      },
    //   redirects: {
    //     '/blog': 'https://helloinsurance.substack.com',
    // }
});