# Cuelume 0.2.2

Source: https://github.com/danielwh2/cuelume

Author: Daniel Belyi. Distributed under the MIT license (see `LICENSE`).

This unmodified npm release was bundled as a browser IIFE named `Cuelume` with esbuild 0.28.2. The library runs locally without requests to a CDN. YOIN supplies its own music controls, preferences and semantic event mapping in `audio.js`.

Rebuild from the npm package contents:

`esbuild package/dist/index.js --bundle --format=iife --global-name=Cuelume --target=es2020 --minify --outfile=cuelume.js`

Original package: `cuelume@0.2.2`; npm tarball SHA-1: `0c97fdbf4e05a1fdb0d523ab5fca76cb421889f8`.
