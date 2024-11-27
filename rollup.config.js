import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
const packageJson = require('./package.json');
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts'

export default [{
  input: './src/index.ts', // Entry point of your library
  output: [
    {
      file: packageJson.main, // CJS output
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module, // ESM output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    image(),
    // Exclude peer dependencies (react, react-dom, etc.) from the bundle
    peerDepsExternal(),
    // Resolve modules from `node_modules`
    resolve(),
    // Convert CommonJS modules to ES6
    commonjs(),
    // Compile TypeScript files
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
    // Handle CSS imports
    postcss()

  ],
  external: ["react","react-dom"] // Exclude peer dependencies
},
{
  input:'./src/index.ts',
  output:[{file:packageJson.types}],
  plugins:[dts.default()],
  external:[/\.css/]
}];
