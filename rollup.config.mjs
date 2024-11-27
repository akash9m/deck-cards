import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import image from '@rollup/plugin-image';
const packageJson = require('./package.json');

export default {
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
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    // Convert CommonJS modules to ES6
    commonjs(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    // Handle CSS imports
    postcss({
      extensions: ['.css', '.scss'],
      minimize: true,
    }),
  ],
  external: Object.keys(packageJson.peerDependencies || {}), // Exclude peer dependencies
};
