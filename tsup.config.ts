import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"], // [1]
  dts: true, // [2]
  clean: true, // [3]
  sourcemap: true // [4]
});

/*
NOTES

[1]
The entrypoint to the library.

[2]
Enable TypeScript type definitions to be generated in the output. This
provides type-definitions to consumers.

[3]
Clean the `dist` directory before building. This is useful to ensure the
output is only the latest.

[4]
Sourcemaps for easier debugging.

*/
