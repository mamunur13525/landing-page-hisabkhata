import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

function compressDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found for compression: ${dir}`);
    return;
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      compressDirectory(fullPath);
    } else if (
      entry.isFile() &&
      /\.(html|css|js|json|svg|txt|xml)$/i.test(entry.name) &&
      !entry.name.endsWith('.gz') &&
      !entry.name.endsWith('.br')
    ) {
      const content = fs.readFileSync(fullPath);
      // Gzip compression (maximum compression level 9)
      const gz = zlib.gzipSync(content, { level: 9 });
      fs.writeFileSync(`${fullPath}.gz`, gz);
      // Brotli compression (maximum quality 11)
      const br = zlib.brotliCompressSync(content, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
        },
      });
      fs.writeFileSync(`${fullPath}.br`, br);
    }
  }
}

const staticCompressionPlugin = () => ({
  name: 'astro-static-compress',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const outDir = fileURLToPath(dir);
      compressDirectory(outDir);
      console.log(`✓ Successfully gzip & brotli compressed static assets in: ${outDir}`);
    },
  },
});

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [staticCompressionPlugin()],
  vite: {
    plugins: [
      tailwindcss(),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 512,
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 512,
      }),
    ],
  },
});
