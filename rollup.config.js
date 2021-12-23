import { terser } from "rollup-plugin-terser";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import * as path from "path";
import pkg from "./package.json";

const moduleName = pkg.name.replace(/^@.*\//, "");
const inputFileName = "dist-transpiled/index.js";
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName} v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default [
	// ES
	{
		input: inputFileName,
		output: [
			{
				file: pkg.module,
				format: "es",
				sourcemap: "inline",
				banner,
				exports: "named",
				plugins: [terser()],
			},
		],
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.devDependencies || {}),
		],
		plugins: [
			pluginCommonjs({
				extensions: [".js", ".ts"],
			}),
			babel({
				babelHelpers: "bundled",
				configFile: path.resolve(__dirname, ".babelrc.js"),
			}),
			pluginNodeResolve({
				browser: false,
			}),
		],
	},

	// CommonJS
	{
		input: inputFileName,
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: "inline",
				banner,
				exports: "named",
				plugins: [terser()],
			},
		],
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.devDependencies || {}),
		],
		plugins: [
			pluginCommonjs({
				extensions: [".js", ".ts"],
			}),
			babel({
				babelHelpers: "bundled",
				configFile: path.resolve(__dirname, ".babelrc.js"),
			}),
			pluginNodeResolve({
				browser: false,
			}),
		],
	},
];