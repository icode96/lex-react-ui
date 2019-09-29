import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import fs from 'fs';
import glob from 'glob';

import pkg from "./package.json";

const externalModules = [
  'antd'
];
/* initialize CSS files because of a catch-22 situation:
  https://github.com/rollup/rollup/issues/1404 
*/
  glob.sync('src/**/*.css').forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
  const definition = `${css}.d.ts`
  if (!fs.existsSync(definition))
    fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
})

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  external: externalModules,
  plugins: [
    external(),
    resolve(),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    postcss({
			extract: 'build/lex-react-ui.css',
			plugins: [autoprefixer()],
			writeDefinitions: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
  ]
};